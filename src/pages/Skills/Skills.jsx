import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Gamepad2, Database, Eye, Cpu, Languages } from "lucide-react";
import {
  FaPython,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaUnity,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiOpencv,
  SiReact,
} from "react-icons/si";
import { TbBrandVscode, TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.1)] to-transparent group-hover:via-[rgba(168,85,247,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-purple-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "C#", icon: <TbBrandCSharp className="w-4 h-4 text-[#68217A]" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#ED8B00]" /> },
        { name: "C", icon: <TbBrandCpp className="w-4 h-4 text-[#A8B9CC]" /> },
        { name: "SQL", icon: <Database className="w-4 h-4 text-[#4479A1]" /> },
      ],
    },
    {
      icon: Eye,
      title: "AI & Computer Vision",
      color: "text-cyan-400",
      skills: [
        { name: "OpenCV", icon: <SiOpencv className="w-4 h-4 text-[#5C3EE8]" /> },
        { name: "Machine Learning", icon: <Cpu className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "Image Processing", icon: <Eye className="w-4 h-4 text-[#00BCD4]" /> },
        { name: "Computer Vision", icon: <Eye className="w-4 h-4 text-[#8BC34A]" /> },
      ],
    },
    {
      icon: Database,
      title: "Web & Mobile",
      color: "text-blue-400",
      skills: [
        { name: "React Native", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "LINE LIFF", icon: <BsGrid1X2 className="w-4 h-4 text-[#06C755]" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      color: "text-green-400",
      skills: [
        { name: "Unity", icon: <FaUnity className="w-4 h-4 text-white" /> },
        { name: "Prototype Design", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
        { name: "Game Logic", icon: <Gamepad2 className="w-4 h-4 text-[#4CAF50]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & DevOps",
      color: "text-violet-400",
      skills: [
        { name: "Git/GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Antigravity", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#A855F7]" /> },
      ],
    },
    {
      icon: Languages,
      title: "Languages",
      color: "text-amber-400",
      skills: [
        { name: "Thai (Native) 🇹🇭", icon: <Languages className="w-4 h-4 text-[#FF6D00]" /> },
        { name: "English (Intermediate) 🇬🇧", icon: <Languages className="w-4 h-4 text-[#1976D2]" /> },
        { name: "Japanese (Beginner) 🇯🇵", icon: <Languages className="w-4 h-4 text-[#E91E63]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
