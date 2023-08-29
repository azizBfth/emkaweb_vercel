import logo from './logo.svg';
import NavBar from './components/NavBar'
import './App.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

      </Routes>
    </div>
  );
}

export default App;
