import { foods } from "../components/fakeData";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  FormText,
  ButtonGroup,
  Button,
  Card,
  CardTitle,
  CardBody,
  Container,
} from "reactstrap";
import axios from "axios";
import OrderFormHeader from "./OrderFormHeader";
import Footer from "./Footer";
import "./OrderForm.css";

// Başlangıç sipariş verisi
const initialOrder = {
  foodName: foods.name,
  size: "",
  crust: "",
  topping: [],
  note: "",
  personName: "",
  quantity: 1,
  toppingPrice: 0,
  totalPrice: foods.price,
};

function OrderForm({ onSubmit }) {
  const [orderData, setOrderData] = useState(initialOrder);
  const [totalPrice, setTotalPrice] = useState(foods.price);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  // Değişiklikleri yönetme
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedToppings = checked
        ? [...orderData.topping, value]
        : orderData.topping.filter((topping) => topping !== value);

      setOrderData({ ...orderData, topping: updatedToppings });
    } else {
      setOrderData({ ...orderData, [name]: value });
    }
  }


  // Adet değişim fonksiyonu
  function handleChangeQuantity(change) {
    setOrderData((prevData) => {
      const newQuantity =
        change === "increment"
          ? Math.min(prevData.quantity + 1, 10) // Maksimum 10
          : Math.max(prevData.quantity - 1, 1); // Minimum 1

      return { ...prevData, quantity: newQuantity };
    });
  }

  // Form geçerliliğini kontrol etme
  function validateForm() {
    const isNameValid = orderData.personName.length >= 3;
    const isSizeSelected = orderData.size !== "";
    const isCrustSelected = orderData.crust !== "";
    const isToppingsValid =
      orderData.topping.length >= 4 && orderData.topping.length <= 10;

    setIsFormValid(
      isNameValid && isSizeSelected && isCrustSelected && isToppingsValid
    );
  }

  // Sipariş gönderme
  async function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) return;

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData
      );
      console.log("Sipariş Özeti:", response.data);
      onSubmit(response.data);
    } catch (error) {
      console.error("Sipariş gönderimi başarısız:", error);
    }
  }

    // Formu güncelleme
    useEffect(() => {
      calculatePrice(orderData.topping.length, orderData.quantity);
    }, [orderData.topping, orderData.quantity]);
  
    useEffect(() => {
      validateForm();
    }, [orderData.personName, orderData.size, orderData.crust, orderData.topping]);

  // Fiyat hesaplama
  function calculatePrice(toppingCount, quantity) {
    const calculatedToppingPrice =
      toppingCount * foods.additional_toppings.price_per_topping;
    const calculatedTotalPrice =
      quantity * foods.price + calculatedToppingPrice;

    setToppingPrice(calculatedToppingPrice);
    setTotalPrice(calculatedTotalPrice);

    setOrderData((prevData) => ({
      ...prevData,
      toppingPrice: calculatedToppingPrice,
      totalPrice: calculatedTotalPrice,
    }));
  }

  return (
    <>
      <OrderFormHeader />
      <Container className="order-container">
        <Form onSubmit={handleSubmit}>
          {/* Title */}
          <Label className="food-name" name="foodName" value={foods.name}>
            {foods.name}
          </Label>

          {/* Price and Ratings */}
          <Row style={{ alignItems: "center" }}>
            <Col md={6}>
              <Label className="price">{foods.price}₺</Label>
            </Col>
            <Col md={6} style={{ textAlign: "right" }}>
              <FormText className="rating-text rating-text-margin">
                ⭐ {foods.rating}
              </FormText>
              <FormText className="rating-text">
                ({foods.reviews})
              </FormText>
            </Col>
          </Row>

          {/* Description */}
          <p className="description">{foods.description}</p>

          {/* Size and Crust Selection */}
          <Row>
            <Col md={6}>
              <FormGroup tag="fieldset">
                <Label className="section-label">Boyut Seç *</Label>
                {foods.size_options.map((size) => (
                  <FormGroup key={size} check>
                    <Input
                      name="size"
                      type="radio"
                      value={size}
                      checked={orderData.size === size}
                      onChange={handleChange}
                    />{" "}
                    <Label check>{size}</Label>
                  </FormGroup>
                ))}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className="section-label">Hamur Seç *</Label>
                <Input
                  name="crust"
                  type="select"
                  value={orderData.crust}
                  onChange={handleChange}
                >
                  <option value="">--Hamur Kalınlığı--</option>
                  {foods.crust_options.map((crust) => (
                    <option key={crust} value={crust}>
                      {crust}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          {/* Toppings */}
          <FormGroup style={{ marginTop: "2rem" }}>
            <Label className="section-label">Ek Malzemeler</Label>
            <FormText style={{ display: "block", marginBottom: "1rem" }}>
              En fazla {foods.additional_toppings.max_toppings} malzeme
              seçebilirsiniz. Her biri{" "}
              {foods.additional_toppings.price_per_topping}₺.
            </FormText>
            <Row>
              {foods.additional_toppings.options.map((topping) => (
                <Col md={4} key={topping} style={{ marginBottom: "1rem" }}>
                  <FormGroup check>
                    <Input
                      type="checkbox"
                      value={topping}
                      name="topping"
                      onChange={handleChange}
                    />{" "}
                    <Label check>{topping}</Label>
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </FormGroup>

          {/* Customer Info */}
          <FormGroup style={{ marginTop: "2rem" }}>
            <Label className="section-label">İsim Soyisim</Label>
            <Input
              type="text"
              name="personName"
              value={orderData.personName}
              onChange={handleChange}
              placeholder="İsim Soyisim Giriniz!"
            />
          </FormGroup>

          {/* Order Note */}
          <FormGroup style={{ marginTop: "2rem" }}>
            <Label className="section-label">Sipariş Notu</Label>
            <Input
              type="textarea"
              name="note"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={orderData.note}
              onChange={handleChange}
            />
          </FormGroup>

          <Row style={{ margin: "2rem 0" }}>
            {/* Quantity */}
            <Col md={4} className="quantity-button-group">
              <ButtonGroup style={{ marginBottom: "2rem" }}>
                <Button
                  className="quantity-btn"
                  onClick={() => handleChangeQuantity("decrement")}
                >
                  -
                </Button>
                <Input
                  type="text"
                  name="quantity"
                  value={orderData.quantity}
                  className="quantity-input"
                  onChange={handleChange}
                />
                <Button
                  className="quantity-btn"
                  onClick={() => handleChangeQuantity("increment")}
                >
                  +
                </Button>
              </ButtonGroup>
            </Col>

            {/* Order Summary */}
            <Col md={8}>
              <Card className="order-summary-card">
                <CardBody>
                  <CardTitle className="order-summary-title">
                    Sipariş Toplamı
                  </CardTitle>
                  <div style={{ marginBottom: "1rem" }}>
                    <div className="summary-row">
                      <span className="summary-text">Seçimler</span>
                      <span className="summary-text" value={orderData.toppingPrice}>
                        {toppingPrice}₺
                      </span>
                    </div>
                    <div className="summary-row">
                      <span className="total-amount">Toplam</span>
                      <span className="total-amount" value={orderData.totalPrice}>
                        {totalPrice}₺
                      </span>
                    </div>
                  </div>
                  <Button
                    className="order-button"
                    type="submit"
                    disabled={!isFormValid}
                  >
                    SİPARİŞ VER
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default OrderForm;
