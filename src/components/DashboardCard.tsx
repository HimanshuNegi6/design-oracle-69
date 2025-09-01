import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  gradient: string;
  onClick?: () => void;
}

export const DashboardCard = ({ title, icon: Icon, gradient, onClick }: DashboardCardProps) => {
  return (
    <Card 
      className="group cursor-pointer transform transition-all duration-200 hover:shadow-medium bg-card border border-border hover:border-primary/20 rounded-lg"
      onClick={onClick}
    >
      <div className="p-6 text-center">
        <div className="mb-4 mx-auto w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
          <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground" />
        </div>
        
        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
      </div>
    </Card>
  );
};