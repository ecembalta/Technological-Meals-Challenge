import React, { useState } from "react";
import OrderForm from "../components/OrderForm";
import Success from "../components/Success";

function Order() {
  const [orderData, setOrderData] = useState(null);
  return (
    <div>
      {!orderData ? (
        <OrderForm onSubmit={(data) => setOrderData(data)} />
      ) : (
        <Success orderData={orderData} />
      )}
    </div>
  );
}

export default Order;
