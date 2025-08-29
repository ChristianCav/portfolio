import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiLeaflet,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from 'react-icons/si';

const Projects = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center mt-80">
      <span className="text-3xl text-white text-center">My Projects</span>
      <div className="py-20 flex flex-row gap-5 items-center justify-center">
        <a
          href="https://github.com/ChristianCav/AthleticBase"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project text-white text-xl w-80 flex flex-col items-center gap-y-2 justify-center bg-neutral-800 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300 ease-out">
            <div className="text-white text-2xl font-medium">AthleticBase</div>
            <img
              src="AthleticBase-picture.png"
              alt="AthleticBase project screenshot"
              className="w-full object-contain rounded-lg h-auto"
            />
            <div className="description text-white text-sm gap-y-1/2 flex flex-col text-center">
              <span>Web app to track your performances in</span>
              <span>all sports and physical activities</span>
            </div>
            <div className="technologies flex flex-row flex-wrap gap-2 justify-center">
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiJavascript className="text-yellow-300" />
                <span className="text-white font-medium text-xs">
                  JavaScript
                </span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiMongodb className="text-green-500 text-xs" />
                <span className="text-white font-medium text-xs">MongoDB</span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiExpress className="text-white text-xs" />
                <span className="text-white font-medium text-xs">Express</span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiReact className="text-blue-400" />
                <span className="text-white text-xs font-medium">React</span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiNodedotjs className="text-green-400" />
                <span className="text-white text-xs font-medium">Node.js</span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiTailwindcss className="text-blue-400" />
                <span className="text-white text-xs font-medium">
                  TailwindCSS
                </span>
              </span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ChristianCav/PokemonGO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project text-white text-xl w-80 flex flex-col items-center gap-y-2 justify-center bg-neutral-800 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300 ease-out">
            <div className="text-white text-2xl font-medium">
              PokemonGO Analyzer
            </div>
            <img
              src="pokemon.png"
              alt="PokemonGo project screenshot"
              className="w-full object-contain rounded-lg h-auto"
            />
            <div className="description text-white text-sm gap-y-1/2 flex flex-col text-center">
              <span>Web app that analyzes and visualizes</span>
              <span>100,000+ real-world PokemonGO instances</span>
            </div>
            <div className="technologies flex flex-row flex-wrap gap-2 justify-center">
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiTypescript className="text-blue-300" />
                <span className="text-white font-medium text-xs">
                  TypeScript
                </span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiHtml5 className="text-orange-400 text-xs" />
                <span className="text-white font-medium text-xs">HTML</span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiCss3 className="text-blue-400 text-xs" />
                <span className="text-white font-medium text-xs">CSS</span>
              </span>
              <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
                <SiLeaflet className="text-green-400 text-xs" />
                <span className="text-white font-medium text-xs">Leaflet</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
