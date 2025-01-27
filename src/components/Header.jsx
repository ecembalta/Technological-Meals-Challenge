import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";

function Header() {
  function handleClick(event) {
    event.preventDefault();
    console.log(event.target);
  }

  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <div role="presentation" onClick={handleClick} className="bread-crumbs">
          <Breadcrumbs color="white" aria-label="breadcrumb">
            <NavLink
              exact
              to="/"
              activeClassName="breadcrumb-link active"
              className="breadcrumb-link"
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              to="/order"
              activeClassName="breadcrumb-link active"
              className="breadcrumb-link"
            >
              Sipariş Oluştur
            </NavLink>
          </Breadcrumbs>
        </div>
      </header>
    </>
  );
}

export default Header;
