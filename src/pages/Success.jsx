import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
function Success({ orderData }) {
  console.log(orderData);
  return (
    <>
      <div className="container-home" style={{ backgroundColor: "#CE2829" }}>
        <img src={logo} alt="Logo" className="home-logo" />
        <h1 className="home-title" style={{ marginTop: "10rem" }}>
          TEBRİKLER! SİPARİŞİNİZ ALINDI!
        </h1>
      </div>
    </>
  );
}

export default Success;
