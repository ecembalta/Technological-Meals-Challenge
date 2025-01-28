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
import Header from "./Header";
import Footer from "./Footer";

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

  // Formu güncelleme
  useEffect(() => {
    calculatePrice(orderData.topping.length, orderData.quantity);
    validateForm();
  }, [orderData.topping, orderData.quantity]);

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
      <Header />
      <Container className="order-container">
        <Form onSubmit={handleSubmit}>
          {/* Başlık */}
          <Label
            style={{ fontWeight: "600", fontSize: "22px", display: "block" }}
            name="foodName"
            value={foods.name}
          >
            {foods.name}
          </Label>

          {/* Fiyat ve Puanlar */}
          <Row style={{ alignItems: "center" }}>
            <Col md={6}>
              <Label style={{ fontWeight: "700", fontSize: "28px" }}>
                {foods.price}₺
              </Label>
            </Col>
            <Col md={6} style={{ textAlign: "right" }}>
              <FormText
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#5F5F5F",
                  marginRight: "1rem",
                }}
              >
                ⭐ {foods.rating}
              </FormText>
              <FormText
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#5F5F5F",
                }}
              >
                ({foods.reviews})
              </FormText>
            </Col>
          </Row>

          {/* Açıklama */}
          <p
            style={{
              fontSize: "14px",
              color: "#5F5F5F",
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            {foods.description}
          </p>

          {/* Boyut ve Hamur Seçimi */}
          <Row>
            <Col md={6}>
              <FormGroup tag="fieldset">
                <Label style={{ fontWeight: "600" }}>Boyut Seç *</Label>
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
                <Label style={{ fontWeight: "600" }}>Hamur Seç *</Label>
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

          {/* Ek Malzemeler */}
          <FormGroup style={{ marginTop: "2rem" }}>
            <Label style={{ fontWeight: "600" }}>Ek Malzemeler</Label>
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

          {/* Müşteri Bilgileri */}
          <FormGroup style={{ marginTop: "2rem" }}>
            <Label style={{ fontWeight: "600", marginBottom: "1rem" }}>
              İsim Soyisim
            </Label>
            <Input
              type="text"
              name="personName"
              value={orderData.personName}
              onChange={handleChange}
              placeholder="İsim Soyisim Giriniz!"
            />
          </FormGroup>

          {/* Sipariş Notu */}
          <FormGroup style={{ marginTop: "2rem" }}>
            <Label style={{ fontWeight: "600", marginBottom: "1rem" }}>
              Sipariş Notu
            </Label>
            <Input
              type="textarea"
              name="note"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={orderData.note}
              onChange={handleChange}
            />
          </FormGroup>

          <Row style={{ margin: "2rem 0" }}>
            {/* Sipariş Adedi */}
            <Col md={4} className="quantity-button-group">
              <ButtonGroup style={{ marginBottom: "2rem" }}>
                <Button
                  style={{
                    backgroundColor: "#fdc913",
                    width: "3rem",
                    height: "3rem",
                    color: "black",
                  }}
                  onClick={() => handleChangeQuantity("decrement")}
                >
                  -
                </Button>
                <Input
                  type="text"
                  name="quantity"
                  value={orderData.quantity}
                  style={{ width: "3rem", height: "3rem", textAlign: "center" }}
                  onChange={handleChange}
                />
                <Button
                  style={{
                    backgroundColor: "#fdc913",
                    width: "3rem",
                    height: "3rem",
                    color: "black",
                  }}
                  onClick={() => handleChangeQuantity("increment")}
                >
                  +
                </Button>
              </ButtonGroup>
            </Col>

            {/* Sipariş Toplamı */}
            <Col md={8}>
              <Card style={{ borderRadius: "8px", padding: "1rem" }}>
                <CardBody>
                  <CardTitle
                    style={{ fontWeight: "600", marginBottom: "1rem" }}
                  >
                    Sipariş Toplamı
                  </CardTitle>
                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "16px",
                        color: "#5F5F5F",
                      }}
                    >
                      <span>Seçimler</span>
                      <span value={orderData.toppingPrice}>
                        {toppingPrice}₺
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "red",
                      }}
                    >
                      <span>Toplam</span>
                      <span value={orderData.totalPrice}>{totalPrice}₺</span>
                    </div>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "#fdc913",
                      color: "black",
                      width: "100%",
                      fontWeight: "600",
                      padding: "0.8rem",
                      border: "none",
                      borderRadius: "4px",
                    }}
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
