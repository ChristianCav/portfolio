import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import { useRef } from 'react';

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar
        onProjectsClick={scrollToProjects}
        onAboutMeClick={scrollToAboutMe}
      ></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage projectsRef={projectsRef} aboutMeRef={aboutMeRef} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
