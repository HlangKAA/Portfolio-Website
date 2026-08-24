import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Lumina AI Skin Expert",
    description:
      "AI-powered skin analysis service delivered via LINE Official Account using LIFF web view for real-time skin condition assessment and personalized skincare recommendations.",
    src: "lumina.jpg",
    link: "https://i.postimg.cc/1XkGhWHf/lumina-placeholder.png",
    color: "#a855f7",
    githubLink: "https://github.com/HlangKAA/StartUp-Project-Skin-Analyzer-LINE-OA",
    linkType: "github",
    tags: ["LINE API (LIFF)", "AI / ML", "Web Dev"],
  },
  {
    title: "The Lost Spectrum",
    description:
      "Ongoing educational web game teaching Python programming and computer vision concepts, where players write code to restore color to a grayscale world, bridging learning and creative problem-solving.",
    src: "spectrum.jpg",
    link: "https://i.postimg.cc/1XkGhWHf/lumina-placeholder.png",
    color: "#6c63ff",
    githubLink: "https://github.com/HlangKAA/My-Project-KK",
    linkType: "github",
    tags: ["Python", "Computer Vision", "Web Game"],
  },
  {
    title: "Carbon Footprint Awareness Game",
    description:
      "Designed an educational game prototype promoting environmental sustainability and carbon footprint reduction through interactive gameplay and awareness mechanics.",
    src: "carbon.jpg",
    link: "https://i.postimg.cc/1XkGhWHf/lumina-placeholder.png",
    color: "#06b6d4",
    githubLink: "https://www.figma.com/design/e9cSRN4RlEeBDFM07D1VxK/Carbon-Crusaders?m=auto&t=ZpkRzTVESxpajSrN-1",
    linkType: "figma",
    tags: ["Game Dev", "Prototype Design"],
  },
  {
    title: "Hand Gesture Recognition System",
    description:
      "Developed a computer vision application for hand pose classification using advanced image processing techniques with OpenCV and Python.",
    src: "gesture.jpg",
    link: "https://i.postimg.cc/1XkGhWHf/lumina-placeholder.png",
    color: "#ec4899",
    githubLink: "",
    linkType: "none",
    tags: ["OpenCV", "Python", "Computer Vision"],
  },
  {
    title: "Hospital Management System",
    description:
      "Created a comprehensive OOP-based system for managing hospital operations, patient records, and appointments using C# and object-oriented design patterns.",
    src: "hospital.jpg",
    link: "https://i.postimg.cc/1XkGhWHf/lumina-placeholder.png",
    color: "#8b5cf6",
    githubLink: "https://github.com/HlangKAA/HMS-microProject",
    linkType: "github",
    tags: ["C#", "OOP"],
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                linkType={project.linkType}
                tags={project.tags}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  linkType,
  tags,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: `${color}15` }}
            >
              <div className="text-center px-8">
                <div className="text-6xl md:text-8xl mb-4" style={{ color }}>
                  {i === 0 && "🤖"}
                  {i === 1 && "🎨"}
                  {i === 2 && "🌱"}
                  {i === 3 && "✋"}
                  {i === 4 && "🏥"}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tags && tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full border"
                      style={{
                        borderColor: `${color}40`,
                        color: color,
                        backgroundColor: `${color}10`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* Project Link */}
                {linkType === "github" && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{ color }}
                    >
                      Code
                    </span>
                  </motion.a>
                )}
                {linkType === "figma" && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                    </svg>
                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{ color }}
                    >
                      Figma
                    </span>
                  </motion.a>
                )}
                {linkType === "none" && (
                  <span
                    className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-500 italic"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Private Project
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  linkType: PropTypes.string.isRequired,
  tags: PropTypes.array,
};
