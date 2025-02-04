import { ReactNode, useState } from 'react'
import './App.css'
import { appFB, firebaseConfig } from './framework/firebase.config'
import { getAuth } from 'firebase/auth'
export const auth = getAuth(appFB);


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { log } from 'console';



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
  console.log("loggedIn", loggedIn);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Home setloggedIn={setloggedIn} />} />
        <Route 
          path="/" 
          element={
            <PrivateRoute loggedIn={loggedIn}>
                <Dashboard />
            </PrivateRoute>
          } 
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

