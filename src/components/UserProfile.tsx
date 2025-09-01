import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserProfileProps {
  name: string;
  designation: string;
  department: string;
  joiningDate: string;
  experience: string;
  systemId: string;
}

export const UserProfile = ({ 
  name, 
  designation, 
  department, 
  joiningDate, 
  experience,
  systemId 
}: UserProfileProps) => {
  return (
    <Card className="bg-gradient-card backdrop-blur-sm border border-white/20 p-6">
      <div className="text-center mb-6">
        <div className="relative mx-auto mb-4">
          <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-medium">
            <AvatarImage src="/lovable-uploads/b91ec4f6-113d-4de2-9297-21fff3a26a65.png" alt={name} />
            <AvatarFallback className="bg-gradient-primary text-white text-2xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              admin
            </Badge>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-foreground mb-2">{name}</h2>
        <p className="text-sm text-muted-foreground mb-4">{designation}</p>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Department:</span>
          <span className="font-medium text-foreground">{department}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Joining Date:</span>
          <span className="font-medium text-foreground">{joiningDate}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Exp.:</span>
          <span className="font-medium text-foreground">{experience}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">System ID:</span>
          <span className="font-medium text-foreground">{systemId}</span>
        </div>
      </div>
    </Card>
  );
};