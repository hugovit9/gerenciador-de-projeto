import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Contato from './components/Pages/Contato';
import Empresa from './components/Pages/Empresa';
import NovoProjeto from './components/Pages/NovoProjeto';
import Navbar from './components/layout/Navbar';
import Container from "./components/layout/Container";
import Footer from './components/layout/Footer';
import Projects from './components/Pages/Projects';
import Project from "./components/Pages/Project";


import './App.css';




function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content-wrap">
          <Container customClass='min-height'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/novoprojeto" element={<NovoProjeto />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<Project />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
