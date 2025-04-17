import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent leading-right">
            Hi, I’m Astral Designer
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a graphic designer who loves crafting clean & creative designs. My goal is to elevate brands & their
            presence by creating thoughtful and authentic brand identities.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-purple-500/50 text-pink-400 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10"
            >
              Contact Me
            </a>
            <div className="bg-linear-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
