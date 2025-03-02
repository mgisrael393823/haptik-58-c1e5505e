"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // These are the exact titles from your design
  const titles = useMemo(() => ["Converts", "Drives Leads"], []);
  
  useEffect(() => {
    if (!isInView) return;
    
    const timeout = 2500;
    const timeoutId = setTimeout(() => {
      setTitleIndex((titleIndex + 1) % titles.length);
    }, timeout);
    
    return () => clearTimeout(timeoutId);
  }, [titleIndex, titles.length, isInView]);
  
  return (
    <section 
      ref={sectionRef}
      className="w-full rounded-lg bg-lavender bg-opacity-50 p-8 md:p-12"
      style={{ backgroundColor: "#E6E6FA" }} // Lavender color to match your design
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center py-12 md:py-16">
          {/* Main heading with animated text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8">
            Property Content that
            <div className="h-24 md:h-28 relative overflow-hidden">
              {titles.map((title, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "absolute w-full",
                    index === 0 ? "text-indigo-500" : "text-indigo-400"
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: titleIndex === index ? 1 : 0,
                    y: titleIndex === index ? 0 : -40
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 }
                  }}
                >
                  {title}
                </motion.div>
              ))}
            </div>
          </h1>
          
          {/* Description text - exact copy from your design */}
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Connect with expert content creators for photography, videography, and marketing content that elevates your property portfolio.
          </p>
          
          {/* Email signup and waitlist form */}
          <div className="max-w-lg mx-auto mb-4">
            <div className="flex flex-col sm:flex-row w-full gap-3">
              <input 
                type="email"
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2">
                Get Early Access
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Waitlist social proof */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white border border-white">JT</div>
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white border border-white">KL</div>
              <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-[10px] text-white border border-white">AS</div>
            </div>
            <span>2,165+ people joined • Queue: 2-3 weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
