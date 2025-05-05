
import React from 'react';
import EventCard from '@/components/events/EventCard';

interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  imageUrl?: string;
}

interface ClubEventsProps {
  club: {
    id: string;
    name: string;
    events?: Event[];
  };
}

const ClubEvents: React.FC<ClubEventsProps> = ({ club }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
      </div>
      
      {club.events && club.events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {club.events.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              clubName={club.name}
              clubId={club.id}
              date={event.date}
              location={event.location}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No upcoming events</h3>
          <p className="text-muted-foreground">
            Check back later for new events
          </p>
        </div>
      )}
    </div>
  );
};

export default ClubEvents;
