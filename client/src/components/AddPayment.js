import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PaymentPost } from "../slices/paymentSlice";
import { useNavigate, Outlet } from "react-router-dom";

const AddPayment = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(PaymentPost(input));
    window.alert("Payment Success");
  };
  return (
    <div className="containerPay">
      <form>
        <div className="inputBox">
          <span>Username</span>
          <div className="box">
            <div className="icon">
              <ion-icon name="person"></ion-icon>
            </div>
            <input
              type="text"
              name="Username"
              onChange={handleChange}
              placeholder="Username"
            />
          </div>
        </div>
        <div className="inputBox">
          <span>Phone</span>
          <div className="box">
            <div className="icon">
              <ion-icon name="person"></ion-icon>
            </div>
            <input
              type="text"
              name="Phone"
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="inputBox">
          <span>Carte</span>
          <div className="box">
            <div className="icon">
              <ion-icon name="person"></ion-icon>
            </div>
            <input
              type="text"
              name="Carte"
              onChange={handleChange}
              placeholder="Carte"
            />
          </div>
          <div className="btninputBox">
            <div className="box">
              <input type="submit" value="payment " onClick={handleSubmit} />
              <br />
              <input
                className="Input2"
                type="submit"
                value="go back "
                onClick={() => navigate("/MoviesLists")}
              />
              <Outlet />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPayment;
