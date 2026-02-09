import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components
import Home from "./pages/Home.jsx";
import BookingForm from "./pages/BookingForm.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
