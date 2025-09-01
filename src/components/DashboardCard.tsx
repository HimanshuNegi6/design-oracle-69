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
      className="group relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-strong bg-gradient-card backdrop-blur-sm border border-white/20"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ background: gradient }} />
      
      <div className="relative p-6 text-center">
        <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Card>
  );
};