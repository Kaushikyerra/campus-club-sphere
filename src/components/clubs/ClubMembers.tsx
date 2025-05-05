
import React from 'react';

interface Member {
  id: string;
  name: string;
  joinedDate: string;
}

interface ClubMembersProps {
  club: {
    memberCount: number;
    members?: Member[];
  };
}

const ClubMembers: React.FC<ClubMembersProps> = ({ club }) => {
  return (
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
  );
};

export default ClubMembers;
