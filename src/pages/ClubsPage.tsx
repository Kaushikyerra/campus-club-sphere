
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import ClubCard from '@/components/clubs/ClubCard';

// Mock data for clubs
const mockClubs = [
  {
    id: '1',
    name: 'Computer Science Society',
    description: 'A community for CS enthusiasts to learn, collaborate, and grow together. We host workshops, hackathons, and networking events throughout the year.',
    memberCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800',
  },
  {
    id: '2',
    name: 'Chess Club',
    description: 'From beginners to masters, our chess club welcomes all skill levels. Join us for weekly games, tournaments, and strategy sessions.',
    memberCount: 42,
    imageUrl: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800',
  },
  {
    id: '3',
    name: 'Environmental Action',
    description: 'Dedicated to promoting sustainability and environmental awareness on campus. We organize clean-ups, awareness campaigns, and eco-friendly initiatives.',
    memberCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800',
  },
  {
    id: '4',
    name: 'Film Society',
    description: 'For all movie enthusiasts! We host weekly screenings, discuss film theory, and even produce our own short films.',
    memberCount: 73,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800',
  },
  {
    id: '5',
    name: 'International Students Association',
    description: 'A home away from home for international students. We celebrate cultural diversity through events, food festivals, and support networks.',
    memberCount: 124,
    imageUrl: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=800',
  },
  {
    id: '6',
    name: 'Debate Team',
    description: 'Sharpen your public speaking and critical thinking skills. We participate in competitions and host debates on current issues.',
    memberCount: 38,
  },
  {
    id: '7',
    name: 'Photography Club',
    description: 'Capture moments and improve your photography skills. We organize photo walks, workshops, and exhibitions throughout the year.',
    memberCount: 67,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800',
  },
  {
    id: '8',
    name: 'Music Society',
    description: 'For musicians and music lovers alike. From jam sessions to formal performances, we celebrate all genres and styles.',
    memberCount: 91,
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800',
  },
];

const ClubsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredClubs = mockClubs.filter(club =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h1 className="font-bold mb-4">Discover Clubs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore and join clubs that match your interests and passions
          </p>
        </div>
        
        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search clubs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {filteredClubs.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No clubs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClubs.map((club) => (
              <ClubCard
                key={club.id}
                id={club.id}
                name={club.name}
                description={club.description}
                memberCount={club.memberCount}
                imageUrl={club.imageUrl}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubsPage;
