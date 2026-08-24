import React from "react";
import { Phone, MapPin, Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <main
      className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen flex items-center justify-center"
    >
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <a 
              href="mailto:kosit.n@ku.th"
              className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group hover:scale-[1.02] shadow-xl hover:shadow-purple-500/20"
            >
              <div className="bg-purple-500/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-1">Email</h3>
                <p className="text-gray-400 group-hover:text-purple-300 transition-colors">kosit.n@ku.th</p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300 group hover:scale-[1.02] shadow-xl hover:shadow-violet-500/20">
              <div className="bg-violet-500/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-violet-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-1">Phone</h3>
                <p className="text-gray-400 group-hover:text-violet-300 transition-colors">+66 95 650 1686</p>
              </div>
            </div>

            {/* GitHub */}
            <a 
              href="https://github.com/HlangKAA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group hover:scale-[1.02] shadow-xl hover:shadow-indigo-500/20"
            >
              <div className="bg-indigo-500/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-1">GitHub</h3>
                <p className="text-gray-400 group-hover:text-indigo-300 transition-colors">github.com/HlangKAA</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group hover:scale-[1.02] shadow-xl hover:shadow-pink-500/20">
              <div className="bg-pink-500/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-1">Location</h3>
                <p className="text-gray-400 group-hover:text-pink-300 transition-colors">Nakhon Pathom, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
