import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from 'react-icons/si';

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-y-4 mt-40">
      <span className="text-white text-3xl text-center">About Me</span>
      <div className="flex flex-row justify-center gap-x-12 mb-10">
        <div className="max-w-xl text-white bg-neutral-800 rounded-lg px-12 py-4 shadow-lg">
          I'm a developer who discovered my passion for technology at a young
          age, turning early curiosity into a commitment to creating meaningful,
          functional projects.
        </div>
        <div className="bg-neutral-800 max-w-md h-60 rounded-lg flex flex-col gap-y-4 text-white shadow-lg">
          <span className="text-center pt-4">Skills</span>
          <div className="technologies flex flex-row flex-wrap gap-2 justify-center mt-4">
            <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              <SiJavascript className="text-yellow-300" />
              <span className="text-white font-medium text-xs">JavaScript</span>
            </span>
            <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              <SiMongodb className="text-green-500 text-xs" />
              <span className="text-white font-medium text-xs">MongoDB</span>
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
            <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              <SiExpress className="text-white text-xs" />
              <span className="text-white font-medium text-xs">Express</span>
            </span>
            <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              <SiReact className="text-blue-400" />
              <span className="text-white text-xs font-medium">React</span>
            </span>
            <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              <SiTypescript className="text-blue-300" />
              <span className="text-white text-xs font-medium">TypeScript</span>
            </span>
            <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              <SiCss3 className="text-blue-400" />
              <span className="text-white text-xs font-medium">CSS</span>
            </span>
            <span className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-700 transition-colors">
              <SiHtml5 className="text-orange-400" />
              <span className="text-white text-xs font-medium">HTML</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
