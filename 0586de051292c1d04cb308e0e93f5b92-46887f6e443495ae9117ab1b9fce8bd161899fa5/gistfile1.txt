"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import { FeaturedArticle } from "@/components/featured-article";
import { CategorySection } from "@/components/category-section";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

// Animation variants
const fadeIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6
    }
  }
});

// Article data
const featuredArticle = {
  title: "NVIDIA GeForce RTX 40 Series: Next-Gen Graphics Cards Unveiled",
  excerpt: "NVIDIA has officially unveiled its next-generation GeForce RTX 40 series graphics cards, powered by the new Ada Lovelace architecture. These GPUs promise significant performance improvements and new features for gamers and content creators.",
  slug: "nvidia-geforce-rtx-40-series",
  category: "Hardware",
  categorySlug: "hardware",
  date: "April 10, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
};
const hardwareArticles = [{
  title: "NVIDIA GeForce RTX 40 Series: Next-Gen Graphics Cards Unveiled",
  excerpt: "NVIDIA has officially unveiled its next-generation GeForce RTX 40 series graphics cards, powered by the new Ada Lovelace architecture.",
  slug: "nvidia-geforce-rtx-40-series",
  category: "Hardware",
  categorySlug: "hardware",
  date: "April 10, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
}, {
  title: "WD Plans to Mass-Produce 162-Layer NAND by the End of the Year",
  excerpt: "Western Digital is preparing to mass-produce 162-layer NAND flash memory by the end of the year, with plans for over 200 layers by 2024.",
  slug: "wd-plans-to-mass-produce-162-layer-nand-by-the-end-of-the-year-over-200-layers-by-2024-2",
  category: "Hardware",
  categorySlug: "hardware",
  date: "April 8, 2025",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1601737487795-dab272f52420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
}, {
  title: "AMD Ryzen 7000 Series: A New Era of Desktop Performance",
  excerpt: "AMD's Ryzen 7000 series processors bring significant IPC improvements and higher clock speeds to the desktop market.",
  slug: "amd-ryzen-7000-series",
  category: "Hardware",
  categorySlug: "hardware",
  date: "April 5, 2025",
  readTime: "7 min read",
  image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
}];
const cybersecurityArticles = [{
  title: "Understanding Email Attacks: The Anatomy of a Sneaky Cyber Threat",
  excerpt: "Email attacks remain one of the most common vectors for cybercriminals. Learn how to identify and protect yourself from these sophisticated threats.",
  slug: "understanding-email-attacks-the-anatomy-of-email-attacks-a-sneaky-cyber-threat",
  category: "Cybersecurity",
  categorySlug: "cybersecurity",
  date: "April 9, 2025",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
}, {
  title: "Zero-Day Vulnerabilities: What They Are and Why They Matter",
  excerpt: "Zero-day vulnerabilities represent some of the most dangerous security threats. We explain what they are and how organizations can protect themselves.",
  slug: "zero-day-vulnerabilities",
  category: "Cybersecurity",
  categorySlug: "cybersecurity",
  date: "April 7, 2025",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
}, {
  title: "The Rise of Ransomware-as-a-Service: A Growing Threat",
  excerpt: "Ransomware-as-a-Service is lowering the barrier to entry for cybercriminals. Here's what businesses need to know about this evolving threat.",
  slug: "ransomware-as-a-service",
  category: "Cybersecurity",
  categorySlug: "cybersecurity",
  date: "April 4, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
}];
const cloudArticles = [{
  title: "Empowering Digital Libraries with Cloud-Based Services",
  excerpt: "Cloud computing is transforming how libraries store, manage, and provide access to digital resources. Discover the benefits and implementation strategies.",
  slug: "empowering-digital-libraries-with-cloud-based-services",
  category: "Cloud",
  categorySlug: "cloud",
  date: "April 8, 2025",
  readTime: "7 min read",
  image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
}, {
  title: "Multi-Cloud Strategies: Benefits and Challenges",
  excerpt: "More organizations are adopting multi-cloud approaches. We examine the advantages, potential pitfalls, and best practices for implementation.",
  slug: "multi-cloud-strategies",
  category: "Cloud",
  categorySlug: "cloud",
  date: "April 6, 2025",
  readTime: "9 min read",
  image: "https://picsum.photos/200"
}, {
  title: "Serverless Computing: The Future of Cloud Architecture",
  excerpt: "Serverless computing is changing how developers build and deploy applications. Learn about this paradigm shift and its implications.",
  slug: "serverless-computing",
  category: "Cloud",
  categorySlug: "cloud",
  date: "April 3, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
}];
const aiArticles = [{
  title: "Enhancing Work Productivity with Microsoft Copilot",
  excerpt: "Microsoft Copilot is revolutionizing how professionals work with AI assistance. Discover how this tool can boost your productivity and streamline workflows.",
  slug: "enhancing-work-productivity-with-microsoft-copilot",
  category: "AI",
  categorySlug: "ai",
  date: "April 11, 2025",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
}, {
  title: "The Ethics of Generative AI: Challenges and Considerations",
  excerpt: "As generative AI becomes more powerful, ethical questions arise. We explore the key considerations for responsible AI development and use.",
  slug: "ethics-of-generative-ai",
  category: "AI",
  categorySlug: "ai",
  date: "April 7, 2025",
  readTime: "11 min read",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80"
}, {
  title: "AI in Healthcare: Transforming Patient Care and Diagnosis",
  excerpt: "Artificial intelligence is making significant inroads in healthcare. Learn about the latest applications and their impact on patient outcomes.",
  slug: "ai-in-healthcare",
  category: "AI",
  categorySlug: "ai",
  date: "April 5, 2025",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
}];
// Digital Transformation articles
const digitalTransformationArticles = [{
  title: "The Five Stages of Digital Transformation Maturity",
  excerpt: "Understanding where your organization stands in its digital transformation journey is crucial for planning next steps and setting realistic goals.",
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
}];

export default function HomePage() {
  return <>
      <Nav />
      
      <main>
        {/* Featured Article Hero */}
        <section className="pt-20">
          <FeaturedArticle {...featuredArticle} />
        </section>
        
        {/* AI Section - Moved to top since it has the most recent article */}
        <CategorySection title="Artificial Intelligence" slug="ai" articles={aiArticles} />
        
        {/* Digital Transformation Section */}
        <CategorySection title="Digital Transformation" slug="digital-transformation" articles={digitalTransformationArticles} />
        
        {/* Hardware Section */}
        <CategorySection title="Hardware News" slug="hardware" articles={hardwareArticles} />
        
        {/* Newsletter */}
        <Newsletter />
        
        {/* Cybersecurity Section */}
        <CategorySection title="Cybersecurity" slug="cybersecurity" articles={cybersecurityArticles} />
        
        {/* Cloud Computing Section */}
        <CategorySection title="Cloud Computing" slug="cloud" articles={cloudArticles} />
      </main>
      
      <Footer />
    </>;
}
