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
    <Card className="bg-gradient-card backdrop-blur-sm border border-white/20 h-full">
      <CardHeader className="pb-3">
        <CardTitle className={`flex items-center gap-2 text-white p-3 rounded-lg ${getGradient()}`}>
          {getIcon()}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
              <h4 className="font-medium text-foreground text-sm mb-1">{item.title}</h4>
              {item.date && (
                <Badge variant="outline" className="text-xs mb-2">
                  {item.date}
                </Badge>
              )}
              {item.content && (
                <p className="text-xs text-muted-foreground">{item.content}</p>
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