import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { About, Contact, Home, Projects } from "./pages";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300 min-h-[100vh]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
