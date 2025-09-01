import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Search Modules..."
        className="pl-10 bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 rounded-md"
      />
    </div>
  );
};