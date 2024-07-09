import { Route, Routes } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Nav />
      <About/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
