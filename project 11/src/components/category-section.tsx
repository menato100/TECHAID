"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import Link from "next/link";

interface CategorySectionProps {
  title: string;
  slug: string;
  articles: {
    title: string;
    excerpt: string;
    slug: string;
    category: string;
    categorySlug: string;
    date: string;
    readTime: string;
    image: string;
  }[];
}

export function CategorySection({ title, slug, articles }: CategorySectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold"
          >
            {title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href={`/category/${slug}`}
              className="inline-flex items-center text-primary hover:underline"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              {...article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
