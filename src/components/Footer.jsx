import React from "react";
import footerLogo from "..//..//images/iteration-2-images/footer/logo-footer.svg";
import iconPin from "..//..//images/iteration-2-images/footer/icons/icon-1.png";
import iconMail from "..//..//images/iteration-2-images/footer/icons/icon-2.png";
import iconTel from "..//..//images/iteration-2-images/footer/icons/icon-3.png";
import insta1 from "..//..//images/iteration-2-images/footer/insta/li-0.png";
import insta2 from "..//..//images/iteration-2-images/footer/insta/li-1.png";
import insta3 from "..//..//images/iteration-2-images/footer/insta/li-2.png";
import insta4 from "..//..//images/iteration-2-images/footer/insta/li-3.png";
import insta5 from "..//..//images/iteration-2-images/footer/insta/li-4.png";
import insta6 from "..//..//images/iteration-2-images/footer/insta/li-5.png";

const hotMenu = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz  Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];

const instaImg = [insta1, insta2, insta3, insta4, insta5, insta6];

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#1A1A1A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Barlow",
      }}
    >
      <div
        style={{
          padding: "2rem",
          width: "80%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "35%" }}>
          <img
            src={footerLogo}
            alt="Footer Logo"
            style={{ marginBottom: "2rem" }}
          />
          <div style={{ marginBottom: "1.8rem" }}>
            <img src={iconPin} alt="Pin Icon" />
            <span> 341 Londonderry Road, Istanbul Türkiye</span>
          </div>
          <div style={{ marginBottom: "1.8rem" }}>
            <img src={iconMail} alt="Mail Icon" />
            <span> aciktim@teknolojikyemekler.com</span>
          </div>
          <div>
            <img src={iconTel} alt="Tel Icon" />
            <span> +90 216 123 45 67</span>
          </div>
        </div>
        <div style={{ width: "25%", paddingTop: "3.2rem" }}>
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>Hot Menu</span>
          <ul style={{ listStyleType: "none", padding: "2rem 0" }}>
            {hotMenu.map((item, index) => (
              <li key={index} style={{ marginBottom: ".8rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ width: "35%", paddingTop: "3.2rem" }}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Instagram
          </span>
          <div style={{ marginTop: "1.8rem" }}>
            {instaImg.map((item, index) => (
              <img key={index} src={item} style={{ margin: ".3rem" }} />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: ".1px solid gray",
          width: "100%",
          padding: "1rem",
        }}
      >
        <span style={{ marginLeft: "10rem" }}>© 2023 Teknolojik Yemekler.</span>
      </div>
    </div>
  );
}

export default Footer;
