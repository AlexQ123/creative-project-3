import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import Subtract from './Subtract';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/creative-project-3/build/" element={<Home/>} />
        <Route path="/creative-project-3/build/add" element={<Add/>} />
        <Route path="/creative-project-3/build/subtract" element={<Subtract/>} />
      </Routes>
    </div>
  );
}

export default App;
