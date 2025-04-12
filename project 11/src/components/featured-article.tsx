"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  image: string;
}

export function FeaturedArticle({
  title,
  excerpt,
  slug,
  category,
  categorySlug,
  date,
  readTime,
  image,
}: FeaturedArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
      
      <img
        src={image}
        alt={title}
        className="w-full h-[500px] object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
        <Link href={`/category/${categorySlug}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-primary/80 text-primary-foreground text-sm font-medium mb-4">
            {category}
          </span>
        </Link>
        
        <Link href={`/${slug}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-primary/90 transition-colors">
            {title}
          </h2>
        </Link>
        
        <p className="text-lg text-white/80 mb-6 max-w-3xl">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-white/70 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50 mx-2"></div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <Link 
          href={`/${slug}`}
          className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Read Article <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
