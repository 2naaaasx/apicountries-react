import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ImageDetails from "./ImageDetails";


function App() {
  return (
    <Router basename="/apicountries-react">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:id" element={<ImageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

