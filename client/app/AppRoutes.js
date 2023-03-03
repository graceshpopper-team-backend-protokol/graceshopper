
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import {Login, Signup} from "../features/components/AccountLogin";
import Home from "../features/pages/Home";
import { me } from "./store";
import PuzzleDetail from "../features/pages/PuzzleDetail";
import { fetchPuzzles } from "../features/store/allPuzzlesSlice";
import { fetchUsers } from "../features/store/allUsersSlice";
import { fetchSingleUser, selectSingleUser } from '../features/store/singleUserSlice';
import { Protected } from './Admin/Protected'


/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin )
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
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<Signup name="signup" displayName="Sign Up" />}
          />

          <Route path="/Dashboard"
            element={<Protected isAdmin={isAdmin}>
              <Dashboard />
              </Protected>}
          />
          
          <Route to="/home" element={<Home />} />
        </Routes>
      )} 
    </div>
  );
};

export default AppRoutes;