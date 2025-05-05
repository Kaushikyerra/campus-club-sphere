
import React, { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth, parseISO } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import EventCard from '@/components/events/EventCard';

// Mock data for events
const mockEvents = [
  {
    id: '1',
    title: 'Tech Talk: AI & Society',
    clubName: 'Computer Science Society',
    clubId: '1',
    date: new Date(2025, 4, 7, 14, 0),
    location: 'Engineering Hall 101',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c22?auto=format&fit=crop&w=800'
  },
  {
    id: '2',
    title: 'Chess Tournament',
    clubName: 'Chess Club',
    clubId: '2',
    date: new Date(2025, 4, 10, 16, 30),
    location: 'Student Union Room 302',
    imageUrl: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800'
  },
  {
    id: '3',
    title: 'Campus Clean-Up',
    clubName: 'Environmental Action',
    clubId: '3',
    date: new Date(2025, 4, 12, 9, 0),
    location: 'Main Quad',
    imageUrl: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?auto=format&fit=crop&w=800'
  },
  {
    id: '4',
    title: 'Film Screening: Classics',
    clubName: 'Film Society',
    clubId: '4',
    date: new Date(2025, 4, 15, 19, 0),
    location: 'Arts Center Theatre',
    imageUrl: 'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?auto=format&fit=crop&w=800'
  },
  {
    id: '5',
    title: 'Cultural Fair',
    clubName: 'International Students Association',
    clubId: '5',
    date: new Date(2025, 4, 18, 12, 0),
    location: 'University Plaza',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800'
  },
  {
    id: '6',
    title: 'Public Speaking Workshop',
    clubName: 'Debate Team',
    clubId: '6',
    date: new Date(2025, 4, 21, 15, 0),
    location: 'Humanities Building 204',
  },
  {
    id: '7',
    title: 'Photography Exhibition',
    clubName: 'Photography Club',
    clubId: '7',
    date: new Date(2025, 4, 24, 17, 0),
    location: 'Student Gallery',
    imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=800'
  },
  {
    id: '8',
    title: 'Open Mic Night',
    clubName: 'Music Society',
    clubId: '8',
    date: new Date(2025, 4, 28, 20, 0),
    location: 'Campus Cafe',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800'
  }
];

const CalendarPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  
  // Filter events happening in the selected month
  const eventsInMonth = mockEvents.filter(event => 
    isSameMonth(event.date, date)
  );
  
  // Function to get events for a specific day
  const getEventsForDay = (day: Date) => {
    return mockEvents.filter(event => 
      event.date.getDate() === day.getDate() &&
      event.date.getMonth() === day.getMonth() &&
      event.date.getFullYear() === day.getFullYear()
    );
  };

  return (
    <div className="py-10">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h1 className="font-bold mb-4">Activity Calendar</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore upcoming campus events and activities
          </p>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-2xl font-bold">
            {format(date, 'MMMM yyyy')}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="view">View:</Label>
              <Select value={view} onValueChange={(value: 'calendar' | 'list') => setView(value)}>
                <SelectTrigger id="view" className="w-32">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="calendar">Calendar</SelectItem>
                  <SelectItem value="list">List</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {view === 'calendar' ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              className="rounded-md border p-3 pointer-events-auto"
              modifiers={{
                hasEvent: (date) => getEventsForDay(date).length > 0,
              }}
              modifiersStyles={{
                hasEvent: { 
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  color: 'hsl(var(--primary))'
                }
              }}
            />
            
            <div className="p-4 border-t">
              <h3 className="font-semibold mb-4">Events on {format(date, 'MMMM d, yyyy')}</h3>
              
              {getEventsForDay(date).length === 0 ? (
                <p className="text-muted-foreground">No events scheduled for this day.</p>
              ) : (
                <div className="space-y-3">
                  {getEventsForDay(date).map(event => (
                    <Card key={event.id} className="overflow-hidden">
                      <CardContent className="p-0 flex items-center">
                        <div className="w-20 h-20 shrink-0 bg-muted flex items-center justify-center">
                          {event.imageUrl ? (
                            <img 
                              src={event.imageUrl} 
                              alt={event.title} 
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                              <span className="text-xl font-bold text-primary/40">{event.title.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-1">{event.title}</h4>
                          <p className="text-sm text-primary mb-1">
                            <a href={`/clubs/${event.clubId}`} className="hover:underline">
                              {event.clubName}
                            </a>
                          </p>
                          <div className="text-sm text-muted-foreground">
                            <span>{format(event.date, 'h:mm a')} • {event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {eventsInMonth.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No events in this month</h3>
                <p className="text-muted-foreground">
                  Try selecting a different month
                </p>
              </div>
            ) : (
              eventsInMonth.map(event => (
                <Card key={event.id} className="overflow-hidden">
                  <CardContent className="p-0 flex items-center">
                    <div className="w-24 h-24 shrink-0 bg-muted flex items-center justify-center">
                      {event.imageUrl ? (
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                          <span className="text-xl font-bold text-primary/40">{event.title.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold mb-1">{event.title}</h3>
                      <p className="text-sm text-primary mb-1">
                        <a href={`/clubs/${event.clubId}`} className="hover:underline">
                          {event.clubName}
                        </a>
                      </p>
                      <div className="text-sm text-muted-foreground flex flex-wrap gap-x-6">
                        <span>{format(event.date, 'EEEE, MMMM d, yyyy')}</span>
                        <span>{format(event.date, 'h:mm a')}</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
