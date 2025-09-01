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
    <Card className="bg-card border border-border p-6 rounded-lg shadow-soft">
      <div className="text-center mb-6">
        <div className="relative mx-auto mb-4">
          <Avatar className="w-20 h-20 mx-auto border-2 border-border shadow-medium">
            <AvatarImage src="/lovable-uploads/b91ec4f6-113d-4de2-9297-21fff3a26a65.png" alt={name} />
            <AvatarFallback className="bg-secondary text-foreground text-xl font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">
              Admin
            </Badge>
          </div>
        </div>
        
        <h2 className="text-lg font-semibold text-foreground mb-1">{name}</h2>
        <p className="text-sm text-muted-foreground">{designation}</p>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between py-2 border-b border-border/50">
          <span className="text-muted-foreground">Department:</span>
          <span className="font-medium text-foreground">{department}</span>
        </div>
        
        <div className="flex justify-between py-2 border-b border-border/50">
          <span className="text-muted-foreground">Joining Date:</span>
          <span className="font-medium text-foreground">{joiningDate}</span>
        </div>
        
        <div className="flex justify-between py-2 border-b border-border/50">
          <span className="text-muted-foreground">Total Exp.:</span>
          <span className="font-medium text-foreground">{experience}</span>
        </div>
        
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">System ID:</span>
          <span className="font-medium text-foreground">{systemId}</span>
        </div>
      </div>
    </Card>
  );
};