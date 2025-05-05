import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Homee from './pages/Homee';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddExperience from './pages/AddExperience';
import ViewExperiences  from './pages/ViewExperiences';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* Optional Header component outside Routes */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homee" element={<Homee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-experiences" element={<AddExperience />} />
        <Route path="/view" element={<ViewExperiences />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
