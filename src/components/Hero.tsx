"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import CallToAction from './CallToAction';
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const titles = useMemo(() => ["Converts", "Engages", "Drives Leads"], []);
  
  useEffect(() => {
    if (!isInView) return;
    
    const timeout = isMobile ? 2500 : 2000;
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, timeout);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length, isMobile, isInView]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative z-0 w-full flex flex-col rounded-3xl bg-background overflow-hidden sm:gap-y-12 gap-y-8 p-6 md:p-12"
    >
      {/* Background effects - using your existing styles */}
      <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
        <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

        {/* Main glow */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

        {/* Lamp effect */}
        <motion.div 
          initial={{ width: "8rem" }} 
          viewport={{ once: true }} 
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }} 
          whileInView={{ width: "16rem" }} 
          className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl" 
        />

        {/* Top line */}
        <motion.div 
          initial={{ width: "15rem" }} 
          viewport={{ once: true }} 
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }} 
          whileInView={{ width: "30rem" }} 
          className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60" 
        />

        {/* Left gradient cone */}
        <motion.div 
          initial={{ opacity: 0.5, width: "15rem" }} 
          whileInView={{ opacity: 1, width: "30rem" }} 
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} 
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }} 
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right gradient cone */}
        <motion.div 
          initial={{ opacity: 0.5, width: "15rem" }} 
          whileInView={{ opacity: 1, width: "30rem" }} 
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} 
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }} 
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
      </div>
      
      {/* Main content area */}
      <motion.div 
        initial={{ y: 100, opacity: 0.5 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        className="relative z-50 container flex justify-center flex-1 flex-col px-6 sm:px-8 lg:px-10 gap-6 py-12 sm:py-16"
      >
        <div className="text-center">
          <h1 className="font-anek text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">Premium Content for</span>
            <span className="block mt-3">Real Estate Excellence</span>
          </h1>
          
          {/* Your animated title rotation */}
          <div className="mt-6 text-center">
            <span className="text-primary inline font-light">
              Property Content that
            </span>
            <span 
              role="text" 
              aria-label={`Property Content that ${titles[titleNumber]}`} 
              className="relative flex w-full justify-center h-[1.6em] sm:h-[1.8em] md:h-[1.6em] lg:h-[1.4em] overflow-hidden mt-2 sm:mt-3"
            >
              {titles.map((title, index) => (
                <motion.span 
                  key={index} 
                  className={cn(
                    "absolute font-playfair tracking-[-0.02em] bg-clip-text text-transparent", 
                    "bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700", 
                    titleNumber === index && "text-5xl sm:text-6xl lg:text-7xl"
                  )} 
                  initial={{
                    opacity: 0,
                    y: isMobile ? 15 : 40,
                    scale: 0.95
                  }} 
                  animate={titleNumber === index ? {
                    y: 0,
                    opacity: 1,
                    scale: 1
                  } : {
                    y: titleNumber > index ? isMobile ? -15 : -40 : isMobile ? 15 : 40,
                    opacity: 0,
                    scale: 0.95
                  }} 
                  transition={{
                    type: "spring",
                    stiffness: isMobile ? 160 : 120,
                    damping: isMobile ? 22 : 17,
                    mass: isMobile ? 0.8 : 1
                  }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </div>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with top-tier creators for photography, videography, and marketing content
            that elevates your property portfolio.
          </p>
          
          {/* Waitlist signup form */}
          <div className="mx-auto w-full max-w-xl mt-8">
            <div className="flex flex-col sm:flex-row w-full gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white/90 text-gray-800" 
              />
              <button className="bg-primary text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2">
                Get Early Access
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-4">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white border border-white">JT</div>
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white border border-white">KL</div>
                <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-[10px] text-white border border-white">AS</div>
              </div>
              <span>2,165+ people joined • Queue: 2-3 weeks</span>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallToAction type="primary" text="I Need Content" href="/property-manager" />
            <CallToAction type="primary" text="I Create Content" href="/creator" />
            <CallToAction type="secondary" text="Search Creators" href="/search" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
