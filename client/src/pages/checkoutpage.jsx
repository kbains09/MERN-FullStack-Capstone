import React from "react";
import Cart from "../components/Checkout/Cart/Cart";
import ShippingForm from "../components/Checkout/Shipping/Shipping";
import PaymentForm from "../components/Checkout/Payment/Payment";

function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <Cart />
      <ShippingForm />
      <PaymentForm />
    </div>
  );
}

export default CheckoutPage;