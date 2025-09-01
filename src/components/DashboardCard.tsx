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
      className="group relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-strong bg-gradient-card border border-accent/30 rounded-2xl"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-all duration-500" />
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
      
      <div className="relative p-5 text-center">
        <div className="mb-3 mx-auto w-14 h-14 rounded-2xl bg-gradient-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-medium">
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-all duration-300 leading-tight">
          {title}
        </h3>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Card>
  );
};