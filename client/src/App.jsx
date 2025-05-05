import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Homee from './pages/Homee';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddExperience from './pages/AddExperience';
import ViewExperiences from './pages/ViewExperiences';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';

// ✅ PrivateRoute component
const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homee" element={<Homee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* 🔐 Protected Routes */}
          <Route
            path="/add-experiences"
            element={
              <PrivateRoute>
                <AddExperience />
              </PrivateRoute>
            }
          />
          <Route
            path="/view"
            element={
              <PrivateRoute>
                <ViewExperiences />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
