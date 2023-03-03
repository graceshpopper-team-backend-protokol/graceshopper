import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Dashboard from "./Admin/Dashboard";
import Home from "../features/pages/Home";
import { me } from "./store";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        isAdmin ? (
          // Routes for Admin only - otherwise redirected to homepage
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/puzzles/:id" element={<PuzzleDetail />} />

            <Route to="/home" element={<Home />} />
          </Routes>
        ) : (
          // Routes for Logged in users
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/puzzles/:id" element={<PuzzleDetail />} />

            <Route to="/home" element={<Home />} />
          </Routes>
        )
      ) : (
        // Routes for not logged in users
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/puzzles/:id" element={<PuzzleDetail />} />

          <Route to="/home" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
