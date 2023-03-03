import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/pages/Home";
import { me } from "./store";
import PuzzleDetail from "../features/pages/PuzzleDetail";
import { fetchPuzzles } from "../features/store/allPuzzlesSlice";
import { fetchUsers } from "../features/store/allUsersSlice";
import {
  fetchSingleUser,
  selectSingleUser,
} from "../features/store/singleUserSlice";
import { Protected } from "./Admin/Protected";

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
        <Routes>
          <Route path="/puzzles/:id" element={<PuzzleDetail />} />
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
        </Routes>
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
