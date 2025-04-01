import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Pages
import Home from './pages/Home';
import VisionTests from './pages/VisionTests';
import HearingTests from './pages/HearingTests';
import NeurologicalTests from './pages/NeurologicalTests';
import MentalHealthTests from './pages/MentalHealthTests';
import OtherHealthTests from './pages/OtherHealthTests';
import IQTest from './pages/IQTest';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Navbar />
        <motion.main 
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision-tests" element={<VisionTests />} />
            <Route path="/hearing-tests" element={<HearingTests />} />
            <Route path="/neurological-tests" element={<NeurologicalTests />} />
            <Route path="/mental-health-tests" element={<MentalHealthTests />} />
            <Route path="/other-health-tests" element={<OtherHealthTests />} />
            <Route path="/iq-test" element={<IQTest />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
