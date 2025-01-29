import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import { Label } from "reactstrap";
import Footer from "./Footer";
import "./Success.css";

function Success({ orderData }) {
  console.log(orderData);
  return (
    <>
      <div className="container-home">
        <img src={logo} alt="Logo" className="home-logo" />
        <span className="success-greeting">
          {orderData.personName} lezzetin yolda!
        </span>
        <h1 className="success-title">SİPARİŞ ALINDI!</h1>

        <Label className="food-name-label">{orderData.foodName}</Label>
        <div className="order-summary">
          <Label className="order-detail-label">
            Boyut: <span className="order-detail-value">{orderData.size}</span>
          </Label>
          <Label className="order-detail-label">
            Hamur: <span className="order-detail-value">{orderData.crust}</span>
          </Label>
          <Label className="order-detail-label">
            Ek Malzemeler:{" "}
            {orderData.topping.map((item, index) => (
              <span key={item} className="order-detail-value">
                {item}
                {index !== orderData.topping.length - 1 && ", "}
              </span>
            ))}
          </Label>
          <Label className="order-detail-label">
            Sipariş Adedi:{" "}
            <span className="order-detail-value">{orderData.quantity}</span>
          </Label>
          <Label className="order-detail-label">
            Notunuz: <span className="order-detail-value">{orderData.note}</span>
          </Label>
        </div>

        <div className="order-total-container">
          <span className="order-total-title">Sipariş Toplamı</span>
          <div className="order-total-content">
            <div className="order-total-row">
              <span>Seçimler</span>
              <span>{orderData.toppingPrice}₺</span>
            </div>
            <div className="order-total-row">
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
