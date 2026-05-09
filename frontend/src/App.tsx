import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import { useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';

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
      <Analytics />
    </div>
  );
}

export default App;
