import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/pages/Home";
import { me } from "./store";
import { User, Puzzle } from "../features/components/index";
import PuzzleDetail from "../features/pages/PuzzleDetail";
import { fetchPuzzles } from "../features/store/allPuzzlesSlice";
import { fetchUsers } from "../features/store/allUsersSlice";

//This will need to be updated with AccountForm - Sarah
/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {true ? (
        <Routes>
          <Route path="/puzzles/:id" element={<PuzzleDetail />} />
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route to="/users" element={<User />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route to="/home" element={<Home />} />
        </Routes>
      )} */
    </div>
  );
};

export default AppRoutes;