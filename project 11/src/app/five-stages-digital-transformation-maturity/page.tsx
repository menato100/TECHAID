"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { Newsletter } from "@/components/newsletter";
import { Button } from "@/components/ui/button";

// Article data
const article = {
  title: "The Five Stages of Digital Transformation Maturity",
  content: `
    <p class="text-lg mb-4">Understanding where your organization stands in its digital transformation journey is crucial for planning next steps and setting realistic goals. This article explores the five stages of digital transformation maturity and provides insights on how to progress through each stage.</p>
    
    <p class="mb-4">Digital transformation is not a one-time project but a continuous evolution. Organizations typically move through distinct stages as they mature in their digital capabilities, culture, and strategy. Recognizing your current stage can help you identify gaps and prioritize initiatives that will drive the most value.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Stage 1: Foundation Building</h2>
    
    <p class="mb-4">At this initial stage, organizations are just beginning to recognize the importance of digital technologies and are taking the first steps toward transformation.</p>
    
    <p class="mb-4">Key characteristics of this stage include:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Basic digital infrastructure being established</li>
      <li>Limited digital strategy, often focused on specific pain points</li>
      <li>Siloed digital initiatives with minimal coordination</li>
      <li>Traditional business models still dominant</li>
      <li>Digital literacy concentrated in IT departments</li>
    </ul>
    
    <p class="mb-4">Organizations at this stage should focus on building a solid technological foundation, increasing digital awareness across departments, and identifying quick wins that demonstrate the value of digital initiatives.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Stage 2: Opportunistic Exploration</h2>
    
    <p class="mb-4">In the second stage, organizations begin to explore digital opportunities more systematically, though efforts may still be somewhat fragmented.</p>
    
    <p class="mb-4">Key characteristics include:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Emerging digital strategy with defined goals</li>
      <li>Increased experimentation with digital technologies</li>
      <li>Growing cross-functional collaboration</li>
      <li>Initial attempts to digitize customer experiences</li>
      <li>Beginning to collect and analyze digital data</li>
    </ul>
    
    <p class="mb-4">At this stage, organizations should work on developing a more cohesive digital strategy, establishing governance structures, and fostering digital skills beyond the IT department.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Stage 3: Strategic Alignment</h2>
    
    <p class="mb-4">The third stage represents a significant shift as digital initiatives become aligned with broader business strategy and receive consistent executive support.</p>
    
    <p class="mb-4">Key characteristics include:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Digital strategy integrated with business strategy</li>
      <li>Executive-level ownership of digital transformation</li>
      <li>Formalized governance and funding models</li>
      <li>Customer experience increasingly digitized</li>
      <li>Data-driven decision making becoming standard</li>
      <li>Digital skills development programs in place</li>
    </ul>
    
    <p class="mb-4">Organizations at this stage should focus on scaling successful initiatives, developing more sophisticated data capabilities, and beginning to explore business model innovation.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Stage 4: Business Transformation</h2>
    
    <p class="mb-4">In the fourth stage, digital becomes central to how the organization operates and delivers value to customers.</p>
    
    <p class="mb-4">Key characteristics include:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Digital-first mindset permeating the organization</li>
      <li>Business models being reimagined and digitized</li>
      <li>Advanced data analytics driving innovation</li>
      <li>Agile methodologies adopted across functions</li>
      <li>Digital talent embedded throughout the organization</li>
      <li>Technology and business teams closely integrated</li>
    </ul>
    
    <p class="mb-4">At this stage, organizations should focus on accelerating innovation, optimizing digital operations, and exploring ecosystem partnerships that can extend their digital capabilities.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Stage 5: Digital Leadership</h2>
    
    <p class="mb-4">The final stage represents digital maturity, where organizations not only excel in their digital capabilities but also shape industry standards and continuously reinvent themselves.</p>
    
    <p class="mb-4">Key characteristics include:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Digital innovation as a core competency</li>
      <li>Continuous business model evolution</li>
      <li>Predictive and prescriptive analytics capabilities</li>
      <li>Ecosystem orchestration and platform strategies</li>
      <li>Digital talent as a competitive advantage</li>
      <li>Technology driving new market creation</li>
    </ul>
    
    <p class="mb-4">Organizations at this stage focus on maintaining their digital edge through continuous innovation, talent development, and strategic technology investments.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Assessing Your Organization's Maturity</h2>
    
    <p class="mb-4">To determine where your organization stands, consider evaluating the following dimensions:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Strategy:</strong> How integrated is digital in your overall business strategy?</li>
      <li><strong>Culture:</strong> How pervasive is digital thinking across the organization?</li>
      <li><strong>Customer Experience:</strong> How seamless and personalized are your digital customer interactions?</li>
      <li><strong>Operations:</strong> To what extent have you digitized and automated core processes?</li>
      <li><strong>Technology:</strong> How modern and flexible is your technology infrastructure?</li>
      <li><strong>Data:</strong> How effectively do you collect, analyze, and act on data?</li>
      <li><strong>Innovation:</strong> How systematically do you explore and implement new digital opportunities?</li>
    </ul>
    
    <p class="mb-4">It's important to note that organizations may be at different maturity levels across these dimensions. For example, you might have advanced data capabilities but still struggle with cultural transformation.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Moving Up the Maturity Curve</h2>
    
    <p class="mb-4">Progressing through the maturity stages requires deliberate effort and investment. Here are some strategies to help your organization advance:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Secure executive sponsorship</strong> to ensure digital initiatives receive adequate resources and attention</li>
      <li><strong>Develop a clear roadmap</strong> with measurable milestones for your digital journey</li>
      <li><strong>Invest in digital talent</strong> through hiring, training, and partnerships</li>
      <li><strong>Foster a culture of experimentation</strong> that encourages innovation and tolerates calculated risks</li>
      <li><strong>Implement agile methodologies</strong> to increase speed and flexibility</li>
      <li><strong>Build data capabilities</strong> that enable more sophisticated analytics and insights</li>
      <li><strong>Modernize legacy systems</strong> that may be holding back digital progress</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
    
    <p class="mb-4">Digital transformation maturity is not achieved overnight. It's a journey that requires patience, persistence, and a willingness to continuously evolve. By understanding the five stages of maturity and honestly assessing where your organization stands, you can develop a more effective approach to advancing your digital transformation efforts.</p>
    
    <p class="mb-4">Remember that the goal is not simply to implement new technologies but to fundamentally transform how your organization creates and delivers value in the digital age. With a clear understanding of your current maturity level and a strategic approach to advancement, you can navigate the digital transformation journey with greater confidence and success.</p>
  `,
  category: "Digital Transformation",
  categorySlug: "digital-transformation",
  date: "April 10, 2025",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  author: {
    name: "Olivia Taylor",
    role: "Digital Transformation Consultant",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
  }
};

