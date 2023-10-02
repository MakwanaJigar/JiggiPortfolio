import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
