
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { CreatorRating } from './CreatorRating';
import { GlowDialog } from '../ui/glow-dialog';
import { ShimmerButton } from '../ui/shimmer-button';
import { Badge } from '../ui/badge';

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
        <CardContent className="p-3">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden">
              <img 
                ref={imageRef}
                src={getImageSource()}
                alt={creator.name} 
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <h3 className="font-heading text-xs font-semibold">{creator.name}</h3>
                <Badge variant="outline" className="ml-1 text-[8px] px-1 py-0 h-4">
                  Verified
                </Badge>
              </div>
              <p className="text-[10px] text-muted-foreground">
                {creator.location}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-medium">{creator.rating} ({creator.reviews} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-1 mb-3">
            {creator.workExamples.slice(0, 3).map((example, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src={example} 
                  alt={`${creator.name} work example ${i}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {Array(Math.max(0, 3 - creator.workExamples.length)).fill(0).map((_, i) => (
              <div key={`placeholder-${i}`} className="aspect-square bg-gray-200 rounded-md" />
            ))}
          </div>
          
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Badge className="text-primary-foreground rounded-md text-[10px] px-1 py-0">
                {creator.services[0]}
              </Badge>
              <span className="text-xs font-medium">From ${creator.price}</span>
            </div>
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-700 rounded-md text-[10px] px-1 py-0"
            >
              Available Now
            </Badge>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1 rounded-md text-xs py-1 h-8">
              View Profile
            </Button>
            <Button 
              size="sm" 
              className="flex-1 rounded-md text-xs py-1 h-8"
              onClick={() => setShowEmailDialog(true)}
            >
              Invite
            </Button>
          </div>
        </CardContent>
      </Card>
      <GlowDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
    </div>
  );
};
