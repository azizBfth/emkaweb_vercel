import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  const handleContextmenu = (e) => {
    e.preventDefault();
    toast.error("Right Click is disabled ");
  };
  return (
    <>
      <Toaster />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
