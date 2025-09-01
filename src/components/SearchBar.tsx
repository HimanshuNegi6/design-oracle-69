import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Search Modules..."
        className="pl-10 bg-card/80 backdrop-blur-sm border-accent/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-2xl text-foreground placeholder:text-muted-foreground"
      />
    </div>
  );
};