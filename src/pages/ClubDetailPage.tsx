
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Info, Users, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

// Import our new components
import ClubHeader from '@/components/clubs/ClubHeader';
import ClubAbout from '@/components/clubs/ClubAbout';
import ClubEvents from '@/components/clubs/ClubEvents';
import ClubMembers from '@/components/clubs/ClubMembers';
import AuthModal from '@/components/clubs/AuthModal';
import { useClubData } from '@/hooks/useClubData';

const ClubDetailPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  // Use our custom hook to get club data
  const { club, error } = useClubData(clubId);
  
  if (!club) {
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
      <ClubHeader club={club} onJoinClick={handleJoinClub} />
      
      {/* Club Content */}
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
          <TabsContent value="about">
            <ClubAbout club={club} />
          </TabsContent>
          
          {/* Events Tab */}
          <TabsContent value="events">
            <ClubEvents club={club} />
          </TabsContent>
          
          {/* Members Tab */}
          <TabsContent value="members">
            <ClubMembers club={club} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Authentication Modal */}
      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal} 
        clubName={club.name} 
      />
    </div>
  );
};

export default ClubDetailPage;
