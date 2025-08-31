import MyInfo from '../components/MyInfo';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

interface HomepageProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
}

const Homepage = ({ projectsRef, aboutMeRef }: HomepageProps) => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_20%,#5a3fcf_100%)]"></div>
      <MyInfo></MyInfo>
      <div ref={projectsRef}>
        <Projects></Projects>
      </div>
      <div ref={aboutMeRef}>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
};

export default Homepage;
