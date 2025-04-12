"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { Newsletter } from "@/components/newsletter";
import { SectionHeading } from "@/components/section-heading";

// Digital Transformation articles data
const digitalTransformationData = {
  title: "Digital Transformation",
  description: "Explore how businesses are leveraging technology to reimagine their processes, culture, and customer experiences in the digital age.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  articles: [{
    title: "The Five Stages of Digital Transformation Maturity",
    excerpt: "Understanding where your organization stands in its digital transformation journey is crucial for planning next steps. We explore the five stages of maturity.",
    slug: "five-stages-digital-transformation-maturity",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "April 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }, {
    title: "Building a Digital-First Culture: Beyond Technology",
    excerpt: "Successful digital transformation requires more than just technology adoption. Learn how to foster a digital-first mindset across your organization.",
    slug: "building-digital-first-culture",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "April 7, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }, {
    title: "Digital Transformation in Healthcare: Improving Patient Outcomes",
    excerpt: "Healthcare organizations are leveraging digital technologies to enhance patient care, streamline operations, and reduce costs.",
    slug: "digital-transformation-healthcare",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "April 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }, {
    title: "The Role of Data Analytics in Digital Transformation",
    excerpt: "Data-driven decision making is at the heart of successful digital transformation. Discover how organizations are leveraging analytics to drive change.",
    slug: "data-analytics-digital-transformation",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "April 3, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }, {
    title: "Digital Transformation in Manufacturing: Industry 4.0",
    excerpt: "Smart factories, IoT, and AI are revolutionizing manufacturing. Explore how Industry 4.0 is transforming production processes and supply chains.",
    slug: "digital-transformation-manufacturing",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "March 30, 2025",
    readTime: "9 min read",
    image: "https://picsum.photos/200"
  }, {
    title: "Overcoming Resistance to Digital Change",
    excerpt: "Change management is critical for digital transformation success. Learn strategies for addressing resistance and fostering adoption.",
    slug: "overcoming-resistance-digital-change",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "March 27, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1184&q=80"
  }]
};
export default function DigitalTransformationPage() {
  const [category, setCategory] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading the category data
    setIsLoading(true);
    setTimeout(() => {
      setCategory(digitalTransformationData);
      setIsLoading(false);
    }, 300);
  }, []);
  if (isLoading) {
    return <>
        <Nav />
        <div className="container mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-10 bg-muted/50 rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-muted/50 rounded w-1/2 mb-8"></div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="bg-card rounded-xl overflow-hidden">
                  <div className="h-48 bg-muted/50"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted/50 rounded w-1/4"></div>
                    <div className="h-6 bg-muted/50 rounded w-3/4"></div>
                    <div className="h-4 bg-muted/50 rounded w-full"></div>
                    <div className="h-4 bg-muted/50 rounded w-2/3"></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <Footer />
      </>;
  }
  return <>
      <Nav />
      
      <main className="pt-20">
        {/* Category Header */}
        <section className="relative py-20 mb-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-4xl md:text-5xl font-bold mb-4">
              {category.title}
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="text-xl text-white/80 max-w-2xl">
              {category.description}
            </motion.p>
          </div>
        </section>
        
        {/* Featured Article */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <SectionHeading title="Latest in Digital Transformation" subtitle="Explore our most recent insights on how technology is reshaping businesses and industries" />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.articles.map((article: any, index: number) => <ArticleCard key={index} {...article} />)}
            </div>
          </div>
        </section>
        
        {/* Digital Transformation Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <SectionHeading title="Digital Transformation Resources" subtitle="Tools, frameworks, and guides to help you navigate your digital transformation journey" centered />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[{
              title: "Digital Maturity Assessment",
              description: "Evaluate where your organization stands in its digital transformation journey with our comprehensive assessment tool.",
              icon: "BarChart"
            }, {
              title: "Change Management Toolkit",
              description: "Resources to help you manage the people side of digital transformation and foster adoption.",
              icon: "Users"
            }, {
              title: "Technology Selection Guide",
              description: "A framework for evaluating and selecting the right technologies for your digital initiatives.",
              icon: "Layers"
            }, {
              title: "Digital Transformation Roadmap",
              description: "A step-by-step guide to planning and executing your digital transformation strategy.",
              icon: "Map"
            }, {
              title: "ROI Calculator",
              description: "Tools to help you measure and communicate the business value of your digital investments.",
              icon: "Calculator"
            }, {
              title: "Case Study Library",
              description: "Real-world examples of successful digital transformation across various industries.",
              icon: "BookOpen"
            }].map((resource, index) => <motion.div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1 * index
            }}>
                  <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <a href="#" className="text-primary hover:underline inline-flex items-center">
                    Access Resource
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <Newsletter />
      </main>
      
      <Footer />
    </>;
}