// Related articles
const relatedArticles = [
  {
    title: "Building a Digital-First Culture: Beyond Technology",
    excerpt: "Successful digital transformation requires more than just technology adoption. Learn how to foster a digital-first mindset across your organization.",
    slug: "building-digital-first-culture",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "April 7, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "The Role of Data Analytics in Digital Transformation",
    excerpt: "Data-driven decision making is at the heart of successful digital transformation. Discover how organizations are leveraging analytics to drive change.",
    slug: "data-analytics-digital-transformation",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "April 3, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Overcoming Resistance to Digital Change",
    excerpt: "Change management is critical for digital transformation success. Learn strategies for addressing resistance and fostering adoption.",
    slug: "overcoming-resistance-digital-change",
    category: "Digital Transformation",
    categorySlug: "digital-transformation",
    date: "March 27, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1184&q=80"
  }
];

export default function ArticlePage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading the article data
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);
  
  if (isLoading) {
    return (
      <>
        <Nav />
        <div className="container mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-10 bg-muted/50 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-muted/50 rounded w-1/2 mb-8"></div>
            <div className="h-96 bg-muted/50 rounded mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted/50 rounded w-full"></div>
              <div className="h-4 bg-muted/50 rounded w-full"></div>
              <div className="h-4 bg-muted/50 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Nav />
      
      <main className="pt-20">
        {/* Article Header */}
        <div className="relative h-[500px] mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category and Date */}
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <a 
                href={`/category/${article.categorySlug}`}
                className="text-primary font-medium hover:underline"
              >
                {article.category}
              </a>
              <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {article.title}
            </motion.h1>
            
            {/* Author */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={article.author.image} 
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">{article.author.name}</div>
                <div className="text-sm text-muted-foreground">{article.author.role}</div>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Share:</span>
                <button className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
              
              <button className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Bookmark className="h-4 w-4 mr-1" />
                <span>Save</span>
              </button>
            </div>
            
            {/* Article Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {["Digital Transformation", "Strategy", "Business", "Technology", "Innovation"].map((tag) => (
                  <a 
                    key={tag}
                    href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Digital Transformation Assessment CTA */}
        <section className="py-12 bg-muted/20 mt-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Assess Your Digital Transformation Maturity</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Take our comprehensive assessment to determine where your organization stands in its digital transformation journey and receive personalized recommendations for advancement.
              </p>
              <Button asChild>
                <a href="/digital-transformation-assessment">Take the Assessment</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Related Articles */}
        <section className="py-16 bg-muted/30 mt-8">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article, index) => (
                <ArticleCard
                  key={index}
                  {...article}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <Newsletter />
      </main>
      
      <Footer />
    </>
  );
}
