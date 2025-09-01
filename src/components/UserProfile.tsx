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
    <Card className="bg-gradient-card border border-accent/30 p-6 rounded-3xl shadow-strong relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-primary rounded-full opacity-10" />
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-secondary rounded-full opacity-10" />
      
      <div className="text-center mb-6 relative">
        <div className="relative mx-auto mb-4">
          <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse opacity-20" />
          <Avatar className="w-28 h-28 mx-auto border-4 border-primary shadow-strong relative">
            <AvatarImage src="/lovable-uploads/b91ec4f6-113d-4de2-9297-21fff3a26a65.png" alt={name} />
            <AvatarFallback className="bg-gradient-secondary text-white text-3xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-primary text-white px-4 py-1 rounded-full font-bold shadow-medium">
              ADMIN
            </Badge>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">{name}</h2>
        <p className="text-sm text-muted-foreground mb-4 font-medium">{designation}</p>
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