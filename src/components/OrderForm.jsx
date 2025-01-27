import { Container } from "@mui/material";
import { foods } from "../components/fakeData";
import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

function OrderForm() {
  return (
    <Container maxWidth="sm" className="order-container">
      <Form>
        <h3>{foods.pizza.name}</h3>
        <div className="order-info">
          <h2>{foods.pizza.price}₺</h2>
          <div className="order-info-rating">
            <h6>{foods.pizza.rating}</h6>
            <h6>({foods.pizza.reviews})</h6>
          </div>
        </div>
        <p className="order-info-rating">{foods.pizza.description}</p>
        <div>
          <FormGroup tag="fieldset">
            <legend>Boyut Seç *</legend>
            {foods.pizza.size_options.map((size) => (
              <FormGroup key={size} check>
                <Input name="radio1" type="radio" /> <Label check>{size}</Label>
              </FormGroup>
            ))}
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Hamur Seç *</Label>
            <Input id="exampleSelect" name="select" type="select">
              {foods.pizza.crust_options.map((crust) => (
                <option key={crust}>{crust}</option>
              ))}
            </Input>
          </FormGroup>
        </div>
      </Form>
    </Container>
  );
}

export default OrderForm;
