import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function HomePage() {
  const history = useHistory();

  function handleClick() {
    history.push("/order");
  }

  return (
    <div className="container-home">
      <img src={logo} alt="Logo" className="home-logo" />
      <h1 className="home-title">KOD ACIKTIRIR PİZZA, DOYURUR</h1>
      <Button
        className="home-button"
        sx={{
          bgcolor: "#fdc913",
          color: "black",
          fontFamily: "Barlow",
          fontWeight: "600",
          fontSize: "18px",
          width: "193px",
          height: "56px",
          borderRadius: "50px",
        }}
        onClick={handleClick}
      >
        ACIKTIM
      </Button>
    </div>
  );
}

export default HomePage;
