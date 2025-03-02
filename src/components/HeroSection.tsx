
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CallToAction from './CallToAction';

// This component is adapted from the template's Grainify component
function Grainify({ className }) {
  return (
    <div className={cn("inset-0 absolute pointer-events-none", className)}>
      <div className="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20" />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col rounded-3xl bg-accent text-accent-foreground relative isolate overflow-hidden sm:gap-y-16 gap-y-8 md:p-12 p-6">
      {/* Grain texture overlay */}
      <Grainify className="opacity-25" />
      
      {/* Grid pattern background */}
      <div className="bg-[rgba(255,255,255,0)] bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl -z-[1] opacity-10 [clip-path:circle(40%)]" />
      
      {/* Animated visual element */}
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 150 }}
        transition={{ ease: "easeOut", type: "spring", duration: 2 }}
        className="absolute -z-[1]"
      >
        {/* Replace with your own image or decorative element */}
        <div className="h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
      </motion.div>
      
      {/* Header area with logo and CTA */}
      <div className="flex justify-between items-center">
        {/* Replace with your logo */}
        <div className="size-12 rounded-full bg-background flex items-center justify-center">
          <span className="font-bold text-primary">RE</span>
        </div>
        <Button className="rounded-full">Search Creators</Button>
      </div>
      
      {/* Main content area */}
      <motion.div 
        initial={{ y: 100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center gap-y-8"
      >
        <h2 className="font-heading font-semibold tracking-tight text-balance sm:text-8xl text-center text-5xl">
          <span className="block">Premium Content for</span>
          <span className="block">Real Estate Excellence</span>
        </h2>
        <p className="text-center text-pretty text-lg max-w-md">
          Connect with top-tier creators for photography, videography, and marketing content
          that elevates your property portfolio.
        </p>
      </motion.div>
      
      {/* Call to action buttons */}
      <div className="mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
        <CallToAction type="primary" text="I Need Content" href="/property-manager" />
        <CallToAction type="primary" text="I Create Content" href="/creator" />
        <CallToAction type="secondary" text="Search Creators" href="/search" />
      </div>
    </section>
  );
};

export default HeroSection;
