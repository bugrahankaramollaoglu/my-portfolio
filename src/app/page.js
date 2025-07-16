import { Inter, Lato, Lora, Oswald, Roboto, Ubuntu } from "next/font/google";
import { Typewriter } from "@/components/ui/typewriter";
import { SparklesCore } from "@/components/ui/sparkles"
import { Mail, Github, Linkedin } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
import AppsSection from "@/components/sections/AppsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import { inter, oswald } from "@/components/utilities/fonts";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SparklesCore particleColor="#ffffffff" className="absolute inset-0 z-0 pointer-events-none" />

      <div className="space-y-16">

        {/* Hero Section */}
        <HeroSection oswald={oswald} inter={inter} />

        {/* Contact Section */}
        <ContactSection oswald={oswald} inter={inter} />

        {/* About Me Section */}
        <AboutSection oswald={oswald} inter={inter} />

        {/* Horizontal Divider*/}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Education Section */}
        <EducationSection oswald={oswald} inter={inter} />

        {/* Apps Section */}
        <AppsSection oswald={oswald} inter={inter} />

        {/* Articles Section */}
        <ArticlesSection oswald={oswald} inter={inter} />

        {/* Skills Section */}
        <SkillsSection oswald={oswald} inter={inter} />


      </div>
    </main>
  );
}
