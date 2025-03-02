
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Create a Grainify component since it's missing
const Grainify = ({ className }: { className?: string }) => {
  return (
    <div 
      className={`pointer-events-none absolute inset-0 opacity-20 ${className || ''}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
};

export function Section() {
  return (
    <section className="w-full flex flex-col rounded-3xl bg-accent text-accent-foreground relative isolate overflow-hidden sm:gap-y-16 gap-y-8 md:p-12 p-6">
      <Grainify className="opacity-25" />
      <div className="bg-[rgba(255,255,255,0)] bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl -z-[1] opacity-10 [clip-path:circle(40%)]" />
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 150 }}
        transition={{ ease: "easeOut", type: "spring", duration: 2 }}
        whileHover={{}}
        className="absolute -z-[1]"
      >
        <img alt="Image" src="/images/SphereExtruded1R.png" width={500} height={500} />
      </motion.div>
      <div className="flex justify-between items-center">
        <img
          alt="Image"
          src="/images/reweb-logo.png"
          width={500}
          height={500}
          className="size-12 rounded-full"
        />
        <Button className="rounded-full">Start now</Button>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h2 className="font-heading font-semibold tracking-tight text-balance sm:text-8xl text-center text-5xl">
          Supercharge <br/>your copy
        </h2>
        <h1 className="text-center text-pretty text-lg max-w-md">
          Turn every sentence into a conversion magnet. Writerly AI refines and optimizes your text
          so you can capture your audience's attention, drive engagement, and boost sales—without
          breaking a sweat.
        </h1>
      </div>
      <Button className="rounded-full mx-auto">Start converting today</Button>
    </section>
  );
}
