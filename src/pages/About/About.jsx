export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Student, Developer, Creator, Explorer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <div className="rounded-[15px] shadow block w-full h-full bg-gradient-to-br from-purple-900/40 to-violet-900/40 flex items-center justify-center text-8xl aspect-square">
                  👨‍💻
                </div>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold text-white">Kosit Nawikanon</span>, 
                a passionate Computer Science student at Kasetsart University, Kamphaeng Saen Campus.
                I'm driven by curiosity in Artificial Intelligence, Computer Vision, and Game Development.
              </p>
              <p className="text-white">
                I love building solutions that combine technical depth with creative thinking — 
                from AI-powered skin analysis apps to educational games that teach programming through play.
                Beyond coding, I'm actively involved in international exchange programs across Asia.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-purple-400 pl-4">
                  <p className="text-white">
                    I believe in the power of cross-cultural collaboration to fuel innovation.
                    As a member of the International Students Club and volunteer for exchange programs,
                    I've connected with students from China, Japan, and beyond — 
                    turning diverse perspectives into shared solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Kosit Nawikanon
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-medium">B.Sc. Computer Science · GPA 3.43</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
