"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Grainify } from "@/components/grainify";
import { Button } from "@/components/ui/button";
import { Gradient } from "@/components/gradient";
import { Badge } from "@/components/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { TestimonialItem } from "@/components/testimonial-item";
import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";

export function Section() {
  return (
    <main className="container space-y-4 py-4 px-4">
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
          <Image alt="Image" src="/images/SphereExtruded1R.png" width={500} height={500} />
        </motion.div>
        <div className="flex justify-between items-center">
          <Image
            alt="Image"
            src="/images/reweb-logo.png"
            width={500}
            height={500}
            className="size-12 rounded-full"
          />
          <Button className="rounded-full">Start now&lt;br&gt;</Button>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="font-heading font-semibold tracking-tight text-balance sm:text-8xl text-center text-5xl">
            Supercharge &lt;br&gt;your copy
          </h2>
          <h1 className="text-center text-pretty text-lg max-w-md">
            Turn every sentence into a conversion magnet. Writerly AI refines and optimizes your
            text so you can capture your audience’s attention, drive engagement, and boost
            sales—without breaking a sweat.
          </h1>
        </div>
        <Button className="rounded-full mx-auto">Start converting today&lt;br&gt;</Button>
      </section>
      <section className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute right-0" />
        <Badge text="DEMO" />
        <div className="flex flex-col gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            How Writerly AI works&lt;br&gt;
          </h2>
        </div>
        <Image
          alt="Image"
          src="/images/original-a7d7f8ae075fda01e01f2c1e6e1cc5ff.png"
          width={800}
          height={500}
          className="mx-auto shadow-md rounded-2xl"
        />
      </section>
      <section className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute bottom-0 translate-y-1/2" />
        <div className="bg-[length:12px_12px] opacity-70 absolute inset-0 -z-[1] translate-x-1/2 -translate-y-1/2 [clip-path:ellipse(50%_50%_at_50%_50%)] bg-[linear-gradient(0deg,_rgba(255,255,255,0)_50%,_hsl(var(--muted))_50%)]" />
        <Badge text="FEATURES" />
        <div className="flex flex-col gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            For Content Creators
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-background shadow-md">
              <h3 className="font-heading text-2xl font-bold mb-4">Fast, Effective Workflow</h3>
              <p className="text-muted-foreground">
                Save hours of back-and-forth editing. Our AI highlights exactly where you can
                improve sentence structure, clarity, and persuasive impact.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-background shadow-md">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Real-Time Performance Insights
              </h3>
              <p className="text-muted-foreground">
                Track how your AI-optimized copy is performing across multiple channels. Adjust
                instantly to maximize reach and revenue.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl flex flex-col justify-between bg-background shadow-md">
            <div className="flex flex-col">
              <h3 className="font-heading text-2xl font-bold mb-4">Consistent Brand Voice</h3>
              <p className="text-muted-foreground mb-6">
                Writerly AI ensures every word you publish aligns with your brand identity. From
                blogs to ads, we keep your tone and style consistent—automatically.
              </p>
            </div>
            <Button className="rounded-full">
              Optimize my copy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <section
        id="solutions"
        className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6"
      >
        <Grainify />
        <Gradient className="absolute top-0 -translate-y-1/2" />
        <Badge text="FEATURES" />
        <div className="flex flex-col sm:flex-row justify-between gap-x-16 gap-y-4">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl grow">
            For Marketing Teams
          </h2>
          <p className="max-w-md sm:text-right text-balance">
            Writerly AI gives your entire marketing department the power of real-time AI
            optimization. Collaborate seamlessly, keep messaging on-brand, and push campaigns live
            faster than ever.
          </p>
        </div>
        <Card className="overflow-hidden border-none shadow-md">
          <Tabs defaultValue="item-1">
            <div className="w-full overflow-auto grid bg-muted">
              <TabsList className="mx-auto w-max flex-none inline-flex">
                <TabsTrigger value="item-1">Transparent AI Suggestions</TabsTrigger>
                <TabsTrigger value="item-2">Shape the User Journey</TabsTrigger>
                <TabsTrigger value="item-3">Flexible Integrations</TabsTrigger>
                <TabsTrigger value="item-4">Data-Driven Impact</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="item-1" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Transparent AI Suggestions</h3>
                  <p className="text-muted-foreground">
                    Get crystal-clear feedback on why certain edits are suggested. Build trust
                    across your team with transparent AI logic.
                  </p>
                  <Button className="w-fit rounded-full">Try now for free</Button>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Research transparency visualization"
                    src="/images/annie-spratt-QckxruozjRg-unsplash.jpg"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="item-2" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Shape the User Journey</h3>
                  <p className="text-muted-foreground">
                    Leverage built-in best practices to tailor your copy for each stage of the
                    funnel—awareness, consideration, or decision.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Research transparency visualization"
                    src="/images/ux-indonesia-w00FkE6e8zE-unsplash.jpg"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="item-3" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Flexible Integrations</h3>
                  <p className="text-muted-foreground">
                    Seamlessly integrate with popular marketing tools, from CMS platforms to email
                    automation software. Manage everything in one place.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Research transparency visualization"
                    src="/images/markus-spiske-Skf7HxARcoc-unsplash.jpg"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="item-4" className="mt-0">
              <div className="p-8 grid gap-8 bg-background mt-0 lg:grid-cols-2">
                <div className="flex flex-col gap-4 order-2 lg:order-none justify-center">
                  <h3 className="text-2xl font-bold font-heading">Data-Driven Impact</h3>
                  <p className="text-muted-foreground">
                    Monitor conversions, track engagement, and fine-tune your strategy. Data
                    dashboards make measuring impact a breeze.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden border">
                  <Image
                    alt="Research transparency visualization"
                    src="/images/nasa-Q1p7bh3SHj8-unsplash.jpg"
                    width={500}
                    height={300}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </section>
      <section className="flex flex-col w-full rounded-3xl relative isolate bg-card text-card-foreground gap-y-8 overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2" />
        <div className="bg-[length:12px_12px] opacity-70 absolute inset-0 -z-[1] translate-x-1/2 -translate-y-1/2 [clip-path:ellipse(50%_50%_at_50%_50%)] bg-[repeating-linear-gradient(-45deg,_hsl(var(--muted)),_hsl(var(--muted))_6px,_rgba(255,255,255,0)_6px,_rgba(255,255,255,0)_30px)]" />
        <Badge text="TESTIMONIALS" />
        <div className="flex flex-col gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            What our users say
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
            Join hundreds of marketers, founders, and writers who transformed their conversions with
            Writerly AI.
          </p>
        </div>
        <Carousel
          opts={{ loop: true, align: "start" }}
          orientation="horizontal"
          className="mt-6 w-full px-4 xl:px-0"
        >
          <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
          <CarouselContent>
            <TestimonialItem
              name="John"
              text="Writerly AI helped us cut our editing time in half. Our landing pages are more convincing, and sales have spiked by 30%."
              image="/images/155.jpeg"
              username="@johndoe"
            />
            <TestimonialItem
              name="Serena"
              text="I love that I can see exactly where my copy can improve. Writerly AI made my blog posts flow effortlessly!"
              image="/images/154.jpeg"
              username="@serrylena"
            />
            <TestimonialItem
              name="Marcus"
              text="It’s like having a professional copywriter on speed dial. We boosted our email click-through rates by 20% in just one week."
              image="/images/152.jpeg"
              username="@itsmemarkus"
            />
            <TestimonialItem
              name="Giusepi"
              text="No more second-guessing. Writerly AI’s suggestions are always on point, especially for my social media ad campaigns."
              image="/images/151.jpeg"
              username="@thegreatgiusepi"
            />
            <TestimonialItem
              name="Victoria"
              text="We tested multiple AI tools, but none came close to the impact Writerly AI has on our conversions. Highly recommended!"
              image="/images/153.jpeg"
              username="@vic"
            />
          </CarouselContent>
          <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
        </Carousel>
      </section>
      <section className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 bg-card text-card-foreground overflow-hidden md:p-12 p-6">
        <Grainify />
        <Gradient className="absolute -translate-x-1/2 top-0 -translate-y-1/2 left-1/2" />
        <Badge text="FAQ" />
        <div className="flex flex-col gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
            For any other questions, feel free to contact us.
          </p>
          <Accordion type="single" collapsible className="mt-6 w-full divide-y">
            <FaqItem
              answer="Unlike generic writing assistants, Writerly AI is specialized in conversion optimization. Our algorithms analyze your text in real-time for clarity, tone, and persuasive techniques proven to increase sales."
              question="How is Writerly AI different from other copy tools?"
            />
            <FaqItem
              answer="Writerly AI uses advanced language models trained on diverse data. However, our system doesn’t copy existing text; it analyzes your input, then suggests new wording and structures based on learned patterns of persuasive and clear writing."
              question="How does Writerly AI generate unique copy without plagiarizing existing content?"
            />
            <FaqItem
              answer="Absolutely! We offer integrations and plugins for popular CMS platforms (WordPress, Webflow, etc.) and marketing tools (HubSpot, Mailchimp, etc.). This allows you to optimize your copy and push updates without leaving your workflow."
              question="Will Writerly AI work with my existing CMS or marketing tools?"
            />
            <FaqItem
              answer="Yes. We take privacy and security seriously. Any text you input is encrypted and stored securely. We never share or sell your content, and you can delete it anytime."
              question="Is all my data safe and confidential when I upload content?"
            />
            <FaqItem
              answer="Not at all. Our platform is designed to be user-friendly, with intuitive suggestions you can accept, revise, or ignore. Even if you’re brand-new to marketing, you’ll see immediate improvements in clarity and conversion rates."
              question="Do I need any prior marketing or technical knowledge to use Writerly AI?"
            />
          </Accordion>
        </div>
      </section>
      <section className="w-full flex flex-col rounded-3xl bg-accent text-accent-foreground relative isolate overflow-hidden gap-y-8 md:p-12 p-6">
        <Grainify className="opacity-25" />
        <div className="bg-[rgba(255,255,255,0)] bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl -z-[1] opacity-10 [clip-path:circle(40%)]" />
        <Image
          alt="Image"
          src="/images/SphereRingStandingL.png"
          width={400}
          height={400}
          className="absolute -z-[1] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
        />
        <Badge text="Get started" className="bg-background mx-auto" />
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="font-heading tracking-tight text-balance text-center text-5xl sm:text-7xl">
            Unlock your highest conversions yet
          </h2>
        </div>
        <Button className="rounded-full mx-auto">Start converting today</Button>
      </section>
    </main>
  );
}
