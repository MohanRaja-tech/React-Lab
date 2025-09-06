import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Calendar, Users } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

interface ProfileCardProps {
  user: {
    name: string;
    title: string;
    bio: string;
    location: string;
    joinDate: string;
    avatar?: string;
    skills: string[];
    stats: {
      projects: number;
      followers: number;
      following: number;
    };
    socialLinks: {
      github?: string;
      linkedin?: string;
      email?: string;
    };
  };
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <Card className="bg-gradient-primary border-0 shadow-elegant mb-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-accent"></div>
          <CardContent className="relative z-10 p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-gradient-secondary p-1 transition-all duration-300 group-hover:shadow-glow-primary">
                  <img
                    src={user.avatar || profileAvatar}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-card flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {user.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">{user.title}</p>
                <p className="text-foreground/90 mb-6 max-w-2xl leading-relaxed">
                  {user.bio}
                </p>
                
                {/* Location and Join Date */}
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-3">
                  {user.socialLinks.github && (
                    <Button variant="secondary" size="sm" className="hover:shadow-glow-secondary transition-all duration-300">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  )}
                  {user.socialLinks.linkedin && (
                    <Button variant="secondary" size="sm" className="hover:shadow-glow-secondary transition-all duration-300">
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                  )}
                  {user.socialLinks.email && (
                    <Button variant="secondary" size="sm" className="hover:shadow-glow-secondary transition-all duration-300">
                      <Mail size={16} className="mr-2" />
                      Email
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats and Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Stats Card */}
          <Card className="bg-card border-border shadow-elegant hover:shadow-glow-secondary transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users size={20} />
                Activity
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="text-2xl font-bold text-primary">{user.stats.projects}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Followers</span>
                  <span className="text-2xl font-bold text-primary">{user.stats.followers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Following</span>
                  <span className="text-2xl font-bold text-primary">{user.stats.following}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="md:col-span-2 bg-card border-border shadow-elegant hover:shadow-glow-secondary transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {user.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gradient-accent hover:bg-gradient-primary transition-all duration-300 hover:shadow-glow-primary cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Card */}
        <Card className="bg-card border-border shadow-elegant hover:shadow-glow-secondary transition-all duration-300">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-accent rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-foreground">Updated portfolio with new project</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-accent rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-foreground">Completed React certification course</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-accent rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-foreground">Joined open source project collaboration</p>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;