
"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
      className="w-full flex flex-col rounded-3xl bg-white text-foreground relative isolate overflow-hidden sm:gap-y-12 gap-y-6 md:p-10 sm:p-8 p-5"
    >
      {/* Header with logo and button */}
      <div className="flex justify-between items-center">
        <div className="size-10 sm:size-12 rounded-full bg-background flex items-center justify-center">
          <span className="font-bold text-primary text-sm sm:text-base">RE</span>
        </div>
        <Button className="rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 h-auto">Search Creators</Button>
      </div>
      
      {/* Main content with animated titles */}
      <motion.div 
        initial={{ y: 100, opacity: 0.5 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        className="flex flex-col items-center gap-y-5 sm:gap-y-8 mt-4 sm:mt-6"
      >
        <h2 className="font-heading font-semibold tracking-tight text-balance text-4xl sm:text-5xl md:text-7xl text-center">
          <span className="text-primary inline font-light block sm:inline-block mb-1 sm:mb-0 text-2xl sm:text-3xl md:text-5xl">
            Property Content that
          </span>
          
          {/* Animated title rotation */}
          <span 
            role="text" 
            aria-label={`Property Content that ${titles[titleNumber]}`} 
            className="relative flex w-full justify-center h-[1.4em] sm:h-[1.6em] md:h-[1.4em] overflow-hidden mt-1 sm:mt-2"
          >
            {titles.map((title, index) => (
              <motion.span 
                key={index} 
                className={cn(
                  "absolute font-playfair tracking-[-0.02em] bg-clip-text text-transparent", 
                  "bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700", 
                  titleNumber === index ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl" : ""
                )} 
                initial={{
                  opacity: 0,
                  y: isMobile ? 10 : 40,
                  scale: 0.95
                }} 
                animate={titleNumber === index ? {
                  y: 0,
                  opacity: 1,
                  scale: 1
                } : {
                  y: titleNumber > index ? isMobile ? -10 : -40 : isMobile ? 10 : 40,
                  opacity: 0,
                  scale: 0.95
                }} 
                transition={{
                  type: "spring",
                  stiffness: isMobile ? 180 : 120,
                  damping: isMobile ? 24 : 17,
                  mass: isMobile ? 0.7 : 1
                }}
              >
                {title}
              </motion.span>
            ))}
          </span>
        </h2>
        
        <p className="text-center text-pretty text-sm sm:text-base md:text-lg max-w-md px-2 sm:px-0">
          Connect with expert content creators for photography, videography, and marketing content
          that elevates your property portfolio.
        </p>
      </motion.div>
      
      {/* Waitlist signup form */}
      <div className="mx-auto w-full max-w-xl mt-4 sm:mt-6">
        <div className="flex flex-col sm:flex-row w-full gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 bg-white/90 text-gray-800 text-sm sm:text-base" 
          />
          <button className="bg-primary text-white font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base">
            Get Early Access
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
          <div className="flex -space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[8px] sm:text-[10px] text-white border border-white">JT</div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center text-[8px] sm:text-[10px] text-white border border-white">KL</div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-600 flex items-center justify-center text-[8px] sm:text-[10px] text-white border border-white">AS</div>
          </div>
          <span>2,165+ people joined • Queue: 2-3 weeks</span>
        </div>
      </div>
      
      {/* Call to action buttons */}
      <div className="mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-6 sm:mt-8">
        <CallToAction type="primary" text="I Need Content" href="/property-manager" />
        <CallToAction type="primary" text="I Create Content" href="/creator" />
        <CallToAction type="secondary" text="Search Creators" href="/search" />
      </div>
    </section>
  );
}

export default Hero;
