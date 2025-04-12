"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AITextGeneration } from "@/components/ai-text-generation";
import { AIVisionGeneration } from "@/components/ai-vision-generation";
import { SectionHeading } from "@/components/section-heading";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function AIDemo() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="AI Model Integration Demo"
              subtitle="Explore our AI capabilities with text and vision models powered by advanced language models"
              centered
            />
            
            <div className="max-w-3xl mx-auto mt-12">
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="text">Text Generation</TabsTrigger>
                  <TabsTrigger value="vision">Vision Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="mt-4">
                  <div className="bg-card p-8 rounded-xl border shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Text Generation</h2>
                    <p className="text-muted-foreground mb-8">
                      Ask questions or request information using our advanced language models. Try asking about technology trends, coding help, or explanations of complex topics.
                    </p>
                    <AITextGeneration placeholder="Ask anything about technology, coding, or get explanations..." />
                  </div>
                </TabsContent>
                
                <TabsContent value="vision" className="mt-4">
                  <div className="bg-card p-8 rounded-xl border shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Vision Analysis</h2>
                    <p className="text-muted-foreground mb-8">
                      Upload an image and ask questions about it using our vision-enabled models. Great for analyzing tech products, diagrams, code screenshots, or any visual content.
                    </p>
                    <AIVisionGeneration placeholder="Ask about the uploaded image..." />
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-lg font-medium mb-3">About Our AI Models</h3>
                <p className="text-muted-foreground mb-4">
                  TECHAIDpro uses state-of-the-art AI models to provide accurate and helpful responses. Our models are regularly updated to ensure you get the most current information and capabilities.
                </p>
                <p className="text-muted-foreground">
                  All interactions with our AI models are processed securely. While we strive for accuracy, please verify critical information from multiple sources.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
