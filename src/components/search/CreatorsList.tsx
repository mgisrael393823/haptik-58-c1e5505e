
import React, { useRef } from 'react';
import { CreatorCard } from '../creator/CreatorCard';
import { SortMenu } from '../sorting/SortMenu';
import { motion, useTransform, useScroll } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

interface Creator {
  name: string;
  services: string[];
  price: number;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  workExamples: string[];
}

interface CreatorsListProps {
  creators: Creator[];
  sortBy: string;
  onSort: (value: string) => void;
  onImageLoad: (imageSrc: string) => void;
  loadedImages: Set<string>;
  imageRef: (node: HTMLImageElement | null) => void;
}

export const CreatorsList: React.FC<CreatorsListProps> = ({
  creators,
  sortBy,
  onSort,
  onImageLoad,
  loadedImages,
  imageRef,
}) => {
  const isMobile = useIsMobile();
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(creators.length - 1) * 100}%`]);

  const sortOptions = [
    { label: 'Rating', value: 'rating' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Distance', value: 'distance' }
  ];

  if (isMobile) {
    return (
      <div className="w-screen -mx-[calc((100vw-100%)/2)] relative left-[calc((100vw-100%)/2*-1)]">
        <div className="px-6 mb-6">
          <SortMenu 
            options={sortOptions}
            onSort={onSort}
            defaultValue={sortBy}
          />
        </div>

        <div ref={targetRef} className="overflow-hidden">
          <div ref={containerRef} className="relative">
            <motion.div
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0.2}
              className="flex gap-4 pl-6 touch-pan-x"
            >
              {creators.map((creator) => (
                <div key={creator.name} className="w-[85vw] max-w-[400px] flex-shrink-0">
                  <CreatorCard
                    creator={creator}
                    onImageLoad={onImageLoad}
                    loadedImages={loadedImages}
                    imageRef={imageRef}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 w-full gap-4">
        <div className="w-full sm:w-auto">
          <SortMenu 
            options={sortOptions}
            onSort={onSort}
            defaultValue={sortBy}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {creators.map((creator) => (
          <CreatorCard
            key={creator.name}
            creator={creator}
            onImageLoad={onImageLoad}
            loadedImages={loadedImages}
            imageRef={imageRef}
          />
        ))}
      </div>
    </div>
  );
};
