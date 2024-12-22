// App.js
import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Requestafind from './RequestAFind/requestafind';
import UpcomingEvents from './upcomingEvents/upcomingevents';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/requestafind"
          element={authUser ? <Requestafind /> : <Navigate to="/signup" />}
        />
        <Route
          path="/upcomingevents"
          element={authUser ? <UpcomingEvents /> : <Navigate to="/upcomingevents" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
