import React from "react";
import { Globe, Users, GraduationCap, Heart } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  flag,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Flag + Icon */}
      <div className="relative mb-6 flex items-center gap-4">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-violet-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <span className="text-4xl relative z-10">{flag}</span>
        <Icon className="w-8 h-8 text-purple-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-violet-400">{company}</span>
          <span className="text-sm font-mono bg-purple-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-purple-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-violet-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-violet-500/50" />
      </div>
    </div>
  </div>
);

const LeadershipSection = () => {
  const experiences = [
    {
      icon: Globe,
      flag: "🇨🇳",
      title: "Oxbridge College Exchange",
      company: "Kunming Univ. of Science & Technology, China",
      period: "May – Jun 2026",
      description:
        "Cultural and academic exchange program at Kunming, China — exploring cross-cultural education and international collaboration.",
    },
    {
      icon: Users,
      flag: "🇯🇵",
      title: "KU-TUA 2026 Buddy Program",
      company: "Tokyo University of Agriculture",
      period: "Feb 2026",
      description:
        "Served as mentor and buddy for Tokyo University of Agriculture exchange students during their visit to Kasetsart University.",
    },
    {
      icon: GraduationCap,
      flag: "🇯🇵",
      title: "KU-OU Summer Program",
      company: "Okayama University Buddy Program",
      period: "Aug 2025",
      description:
        "Buddy and cultural guide for Okayama University summer exchange students, facilitating cultural exchange and campus activities.",
    },
    {
      icon: Heart,
      flag: "🌏",
      title: "KUKPS-ISA Camp",
      company: "International Students Association",
      period: "Jul 2025",
      description:
        "Cross-cultural and leadership activities with the international student community, building bridges across diverse backgrounds.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-center">
                Leadership & International
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-violet-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Building bridges across cultures through collaboration and shared experiences"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default LeadershipSection;
