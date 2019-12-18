import React from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";

const MainMenu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        App Logo
      </Link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to="/">
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link class="nav-item nav-link active" to="/add">
            Add new contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
