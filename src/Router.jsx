import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51QzeedITPesJjdSlea1w9hiNXfDUMIkZ7axidJZHRgO1qOZhau6fUjRi4UfuCqVmCWea6aZnRyv1JXKtBgFJhpNf00y3w66DKT"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/payment"
        element={
          <ProtectedRoute msg={"you must log in to pay"} redirect={"/payment"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg={"you must login to access your orders"}
            redirect={"/orders"}
          >
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing;
