import { 
  GraduationCap, 
  Clock, 
  Building2, 
  DollarSign, 
  Settings, 
  UserCheck, 
  ClipboardList, 
  Calendar, 
  FileSpreadsheet, 
  Calculator,
  Cog,
  MessageSquare,
  Hotel,
  Users,
  Heart,
  Target,
  BookOpen,
  Library
} from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { UserProfile } from "@/components/UserProfile";
import { SearchBar } from "@/components/SearchBar";
import { InfoSection } from "@/components/InfoSection";

const modules = [
  { title: "Academic Management", icon: GraduationCap, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { title: "Attendance & Leave Management", icon: Clock, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  { title: "Branch Office Reporting", icon: Building2, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
  { title: "Budget", icon: DollarSign, gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
  { title: "CFOP", icon: Settings, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  { title: "Administrator", icon: UserCheck, gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  { title: "Entrance Exam", icon: ClipboardList, gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
  { title: "Event Management", icon: Calendar, gradient: "linear-gradient(135deg, #ff8a80 0%, #ea6100 100%)" },
  { title: "C-EXMS", icon: FileSpreadsheet, gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)" },
  { title: "FMS", icon: Calculator, gradient: "linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)" },
  { title: "General Masters", icon: Cog, gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" },
  { title: "Grievance", icon: MessageSquare, gradient: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)" },
  { title: "HTM", icon: Hotel, gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)" },
  { title: "HR CORNER", icon: Users, gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)" },
  { title: "HRM", icon: Heart, gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
  { title: "OBE", icon: Target, gradient: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)" },
  { title: "Learning", icon: BookOpen, gradient: "linear-gradient(135deg, #e0c3fc 0%, #9bb5ff 100%)" },
  { title: "Library", icon: Library, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
];

const sampleNotices = [
  {
    title: "Revised academic calendar for the session 2025-26",
    date: "28/08/2025",
    content: "Please check the updated academic calendar for important dates and deadlines."
  }
];

const sampleNews = [
  {
    title: "College of Pharmacy Updates",
    date: "29/08/2025",
    content: "Latest updates and announcements from the College of Pharmacy department."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white p-4 shadow-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">CYBORG IT SERVICES Pvt Ltd</h1>
              <p className="text-sm opacity-90">Enterprise Management System</p>
            </div>
          </div>
          <SearchBar />
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* User Profile Section */}
          <div className="lg:col-span-1">
            <UserProfile
              name="CYBORG ADMIN"
              designation="Administrator"
              department="Administration"
              joiningDate="24/12/2006"
              experience="18 Y 8 M 7 D"
              systemId="ADMIN001"
            />
          </div>

          {/* Dashboard Modules Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
              {modules.map((module, index) => (
                <DashboardCard
                  key={index}
                  title={module.title}
                  icon={module.icon}
                  gradient={module.gradient}
                  onClick={() => console.log(`Clicked ${module.title}`)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoSection
            title="Other Services"
            type="services"
            items={[]}
          />
          
          <InfoSection
            title="Circular Notices"
            type="notices"
            items={sampleNotices}
          />
          
          <InfoSection
            title="News"
            type="news"
            items={sampleNews}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;