
import React from 'react';

interface ClubOwner {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}

interface ClubAboutProps {
  club: {
    longDescription?: string;
    description: string;
    owners?: ClubOwner[];
    meetingSchedule?: string;
    location?: string;
    established?: string;
    contactEmail?: string;
  };
}

import { Clock, MapPin, Calendar } from 'lucide-react';

const ClubAbout: React.FC<ClubAboutProps> = ({ club }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-muted-foreground whitespace-pre-line">
              {club.longDescription || club.description}
            </p>
          </div>
          
          {club.owners && club.owners.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Club Leadership</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {club.owners.map(owner => (
                  <div key={owner.id} className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      {owner.imageUrl ? (
                        <img 
                          src={owner.imageUrl} 
                          alt={owner.name} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-primary/10">
                          <span className="font-medium text-primary">{owner.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{owner.name}</p>
                      <p className="text-sm text-muted-foreground">{owner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5">
            <h3 className="font-semibold mb-4">Club Details</h3>
            <div className="space-y-3">
              {club.meetingSchedule && (
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Meeting Schedule</p>
                    <p className="text-sm text-muted-foreground">{club.meetingSchedule}</p>
                  </div>
                </div>
              )}
              
              {club.location && (
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{club.location}</p>
                  </div>
                </div>
              )}
              
              {club.established && (
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Established</p>
                    <p className="text-sm text-muted-foreground">{club.established}</p>
                  </div>
                </div>
              )}
              
              {club.contactEmail && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-[18px] w-[18px] flex items-center justify-center text-muted-foreground mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12H2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-sm text-muted-foreground break-all">{club.contactEmail}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubAbout;
