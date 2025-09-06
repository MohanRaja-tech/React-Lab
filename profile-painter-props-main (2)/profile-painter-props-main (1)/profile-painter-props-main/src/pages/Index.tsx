import ProfileCard from "@/components/ProfileCard";

const Index = () => {
  // Sample user data - this would typically come from props, API, or state
  const userData = {
    name: "Mohanraja V",
    title: "Full Stack Developer & UI/UX Designer",
    bio: "Passionate about creating beautiful, functional web applications with modern technologies. I love turning complex problems into simple, elegant solutions and helping teams build amazing digital experiences.",
    location: "San Francisco, CA",
    joinDate: "March 2022",
    skills: [
      "React", "JavaScript", "LLM", "Node.js", "Python",
      "UI/UX Design", "OpenCV", "Hugging Face", "MongoDB", "SQL",
      "AWS", "C", "Git", "Java", "RAG"
    ],
    stats: {
      projects: 42,
      followers: 1284,
      following: 156
    },
    socialLinks: {
      github: "https://github.com/MohanRaja-tech",
      linkedin: "https://www.linkedin.com/in/mohanraja-tech/",
      email: "mohantwo3@gmail.com"
    }
  };

  return (
    <div>
      <ProfileCard user={userData} />
    </div>
  );
};

export default Index;