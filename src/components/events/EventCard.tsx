
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface EventCardProps {
  id: string;
  title: string;
  clubName: string;
  clubId: string;
  date: Date;
  location: string;
  imageUrl?: string;
}

const EventCard = ({ id, title, clubName, clubId, date, location, imageUrl }: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="relative h-40 overflow-hidden bg-muted">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="text-3xl font-bold text-primary/40">{title.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h4 className="font-semibold mb-1 line-clamp-1">{title}</h4>
        <p className="text-sm text-primary mb-2">
          <a href={`/clubs/${clubId}`} className="hover:underline">
            {clubName}
          </a>
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <Calendar size={14} className="mr-1" />
          <span>{format(date, 'PPP')}</span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <span>{location}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
