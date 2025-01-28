import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "reactstrap";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";

function HomePage() {
  const history = useHistory();

  function handleClick() {
    history.push("/order");
  }

  return (
    <>
      <div className="container-home home-background">
        <img src={logo} alt="Logo" className="home-logo" />
        <h1 className="home-title">KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        <Button className="home-button" onClick={handleClick}>
          ACIKTIM
        </Button>
      </div>
      <HomeSection handleClick={handleClick}/>
      <Footer />
    </>
  );
}

export default HomePage;
