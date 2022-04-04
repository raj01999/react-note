import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./routerComponents/About";
import Home from "./routerComponents/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [searchKey, setsearchKey] = useState("");
  const handleSearchingForNavbar = (search) => {
    setsearchKey(search);
  };

  return (
    <BrowserRouter>
      <Navbar handleSearchingForNavbar={handleSearchingForNavbar} />

      <Routes>
        <Route path="*" element={<Home searchKey={searchKey} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
