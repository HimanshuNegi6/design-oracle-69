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
      case 'services': return 'bg-secondary';
      case 'notices': return 'bg-accent';
      case 'news': return 'bg-muted';
    }
  };

  return (
    <Card className="bg-card border border-border h-full rounded-lg shadow-soft">
      <CardHeader className="pb-4">
        <CardTitle className={`flex items-center gap-2 text-foreground p-3 rounded-md ${getGradient()} border border-border`}>
          {getIcon()}
          <span className="font-semibold">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="p-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors duration-200 border border-border/50">
              <h4 className="font-medium text-foreground text-sm mb-1">{item.title}</h4>
              {item.date && (
                <Badge variant="outline" className="text-xs mb-2 border-border">
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