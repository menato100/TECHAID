"use client";

import { useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTextProviders, getVisionEnabledProviders } from "@/lib/api/util";

interface ModelSelectorProps {
  selectedModel: string;
  onChange: (model: string) => void;
  supportsVision?: boolean;
}

export function ModelSelector({ 
  selectedModel, 
  onChange,
  supportsVision = false
}: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [models, setModels] = useState<string[]>([]);
  
  useEffect(() => {
    // Get available models based on whether vision is supported
    const availableModels = supportsVision 
      ? getVisionEnabledProviders() 
      : getTextProviders();
    
    setModels(availableModels);
    
    // If the selected model isn't in the available models, select the first one
    if (availableModels.length > 0 && !availableModels.includes(selectedModel)) {
      onChange(availableModels[0]);
    }
  }, [supportsVision, selectedModel, onChange]);

  // Format model name for display
  const formatModelName = (modelKey: string): string => {
    // Convert model keys to user-friendly names
    const modelNames: Record<string, string> = {
      "azure-gpt-4o": "GPT-4o",
      // Add more model mappings as they become available
    };
    
    return modelNames[modelKey] || modelKey;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm border rounded-md bg-background hover:bg-accent/20 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{formatModelName(selectedModel)}</span>
        <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
      </button>
      
      {isOpen && (
        <div 
          className="absolute z-10 w-full mt-1 bg-card border rounded-md shadow-md"
          role="listbox"
        >
          {models.map((model) => (
            <button
              key={model}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm hover:bg-accent/20 transition-colors",
                selectedModel === model && "bg-accent/10"
              )}
              role="option"
              aria-selected={selectedModel === model}
              onClick={() => {
                onChange(model);
                setIsOpen(false);
              }}
            >
              <span className="flex-1">{formatModelName(model)}</span>
              {selectedModel === model && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
