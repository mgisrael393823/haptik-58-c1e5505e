"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CallToAction from './CallToAction';
import { useIsMobile } from "@/hooks/use-mobile";
import { Spotlight } from "@/components/ui/spotlight";

// Grainify component from template
function Grainify({ className }) {
  return (
    <div className={cn("inset-0 absolute pointer-events-none", className)}>
      <div className="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20" />
    </div>
  );
}

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
      className="w-full flex flex-col rounded-3xl bg-accent text-accent-foreground relative isolate overflow-hidden sm:gap-y-12 gap-y-8 md:p-12 p-6"
    >
      <Spotlight className="from-purple-500/20 via-violet-500/20 to-blue-500/20" size={400} />
      
      {/* Grain texture overlay from template */}
      <Grainify className="opacity-25" />
      
      {/* Grid pattern background from template */}
      <div className="bg-[rgba(255,255,255,0)] bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl -z-[1] opacity-10 [clip-path:circle(40%)]" />
      
      {/* Decorative element from template */}
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 150 }}
        transition={{ ease: "easeOut", type: "spring", duration: 2 }}
        className="absolute -z-[1]"
      >
        {/* You can replace this with an actual image or keep your animation effects */}
        <div className="h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
      </motion.div>
      
      {/* Header with logo and button from template structure */}
      <div className="flex justify-between items-center">
        <div className="size-12 rounded-full bg-background flex items-center justify-center">
          <span className="font-bold text-primary">RE</span>
        </div>
        <Button className="rounded-full">Search Creators</Button>
      </div>
      
      {/* Main content with your animated titles */}
      <motion.div 
        initial={{ y: 100, opacity: 0.5 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        className="flex flex-col items-center gap-y-8"
      >
        <h2 className="font-heading font-semibold tracking-tight text-balance sm:text-7xl text-center text-5xl">
          <span className="text-primary inline font-light block sm:inline-block mb-2 sm:mb-0">
            Property Content that
          </span>
          
          {/* Your animated title rotation */}
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
        </h2>
        
        <p className="text-center text-pretty text-lg max-w-md">
          Connect with expert content creators for photography, videography, and marketing content
          that elevates your property portfolio.
        </p>
      </motion.div>
      
      {/* Waitlist signup form */}
      <div className="mx-auto w-full max-w-xl mt-6">
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
      <div className="mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
        <CallToAction type="primary" text="I Need Content" href="/property-manager" />
        <CallToAction type="primary" text="I Create Content" href="/creator" />
        <CallToAction type="secondary" text="Search Creators" href="/search" />
      </div>
    </section>
  );
}

export default Hero;
