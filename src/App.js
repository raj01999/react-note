import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./routerComponents/About";
import Home from "./routerComponents/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [searchKey, setsearchKey] = useState("");
  const handleSearchingForNavbar = (search, searchChecker) => {
    setsearchKey(search + " " + searchChecker);
  };
  const [reload, setReload] = useState(false);

  return (
    <BrowserRouter>
      <Navbar
        handleSearchingForNavbar={handleSearchingForNavbar}
        reload={reload}
        setReload={setReload}
      />

      <Routes>
        <Route
          path="*"
          element={
            <Home searchKey={searchKey} reload={reload} setReload={setReload} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
