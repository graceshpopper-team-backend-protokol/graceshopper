import React from "react";
import Navbar from "../features/components/Navbar";
import Footer from "../features/components/Footer";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
