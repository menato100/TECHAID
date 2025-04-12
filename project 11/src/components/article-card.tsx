"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  className?: string;
}

export function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  categorySlug,
  date,
  readTime,
  image,
  featured = false,
  className,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <Link href={`/${slug}`}>
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Link href={`/category/${categorySlug}`}>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/80 text-primary-foreground text-xs font-medium">
                {category}
              </span>
            </Link>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <Link href={`/${slug}`}>
          <h3 className={cn(
            "font-semibold mb-3 transition-colors group-hover:text-primary",
            featured ? "text-xl" : "text-lg"
          )}>
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <Link href={`/${slug}`} className="inline-flex items-center text-primary hover:underline">
          Read more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
