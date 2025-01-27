import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import { NavLink } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

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
          <Breadcrumb>
            <BreadcrumbItem>
              <NavLink
                exact
                to="/"
                activeClassName="breadcrumb-link active"
                className="breadcrumb-link"
              >
                Ana Sayfa
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NavLink
                to="/order"
                activeClassName="breadcrumb-link active"
                className="breadcrumb-link"
              >
                Sipariş Oluştur
              </NavLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </header>
    </>
  );
}

export default Header;
