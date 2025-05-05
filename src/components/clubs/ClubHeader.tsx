
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

interface ClubHeaderProps {
  club: {
    id: string;
    name: string;
    imageUrl?: string;
    memberCount: number;
  };
  onJoinClick: () => void;
}

const ClubHeader: React.FC<ClubHeaderProps> = ({ club, onJoinClick }) => {
  return (
    <div className="relative">
      <div className="h-64 md:h-80 bg-muted overflow-hidden">
        {club.imageUrl ? (
          <img 
            src={club.imageUrl} 
            alt={club.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="text-6xl font-bold text-primary/40">{club.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="container px-4">
        <div className="relative -mt-16 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-lg shadow-md overflow-hidden border-4 border-background bg-background">
              {club.imageUrl ? (
                <img 
                  src={club.imageUrl} 
                  alt={club.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <span className="text-3xl font-bold text-primary/40">{club.name.charAt(0)}</span>
                </div>
              )}
            </div>
            <div>
              <h1 className="font-bold">{club.name}</h1>
              <p className="flex items-center text-muted-foreground">
                <Users size={16} className="mr-1" />
                <span>{club.memberCount} members</span>
              </p>
            </div>
          </div>
          
          <div>
            <Button size="lg" onClick={onJoinClick}>Join Club</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHeader;
