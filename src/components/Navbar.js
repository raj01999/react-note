import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ handleSearchingForNavbar }) {
  const [search, setSearch] = useState("");

  const handleOnChange = (event) => {
    setSearch(event.target.value);
    handleSearchingForNavbar(event.target.value);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <nav>
      <ul>
        <Link to="*">
          <li
            style={{ fontSize: "1.5rem", position: "relative", bottom: "6px" }}
          >
            S Note
          </li>
        </Link>
        <Link to="*">
          <li> Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
      </form>
    </nav>
  );
}
