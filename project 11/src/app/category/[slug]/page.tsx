"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { Newsletter } from "@/components/newsletter";

// Category data
const categories = {
  "hardware": {
    title: "Hardware",
    description: "The latest news and reviews on computer hardware, components, and technology innovations.",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    articles: [{
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
    }, {
      title: "Intel's Meteor Lake Architecture: What to Expect",
      excerpt: "Intel's upcoming Meteor Lake processors will introduce a new tiled architecture and improved integrated graphics.",
      slug: "intel-meteor-lake",
      category: "Hardware",
      categorySlug: "hardware",
      date: "April 2, 2025",
      readTime: "6 min read",
      image: "https://picsum.photos/200"
    }, {
      title: "The Rise of PCIe 5.0 SSDs: Next-Generation Storage Performance",
      excerpt: "PCIe 5.0 SSDs are beginning to enter the market, promising unprecedented speeds for consumer storage.",
      slug: "pcie-5-ssds",
      category: "Hardware",
      categorySlug: "hardware",
      date: "March 28, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }, {
      title: "DDR5 Memory: Is It Time to Upgrade?",
      excerpt: "DDR5 memory is becoming more mainstream, but is it worth upgrading from DDR4? We analyze performance gains and price considerations.",
      slug: "ddr5-memory-upgrade",
      category: "Hardware",
      categorySlug: "hardware",
      date: "March 25, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
    }]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Stay informed about the latest cybersecurity threats, vulnerabilities, and best practices to protect your digital assets.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    articles: [{
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
    }, {
      title: "Implementing Zero Trust Security: Beyond the Buzzword",
      excerpt: "Zero Trust is more than just a security concept. Learn practical steps for implementing this approach in your organization.",
      date: "April 1, 2025",
      readTime: "11 min read",
      slug: "implementing-zero-trust",
      category: "Cybersecurity",
      categorySlug: "cybersecurity",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }, {
      title: "Supply Chain Attacks: The Invisible Threat to Your Security",
      excerpt: "Supply chain attacks target the weakest links in your trusted network. Discover how these sophisticated attacks work and how to defend against them.",
      slug: "supply-chain-attacks",
      category: "Cybersecurity",
      categorySlug: "cybersecurity",
      date: "March 28, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1034&q=80"
    }]
  },
  "cloud": {
    title: "Cloud Computing",
    description: "Explore the latest developments in cloud technologies, services, and strategies for digital transformation.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    articles: [{
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
    }, {
      title: "Cloud Cost Optimization: Strategies for Reducing Your Bill",
      excerpt: "Cloud costs can quickly spiral out of control. Discover practical techniques for optimizing your cloud spending without sacrificing performance.",
      slug: "cloud-cost-optimization",
      category: "Cloud",
      categorySlug: "cloud",
      date: "March 30, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }, {
      title: "Edge Computing and the Cloud: Finding the Right Balance",
      excerpt: "The relationship between edge computing and cloud services is evolving. Learn how to create an architecture that leverages the strengths of both approaches.",
      slug: "edge-computing-cloud-balance",
      category: "Cloud",
      categorySlug: "cloud",
      date: "March 25, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }]
  },
  "ai": {
    title: "Artificial Intelligence",
    description: "Discover the latest advancements in AI technology, applications, and their impact on business and society.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    articles: [{
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
    }, {
      title: "Large Language Models: Beyond ChatGPT",
      excerpt: "The landscape of large language models is rapidly evolving. We examine the latest models and their capabilities beyond what ChatGPT introduced.",
      slug: "large-language-models",
      category: "AI",
      categorySlug: "ai",
      date: "April 2, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
    }, {
      title: "Computer Vision in 2025: State of the Art and Future Directions",
      excerpt: "Computer vision technology continues to advance at a rapid pace. Discover the latest breakthroughs and what they mean for various industries.",
      slug: "computer-vision-2025",
      category: "AI",
      categorySlug: "ai",
      date: "March 29, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    }]
  },
  "software": {
    title: "Software",
    description: "Stay updated on the latest software developments, programming trends, and digital tools for developers and users.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    articles: [{
      title: "The Rise of WebAssembly: Beyond the Browser",
      excerpt: "WebAssembly is expanding beyond its browser origins. Learn how this technology is enabling new use cases in server-side applications and edge computing.",
      slug: "webassembly-beyond-browser",
      category: "Software",
      categorySlug: "software",
      date: "April 9, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }, {
      title: "Rust in Production: Companies Leading the Adoption",
      excerpt: "Rust continues to gain traction in production environments. We examine how major companies are implementing Rust and the benefits they're seeing.",
      slug: "rust-in-production",
      category: "Software",
      categorySlug: "software",
      date: "April 6, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }, {
      title: "Microservices vs. Monoliths: Finding the Right Balance",
      excerpt: "The pendulum is swinging back from extreme microservice architectures. We explore how companies are finding the optimal balance for their needs.",
      slug: "microservices-vs-monoliths",
      category: "Software",
      categorySlug: "software",
      date: "April 3, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1034&q=80"
    }, {
      title: "The State of JavaScript Frameworks in 2025",
      excerpt: "The JavaScript ecosystem continues to evolve rapidly. We analyze the current state of major frameworks and emerging trends.",
      slug: "javascript-frameworks-2025",
      category: "Software",
      categorySlug: "software",
      date: "March 31, 2025",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    }]
  },
  "digital-transformation": {
    title: "Digital Transformation",
    description: "Explore how businesses are leveraging technology to reimagine their processes, culture, and customer experiences in the digital age.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    articles: [{
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
  }
};
export default function CategoryPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const [category, setCategory] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading the category data
    setIsLoading(true);
    setTimeout(() => {
      setCategory(categories[params.slug as keyof typeof categories] || null);
      setIsLoading(false);
    }, 300);
  }, [params.slug]);
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
  if (!category) {
    return <>
        <Nav />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist or has been moved.</p>
          <a href="/" className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Return to Homepage
          </a>
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
        
        {/* Articles Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.articles.map((article: any, index: number) => <ArticleCard key={index} {...article} />)}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <Newsletter />
      </main>
      
      <Footer />
    </>;
}