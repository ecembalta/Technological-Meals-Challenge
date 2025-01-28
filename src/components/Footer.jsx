import React from "react";
import "./Footer.css";
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
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
          <div className="contact-item">
            <img src={iconPin} alt="Pin Icon" />
            <span> 341 Londonderry Road, Istanbul Türkiye</span>
          </div>
          <div className="contact-item">
            <img src={iconMail} alt="Mail Icon" />
            <span> aciktim@teknolojikyemekler.com</span>
          </div>
          <div className="contact-item">
            <img src={iconTel} alt="Tel Icon" />
            <span> +90 216 123 45 67</span>
          </div>
        </div>
        <div className="footer-center">
          <span className="menu-title">Hot Menu</span>
          <ul className="hot-menu-list">
            {hotMenu.map((item, index) => (
              <li key={index} className="hot-menu-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-right">
          <span className="instagram-title">Instagram</span>
          <div className="instagram-grid">
            {instaImg.map((item, index) => (
              <img key={index} src={item} className="instagram-image" alt={`Instagram ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright">© 2023 Teknolojik Yemekler.</span>
      </div>
    </div>
  );
}

export default Footer;
