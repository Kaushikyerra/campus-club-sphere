
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

interface ClubCardProps {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl?: string;
}

const ClubCard = ({ id, name, description, memberCount, imageUrl }: ClubCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="relative h-48 overflow-hidden bg-muted">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="text-4xl font-bold text-primary/40">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{name}</h3>
        <p className="text-muted-foreground line-clamp-3 mb-4 text-sm">
          {description}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users size={16} className="mr-1" />
          <span>{memberCount} members</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button asChild variant="default" className="w-full">
          <Link to={`/clubs/${id}`}>View Club</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClubCard;
