import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { useSelector } from 'react-redux';
import Solution from './pages/Solution';
import Scoreboard from './pages/Scoreboard';
import AddQuestion from './pages/AddQuestion';

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/quiz"
            element={isAuth ? <Quiz /> : <Navigate to="/" />}
          />
          <Route path="/solutions" element={isAuth ? <Solution /> : <Navigate to="/" />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/addquestion" element={isAuth ? <AddQuestion /> : <Navigate to="/" />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
