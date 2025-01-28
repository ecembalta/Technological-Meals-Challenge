import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import { Label } from "reactstrap";
import Footer from "../components/Footer";
function Success({ orderData }) {
  console.log(orderData);
  return (
    <>
      <div className="container-home" style={{ backgroundColor: "#CE2829" }}>
        <img src={logo} alt="Logo" className="home-logo" />
        <span
          style={{
            fontFamily: "Satisfy",
            fontSize: "32px",
            color: "#FDC913",
            marginTop: "4rem",
          }}
        >
          {orderData.personName} lezzetin yolda!
        </span>
        <h1
          className="home-title"
          style={{
            marginTop: "1rem",
            borderBottom: "1px solid white",
            padding: "1rem",
          }}
        >
          SİPARİŞ ALINDI!
        </h1>

        <Label
          style={{
            fontWeight: "600",
            fontSize: "22px",
            display: "block",
            color: "white",
          }}
        >
          {orderData.foodName}
        </Label>
        <div className="order-summary">
          <Label
            style={{ fontWeight: "200", fontSize: "16px", color: "white" }}
          >
            Boyut: <span style={{ fontWeight: "600" }}>{orderData.size}</span>
          </Label>
          <Label
            style={{ fontWeight: "200", fontSize: "16px", color: "white" }}
          >
            Hamur: <span style={{ fontWeight: "600" }}>{orderData.crust}</span>
          </Label>
          <Label
            style={{ fontWeight: "200", fontSize: "16px", color: "white" }}
          >
            Ek Malzemeler:{" "}
            {orderData.topping.map((item, index) => (
              <span key={item} style={{ fontWeight: "600" }}>
                {item}
                {index !== orderData.topping.length - 1 && ", "}
              </span>
            ))}
          </Label>
          <Label
            style={{ fontWeight: "200", fontSize: "16px", color: "white" }}
          >
            Sipariş Adedi:{" "}
            <span style={{ fontWeight: "600" }}>{orderData.quantity}</span>
          </Label>
          <Label
            style={{ fontWeight: "200", fontSize: "16px", color: "white" }}
          >
            Notunuz: <span style={{ fontWeight: "600" }}>{orderData.note}</span>
          </Label>
        </div>

        <div
          style={{
            border: "1px solid white",
            padding: "2rem",
            width: "30%",
            borderRadius: ".5rem",
            color: "white",
          }}
        >
          <span style={{ fontWeight: "600" }}>Sipariş Toplamı</span>
          <div style={{ marginTop: "1rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span>Seçimler</span>
              <span>{orderData.toppingPrice}₺</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Toplam</span>
              <span>{orderData.totalPrice}₺</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
