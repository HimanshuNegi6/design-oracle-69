import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, FileText, Calendar } from "lucide-react";

interface InfoSectionProps {
  title: string;
  type: 'services' | 'notices' | 'news';
  items?: Array<{
    title: string;
    date?: string;
    content?: string;
  }>;
}

export const InfoSection = ({ title, type, items = [] }: InfoSectionProps) => {
  const getIcon = () => {
    switch (type) {
      case 'services': return <FileText className="w-5 h-5" />;
      case 'notices': return <Bell className="w-5 h-5" />;
      case 'news': return <Calendar className="w-5 h-5" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'services': return 'bg-gradient-primary';
      case 'notices': return 'bg-gradient-secondary';
      case 'news': return 'bg-accent';
    }
  };

  return (
    <Card className="bg-gradient-card border border-accent/30 h-full rounded-2xl shadow-medium relative overflow-hidden">
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full opacity-20" />
      
      <CardHeader className="pb-3 relative">
        <CardTitle className={`flex items-center gap-3 text-white p-4 rounded-2xl ${getGradient()} shadow-medium relative overflow-hidden`}>
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative flex items-center gap-3">
            {getIcon()}
            <span className="font-bold">{title}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-muted/30 hover:bg-gradient-secondary/20 transition-all duration-300 border border-accent/20 hover:border-primary/40 hover:shadow-soft">
              <h4 className="font-bold text-foreground text-sm mb-2">{item.title}</h4>
              {item.date && (
                <Badge className="bg-gradient-primary text-white text-xs mb-2 px-3 py-1 rounded-full">
                  {item.date}
                </Badge>
              )}
              {item.content && (
                <p className="text-xs text-muted-foreground leading-relaxed">{item.content}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            No {type} available
          </p>
        )}
      </CardContent>
    </Card>
  );
};