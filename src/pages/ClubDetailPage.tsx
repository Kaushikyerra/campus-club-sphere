import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Calendar, 
  Info, 
  Clock,
  MapPin
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

import EventCard from '@/components/events/EventCard';

// Mock data for a specific club
const mockClubDetails = {
  '1': {
    id: '1',
    name: 'Computer Science Society',
    description: 'A community for CS enthusiasts to learn, collaborate, and grow together. We host workshops, hackathons, and networking events throughout the year.',
    longDescription: 'The Computer Science Society is dedicated to fostering a vibrant community of students passionate about computer science and technology. Our mission is to provide opportunities for learning, collaboration, and professional development. Through workshops, hackathons, speaker series, and social events, we aim to enhance the academic experience of our members and prepare them for successful careers in tech. Whether you\'re a beginner or an experienced programmer, our club welcomes all skill levels and interests within the field of computer science.',
    memberCount: 156,
    established: '2015',
    meetingSchedule: 'Every Tuesday, 6:00 PM',
    location: 'Engineering Building, Room 302',
    contactEmail: 'cs.society@university.edu',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800',
    owners: [
      {
        id: '101',
        name: 'Alex Johnson',
        role: 'President',
        imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400'
      },
      {
        id: '102',
        name: 'Maya Patel',
        role: 'Vice President',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400'
      }
    ],
    members: [
      { id: '201', name: 'Carlos Rodriguez', joinedDate: '2023-09-15' },
      { id: '202', name: 'Sarah Kim', joinedDate: '2023-08-30' },
      { id: '203', name: 'David Chen', joinedDate: '2024-01-10' },
      { id: '204', name: 'Aisha Mohammed', joinedDate: '2023-10-05' },
      { id: '205', name: 'James Wilson', joinedDate: '2023-09-22' },
      // ... more members
    ],
    events: [
      {
        id: '1001',
        title: 'Tech Talk: AI & Society',
        date: new Date(2025, 4, 7, 14, 0),
        location: 'Engineering Hall 101',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c22?auto=format&fit=crop&w=800'
      },
      {
        id: '1002',
        title: 'JavaScript Workshop',
        date: new Date(2025, 4, 14, 16, 0),
        location: 'Computer Lab 204',
        imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800'
      },
      {
        id: '1003',
        title: 'Hackathon: Code for Good',
        date: new Date(2025, 4, 21, 9, 0),
        location: 'Innovation Center',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Chess Club',
    description: 'From beginners to masters, our chess club welcomes all skill levels. Join us for weekly games, tournaments, and strategy sessions.',
    longDescription: 'The University Chess Club brings together chess enthusiasts of all levels, from complete beginners to experienced players. We offer a friendly and supportive environment to learn, practice, and improve your chess skills. Our regular activities include casual play sessions, structured tournaments, strategy discussions, and occasional visits from chess masters. We believe chess is not just a game but a way to develop critical thinking, patience, and strategic planning skills that can be applied in many areas of life and academics.',
    memberCount: 42,
    established: '2010',
    meetingSchedule: 'Fridays, 4:00 PM',
    location: 'Student Union, Game Room',
    contactEmail: 'chess.club@university.edu',
    imageUrl: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800',
    owners: [
      {
        id: '103',
        name: 'Daniel Lee',
        role: 'President',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400'
      }
    ],
    members: [
      { id: '206', name: 'Emma Thompson', joinedDate: '2023-11-15' },
      { id: '207', name: 'Michael Brown', joinedDate: '2023-10-30' },
      { id: '208', name: 'Sophia Garcia', joinedDate: '2024-02-10' },
      // ... more members
    ],
    events: [
      {
        id: '2001',
        title: 'Chess Tournament',
        date: new Date(2025, 4, 10, 16, 30),
        location: 'Student Union Room 302',
        imageUrl: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800'
      },
      {
        id: '2002',
        title: 'Beginner\'s Chess Workshop',
        date: new Date(2025, 4, 17, 15, 0),
        location: 'Student Union Room 302',
        imageUrl: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800'
      }
    ]
  }
};

const ClubDetailPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // In a real app, you'd fetch this data from an API
  const club = mockClubDetails[clubId as keyof typeof mockClubDetails];
  
  if (!club) {
    // ... keep existing code (club not found message)
    return (
      <div className="container py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Club Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The club you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/clubs">Browse All Clubs</Link>
        </Button>
      </div>
    );
  }

  const handleJoinClub = () => {
    if (isAuthenticated) {
      // In a real app, you'd make an API call to join the club
      console.log("Joining club:", club.id);
      // Show success message
      toast({
        title: "Success!",
        description: `You've joined ${club.name}!`,
      });
    } else {
      // Show auth modal for unauthenticated users
      setShowAuthModal(true);
    }
  };

  // Log authentication state for debugging
  console.log("Authentication state:", { isAuthenticated });

  return (
    <div>
      {/* Club Header */}
      <div className="relative">
        {/* ... keep existing code (club header image and details) */}
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
              <Button size="lg" onClick={handleJoinClub}>Join Club</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Club Content */}
      {/* ... keep existing code (club content tabs, about section, events, members) */}
      <div className="container px-4 pb-16">
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList>
            <TabsTrigger value="about">
              <Info className="h-4 w-4 mr-2" /> About
            </TabsTrigger>
            <TabsTrigger value="events">
              <Calendar className="h-4 w-4 mr-2" /> Events
            </TabsTrigger>
            <TabsTrigger value="members">
              <Users className="h-4 w-4 mr-2" /> Members
            </TabsTrigger>
          </TabsList>
          
          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
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
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Meeting Schedule</p>
                        <p className="text-sm text-muted-foreground">{club.meetingSchedule}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{club.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Established</p>
                        <p className="text-sm text-muted-foreground">{club.established}</p>
                      </div>
                    </div>
                    
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
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Events Tab */}
          <TabsContent value="events">
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
          </TabsContent>
          
          {/* Members Tab */}
          <TabsContent value="members">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Club Members</h2>
                <p className="text-muted-foreground">
                  <strong>{club.memberCount}</strong> members
                </p>
              </div>
              
              {club.members && club.members.length > 0 ? (
                <div className="border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2 p-4 bg-muted font-medium">
                    <div>Name</div>
                    <div>Joined</div>
                  </div>
                  
                  {club.members.map(member => (
                    <div key={member.id} className="grid grid-cols-2 p-4 border-t">
                      <div>{member.name}</div>
                      <div className="text-muted-foreground">
                        {new Date(member.joinedDate).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No members yet</h3>
                  <p className="text-muted-foreground">
                    Be the first to join this club
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Authentication Modal */}
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign in required</DialogTitle>
            <DialogDescription>
              You need to be signed in to join {club.name}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-4 py-4">
            <p className="text-muted-foreground">
              Please sign in to your existing account or create a new account to join this club.
            </p>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              className="flex-1" 
              onClick={() => {
                setShowAuthModal(false);
                navigate('/signup');
              }}
            >
              Create Account
            </Button>
            <Button 
              className="flex-1" 
              onClick={() => {
                setShowAuthModal(false);
                navigate('/login');
              }}
            >
              Sign In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClubDetailPage;
