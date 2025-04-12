"use client";

import { useState, useCallback } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModelSelector } from "@/components/model-selector";
import { generateTextStream } from "@/lib/api/util";

interface AITextGenerationProps {
  placeholder?: string;
  className?: string;
}

export function AITextGeneration({ 
  placeholder = "Ask me anything...",
  className 
}: AITextGenerationProps) {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedModel, setSelectedModel] = useState("azure-gpt-4o");
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim() || isGenerating) return;
    
    setIsGenerating(true);
    setResponse("");
    
    try {
      await generateTextStream(
        prompt,
        (chunk) => {
          setResponse(prev => prev + chunk);
        },
        selectedModel
      );
    } catch (error) {
      console.error("Error generating text:", error);
      setResponse("An error occurred while generating the response. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, isGenerating, selectedModel]);
  
  return (
    <div className={className}>
      <div className="mb-4">
        <ModelSelector 
          selectedModel={selectedModel}
          onChange={setSelectedModel}
        />
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
          placeholder={placeholder}
          disabled={isGenerating}
          className="flex-1 px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button 
          type="submit" 
          disabled={!prompt.trim() || isGenerating}
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
