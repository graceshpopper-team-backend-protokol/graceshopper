import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/pages/Home";
import { me } from "./store";
import Dashboard from "./Admin/Dashboard";
import PuzzleDetail from "../features/pages/PuzzleDetail";
import AllPuzzles from "../features/pages/AllPuzzles";
import AllUsers from "../features/pages/AllUsers";
import Cart from "../features/pages/Cart";
import Checkout from "../features/pages/Checkout";
import Confirmation from "../features/pages/Confirmation";
import EditPuzzle from "./Admin/EditPuzzle";

/**
 * Component for all approutes
 * @component contains logic which routes are accesible based on the user status (logged in/logged in as admin/not logged in)
 */
const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();

  // dipatches authentication and retrieves token once when component mounts
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        isAdmin ? (
          // Routes for Admin only - otherwise redirected to homepage
          <Routes>
            <Route path="/cart/confirmation" element={<Confirmation />} />
            <Route path="/cart/checkout/" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard/users" element={<AllUsers />} />
            <Route path="/dashboard/puzzles/:id" element={<EditPuzzle />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/puzzles/:id" element={<PuzzleDetail />} />
            <Route path="/puzzles" element={<AllPuzzles />} />
            <Route to="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        ) : (
          // Routes for Logged in users
          <Routes>
            <Route path="/cart/confirmation" element={<Confirmation />} />
            <Route path="/cart/checkout/" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/puzzles/:id" element={<PuzzleDetail />} />
            <Route path="/puzzles" element={<AllPuzzles />} />
            <Route to="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        )
      ) : (
        // Routes for not logged in users
        <Routes>
          <Route path="/cart/confirmation" element={<Confirmation />} />
          <Route path="/cart/checkout/" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/puzzles/:id" element={<PuzzleDetail />} />
          <Route path="/puzzles" element={<AllPuzzles />} />
          <Route to="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
