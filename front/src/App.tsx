import { ReactNode, useState } from 'react'
import './App.css'
import { appFB, firebaseConfig } from './framework/firebase.config'
import { getAuth } from 'firebase/auth'
import LoginPage from './pages/LoginPage'
export const auth = getAuth(appFB);


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import { log } from 'console'
import Home from './pages/Home'
import NotFound from './pages/NotFound'



interface PrivateRouteProps {
  children: ReactNode;
  loggedIn: boolean
}

const PrivateRoute = ({ children, loggedIn }: PrivateRouteProps) => {
  console.log(loggedIn);
  return loggedIn ? children : <Navigate to="/login" replace />;
};


function App() {
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setloggedIn={setloggedIn} />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute loggedIn={loggedIn}>
                <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

