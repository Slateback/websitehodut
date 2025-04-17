
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section id="projects" className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ">
        
        <div className="container mx-auto">
        <RevealOnScroll>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] justify-center text-center ">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text wrap-normal text-transparent leading-right">
                Recent Projects
                </h2>
                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto justify-center items-center">
                  These are some of the projects I have done recently.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap items-center justify-center mb-12 space-x-6">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center bg-gradient-to-r from-purple-500 to-pink-400 text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                        : "inactiveClasses text-body-color transition relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center bg-gradient-to-r from-purple-500 to-pink-400 text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                        : "inactiveClasses text-body-color transition relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center bg-gradient-to-r from-purple-500 to-pink-400 text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                       ? "activeClasses bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                        : "inactiveClasses text-body-color transition relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    }`}
                  >
                    Design
                  </button>
                </li> 
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://i.imgur.com/j4lhkfv.png"
              category="Branding"
              title="Chelsea Visual Identity Concept"
              button="View Details"
              buttonHref="https://www.instagram.com/p/DBBBv3So3wP/?img_index=1"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.imgur.com/08W7ign.jpeg"
              category="Design"
              title="Promotion Poster for FC Bihor Oradea for their 23'-24' season"
              button="View Details"
              buttonHref="https://www.facebook.com/photo.php?fbid=432120359593329&set=pb.100083861061937.-2207520000&type=3"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.imgur.com/rs2tyB5.png"
              category="Design"
              title="Assisting FC Bihor in creating their 24'-25' away kit."
              button="View Details"
              buttonHref="https://www.facebook.com/reel/576847221989810"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.imgur.com/nDdVTk4.png"
              category="Design"
              title="USL Division One Inaugural Season Kits"
              button="View Details"
              buttonHref="https://www.instagram.com/p/DH4GkV_MiFZ/?img_index=1"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.imgur.com/r5UJWBi.png"
              category="Branding"
              title="Sepsi OSK Visual Identity Concept."
              button="View Details"
              buttonHref="https://www.instagram.com/p/C_N8iaHNdS4/?img_index=1"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.imgur.com/rCMWa4z.jpeg"
              category="Branding"
              title="Valencia Visual Identity Concept"
              button="View Details"
              buttonHref="https://www.instagram.com/p/C_vmPkVAVU5/?img_index=1"
              showCard={showCard}
            />
          </div>
          </RevealOnScroll>
        </div>
      </section>
      
    </>
  );
};

export default Projects;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-gray-950 py-[34px] px-3 text-center shadow-portfolio ">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color bg-gradient-to-r from-purple-500 to-pink-400 hover:bg-primary inline-block rounded-md py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
