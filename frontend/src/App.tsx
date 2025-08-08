import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
