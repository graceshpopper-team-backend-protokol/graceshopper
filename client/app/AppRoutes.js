import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/pages/Home";
import { me } from "./store";
import PuzzleDetail from "../features/pages/PuzzleDetail";
import Dashboard from "./Admin/Dashboard";
import { fetchPuzzles } from "../features/store/allPuzzlesSlice";
import { fetchUsers } from "../features/store/allUsersSlice";
import {
  fetchSingleUser,
  selectSingleUser,
} from "../features/store/singleUserSlice";

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
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/puzzles/:id" element={<PuzzleDetail />} />

            <Route to="/home" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/puzzles/:id" element={<PuzzleDetail />} />

            <Route to="/home" element={<Home />} />
          </Routes>
        )
      ) : (
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
          {/* Commented this out for now because it was causing an error
          <Route path="/Dashboard"
            element={<Protected isAdmin={isAdmin}>
              <Dashboard />
              </Protected>}
          /> */}
          <Route path="/puzzles/:id" element={<PuzzleDetail />} />

          <Route to="/home" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
