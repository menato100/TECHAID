"use client";

import { useState, useCallback, useRef } from "react";
import { Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModelSelector } from "@/components/model-selector";
import { generateTextWithImagesStream } from "@/lib/api/util";
import { cn } from "@/lib/utils";

interface AIVisionGenerationProps {
  placeholder?: string;
  className?: string;
}

export function AIVisionGeneration({ 
  placeholder = "Ask about this image...",
  className 
}: AIVisionGenerationProps) {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedModel, setSelectedModel] = useState("azure-gpt-4o");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }
    
    // Convert to base64
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  }, []);
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim() || !imageUrl || isGenerating) return;
    
    setIsGenerating(true);
    setResponse("");
    
    try {
      await generateTextWithImagesStream(
        prompt,
        [imageUrl],
        (chunk) => {
          setResponse(prev => prev + chunk);
        },
        selectedModel
      );
    } catch (error) {
      console.error("Error generating vision response:", error);
      setResponse("An error occurred while analyzing the image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, imageUrl, isGenerating, selectedModel]);
  
  const clearImage = useCallback(() => {
    setImageUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);
  
  return (
    <div className={className}>
      <div className="mb-4">
        <ModelSelector 
          selectedModel={selectedModel}
          onChange={setSelectedModel}
          supportsVision={true}
        />
      </div>
      
      <div className="mb-4">
        {imageUrl ? (
          <div className="relative">
            <img 
              src={imageUrl} 
              alt="Uploaded" 
              className="max-h-64 rounded-lg object-contain bg-muted/30 w-full"
            />
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 p-1 bg-background/80 rounded-full hover:bg-background"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div 
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/10 transition-colors",
              "flex flex-col items-center justify-center"
            )}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Click to upload an image or drag and drop
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
          </div>
        )}
      </div>
      
      {response && (
        <div className="p-4 mb-4 bg-card rounded-lg border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Response:</h3>
          <div className="whitespace-pre-wrap">{response}</div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={imageUrl ? placeholder : "Upload an image first..."}
          disabled={isGenerating || !imageUrl}
          className="flex-1 px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button 
          type="submit" 
          disabled={!prompt.trim() || !imageUrl || isGenerating}
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
