import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Star, Image, CheckCircle, Sparkle, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { CreatorRating } from './CreatorRating';
import { GlowDialog } from '../ui/glow-dialog';
import { ShimmerButton } from '../ui/shimmer-button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

interface Creator {
  name: string;
  services: string[];
  price: number;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  workExamples: string[];
  tags?: string[];
}

interface CreatorCardProps {
  creator: Creator;
  onImageLoad?: (imageSrc: string) => void;
  loadedImages: Set<string>;
  imageRef: (node: HTMLImageElement | null) => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({ 
  creator, 
  onImageLoad, 
  loadedImages, 
  imageRef 
}) => {
  const isMobile = useIsMobile();
  const [showEmailDialog, setShowEmailDialog] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (onImageLoad) {
      onImageLoad(creator.image);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getDefaultTags = (name: string, services: string[]) => {
    if (name === 'John Smith' && services.includes('Photography')) {
      return ['#RealEstate', '#Aerial', '#IndoorDroneTour'];
    }
    if (name === 'Jane Cooper') {
      return ['#Interior', '#Design', '#Staging'];
    }
    if (name === 'Emily Johnson') {
      return ['#POV', '#TikTok', '#ComeTourWithMe'];
    }
    return ['#Professional', '#Creative', '#Expert'];
  };

  const getTagStyle = (tag: string) => {
    if (['#RealEstate', '#Aerial', '#IndoorDroneTour', '#Portrait', '#Wedding', '#Editorial', '#Interior', '#Design', '#Staging', '#POV', '#TikTok', '#ComeTourWithMe'].includes(tag)) {
      return "bg-[#E5DEFF] text-[#4F46E5] hover:bg-[#D6BCFA] hover:text-[#3730A3]";
    }
    if (['#Professional', '#Creative', '#Expert'].includes(tag)) {
      return "bg-[#F2FCE2] text-[#3B823E] hover:bg-[#DCF5DC] hover:text-[#2E6A31]";
    }
    return "bg-[#FDE1D3] text-[#C4704F] hover:bg-[#FECDA7] hover:text-[#9D5B3F]";
  };
  
  const tags = creator.tags || getDefaultTags(creator.name, creator.services);

  const getImageSource = () => {
    if (creator.name === 'Emily Johnson') {
      return '/newemilyprofile.jpg';
    }
    if (creator.name === 'Jane Cooper') return '/janeprofile.png';
    return creator.image;
  };
  
  return (
    <div className="group select-text">
      <Card className="overflow-hidden h-full will-change-transform transition-all duration-300 hover:translate-y-[-2px]">
        <div className="relative">
          <div className="absolute top-3 right-3 z-10">
            <span className="
              px-2.5 py-1 
              text-xs sm:text-sm font-medium 
              bg-white/90 backdrop-blur-sm 
              text-gray-900 
              rounded-full 
              shadow-sm 
              border border-white/20
              transition-all duration-200
              group-hover:shadow-md
            ">
              From ${creator.price}
            </span>
          </div>

          <div className="relative aspect-[4/3]">
            <img 
              ref={imageRef}
              src={getImageSource()}
              alt={creator.name} 
              className={cn(
                "w-full h-full object-cover object-center transition-opacity duration-300",
                !loadedImages.has(creator.image) && "opacity-0"
              )}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3 left-3 text-white select-text">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Avatar className="h-7 w-7 border border-white/20">
                    <AvatarImage src={getImageSource()} alt={creator.name} />
                    <AvatarFallback>{creator.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="absolute -end-1 -top-1">
                    <span className="sr-only">Verified</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        className="fill-background"
                        d="M3.046 8.277A4.402 4.402 0 0 1 8.303 3.03a4.4 4.4 0 0 1 7.411 0 4.397 4.397 0 0 1 5.19 3.068c.207.713.23 1.466.067 2.19a4.4 4.4 0 0 1 0 7.415 4.403 4.403 0 0 1-3.06 5.187 4.398 4.398 0 0 1-2.186.072 4.398 4.398 0 0 1-7.422 0 4.398 4.398 0 0 1-5.257-5.248 4.4 4.4 0 0 1 0-7.437Z"
                      />
                      <path
                        className="fill-blue-500"
                        d="M4.674 8.954a3.602 3.602 0 0 1 4.301-4.293 3.6 3.6 0 0 1 6.064 0 3.598 3.598 0 0 1 4.3 4.302 3.6 3.6 0 0 1 0 6.067 3.6 3.6 0 0 1-4.29 4.302 3.6 3.6 0 0 1-6.074 0 3.598 3.598 0 0 1-4.3-4.293 3.6 3.6 0 0 1 0-6.085Z"
                      />
                      <path
                        className="fill-background"
                        d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">{creator.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
                    <span className="text-xs sm:text-sm text-white/90">{creator.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/90 mt-1">
                {creator.services.join(" • ")}
              </p>
            </div>
          </div>
          
          <div className="p-4 sm:p-5">
            <div className="space-y-4 sm:space-y-5">
              <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <div className="flex flex-nowrap gap-2 pb-1">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className={cn(
                        "text-xs px-2 py-1 rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap",
                        getTagStyle(tag)
                      )}
                      onClick={(e) => e.preventDefault()}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              <CreatorRating rating={creator.rating} reviews={creator.reviews} name={creator.name} />
              
              <div className="flex justify-center px-3 sm:px-4">
                <ShimmerButton 
                  onClick={() => setShowEmailDialog(true)}
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" />
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <GlowDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
    </div>
  );
};
