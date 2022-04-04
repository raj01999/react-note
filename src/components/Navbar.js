import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  handleSearchingForNavbar,
  reload,
  setReload,
}) {
  const [search, setSearch] = useState("");
  const [searchChecker, setSearchChecker] = useState(true);

  const handleOnClick = () => {
    setReload(!reload);
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchingForNavbar(search, searchChecker);
      setSearchChecker(!searchChecker);
      setSearch("");
    }
  };

  return (
    <nav>
      {/* {console.log("Navbar Rander")} */}
      <ul>
        <Link to="/" onClick={handleOnClick}>
          <li
            style={{ fontSize: "1.5rem", position: "relative", bottom: "6px" }}
          >
            S Note
          </li>
        </Link>
        <Link to="/" onClick={handleOnClick}>
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
