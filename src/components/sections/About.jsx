import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const editingSkills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Marveleous Designer",
    "Corel DRAW"
  ];

  const softSkills = ["Communcation", "Creativity", "Teamwork", "Adaptability", "Problem Solving"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-purple-500/50 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate graphic designer with expertise in designing various promotional materials
              as well as various football-related designs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> • Editing Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {editingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-purple-500/10 to-pink-400/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> • Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-purple-500/10 to-pink-400/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-purple-500/50 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> • Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.A. in Automation </strong> - Universitatea din Oradea, Automation & Applied Informatics
                  (2021-2025)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-purple-500/50 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> • Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    • Quality Assurance Tester I at Electronic Arts Romania (July 2022 - September 2022){" "}
                  </h4>
                  <p>
                    Maintained quality across all aspects of the game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
