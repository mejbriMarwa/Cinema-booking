import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PaymentMovie = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "5",
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      })
      .render("#paypal-button");
  }, []);

  return (
    <>
     <div id="paypal-button">
      <h1>Payment</h1>
    </div>
     <button class="btnPayment" onClick={() => navigate("/MyReservation")}>Your Reservation</button>
      <Outlet />
    </>
   
  );
};

export default PaymentMovie;

