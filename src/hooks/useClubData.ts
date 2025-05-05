
// Mocking data for clubs - in a real app, this would fetch from an API
export interface ClubOwner {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export interface ClubEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  imageUrl?: string;
}

export interface ClubMember {
  id: string;
  name: string;
  joinedDate: string;
}

export interface ClubDetails {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  memberCount: number;
  established?: string;
  meetingSchedule?: string;
  location?: string;
  contactEmail?: string;
  imageUrl?: string;
  owners?: ClubOwner[];
  members?: ClubMember[];
  events?: ClubEvent[];
}

// Mock data for clubs
const mockClubDetails: Record<string, ClubDetails> = {
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

export const useClubData = (clubId?: string) => {
  // In a real app, this would use a hook like useQuery to fetch from API
  if (clubId && mockClubDetails[clubId]) {
    return { club: mockClubDetails[clubId], isLoading: false, error: null };
  }
  
  return { club: null, isLoading: false, error: 'Club not found' };
};
