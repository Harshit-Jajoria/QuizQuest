import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const App = () => {
  // const isAuth = Boolean(useSelector((state) => state.token));
  const isAuth = true;

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/quiz"
            element={isAuth ? <Quiz /> : <Navigate to="/home" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
