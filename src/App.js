import "./App.css";
import { Navbar, Footer } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Gallery, Contact } from "./Pages";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
