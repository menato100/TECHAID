"use client";

import { motion } from "framer-motion";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { Newsletter } from "@/components/newsletter";

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

export default function AboutPage() {
  return (
    <>
      <Nav />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn()}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                About TECHAIDpro
              </motion.h1>
              
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeIn(0.1)}
                className="text-xl text-muted-foreground mb-8"
              >
                Your trusted source for the latest technology news, reviews, and insights to help you navigate the digital world.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <motion.div 
                className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn()}
              >
                <SectionHeading
                  title="Our Mission"
                  subtitle="We believe in making technology accessible and understandable for everyone."
                />
                
                <p className="text-lg text-muted-foreground mb-6">
                  At TECHAIDpro, we're dedicated to providing clear, accurate, and insightful coverage of the technology landscape. Our mission is to help our readers stay informed about the latest developments, understand complex technologies, and make better decisions about the tools and services they use.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  Whether you're a tech enthusiast, a professional in the industry, or simply someone trying to navigate the increasingly digital world, our content is designed to provide value and clarity in an often confusing technological landscape.
                </p>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.3)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our Mission" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Meet Our Team"
              subtitle="A diverse group of technology experts passionate about sharing knowledge and insights."
              centered
            />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {[
                {
                  name: "Michael Chen",
                  role: "Hardware Editor",
                  bio: "With over 10 years of experience reviewing computer hardware, Michael brings deep technical knowledge and practical insights to his coverage of the latest components.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "Sarah Johnson",
                  role: "Storage Technology Analyst",
                  bio: "Sarah specializes in storage technologies, from consumer SSDs to enterprise storage solutions, with a particular focus on emerging technologies and market trends.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "David Wilson",
                  role: "Cybersecurity Specialist",
                  bio: "With a background in information security, David covers the latest threats, vulnerabilities, and best practices to help readers protect their digital assets.",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "Emily Zhang",
                  role: "Cloud Solutions Architect",
                  bio: "Emily brings practical experience from her work with major cloud providers, offering insights into cloud technologies, services, and implementation strategies.",
                  image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
                },
                {
                  name: "Alex Thompson",
                  role: "AI & Productivity Specialist",
                  bio: "Alex focuses on artificial intelligence and its applications in productivity tools, with a particular interest in how AI is transforming work and creativity.",
                  image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "Jessica Martinez",
                  role: "Software Development Editor",
                  bio: "Jessica covers programming languages, frameworks, and development methodologies, with a focus on making complex technical concepts accessible.",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80"
                },
                {
                  name: "Robert Kim",
                  role: "Consumer Electronics Reviewer",
                  bio: "Robert tests and reviews the latest consumer gadgets, from smartphones to smart home devices, with a keen eye for user experience and value.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "Olivia Taylor",
                  role: "Digital Transformation Consultant",
                  bio: "Olivia writes about how businesses can leverage technology for growth and innovation, drawing on her experience advising companies on digital strategy.",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn(0.1 * index)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide our work and content creation."
              centered
            />
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Accuracy",
                  description: "We are committed to thorough research and fact-checking to ensure our content is reliable and trustworthy."
                },
                {
                  title: "Clarity",
                  description: "We strive to explain complex technological concepts in clear, accessible language without unnecessary jargon."
                },
                {
                  title: "Independence",
                  description: "Our reviews and analyses are independent and unbiased, free from external influence or commercial pressure."
                },
                {
                  title: "Relevance",
                  description: "We focus on technologies and developments that matter most to our readers and have real-world impact."
                },
                {
                  title: "Depth",
                  description: "We go beyond surface-level coverage to provide context, analysis, and meaningful insights."
                },
                {
                  title: "Inclusivity",
                  description: "We create content that's accessible to readers with varying levels of technical knowledge and backgrounds."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn(0.1 * index)}
                >
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="Our Story"
                subtitle="How TECHAIDpro came to be and where we're headed."
                centered
              />
              
              <motion.div
                className="prose prose-lg max-w-none mt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn()}
              >
                <p>
                  TECHAIDpro began in 2020 as a small blog run by a group of technology enthusiasts who saw a need for more accessible and comprehensive technology coverage. What started as a passion project quickly grew into something much larger as our audience expanded and our content resonated with readers looking for clear explanations of complex technologies.
                </p>
                
                <p>
                  As our readership grew, so did our team. We brought on specialists in various technology domains to ensure our coverage was both broad and deep. Today, TECHAIDpro is a trusted source of technology news, reviews, and insights for readers around the world.
                </p>
                
                <p>
                  Our growth has been guided by a simple principle: technology should be accessible to everyone. Whether explaining the latest hardware innovations, demystifying cybersecurity threats, or analyzing cloud computing trends, we strive to make our content valuable to both technology professionals and everyday users.
                </p>
                
                <p>
                  Looking ahead, we're committed to expanding our coverage into emerging technologies while maintaining the quality and accessibility that our readers have come to expect. As technology continues to evolve and shape our world, TECHAIDpro will be there to help you understand what matters and why.
                </p>
              </motion.div>
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
