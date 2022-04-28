import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import booking from './booking.png';

import "../pages/pages.css";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { errors: userErrors } = useSelector((state) => state.user);
  const userInfo = (data) => {
    dispatch(registerUser({ data, navigate }));
  };
  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src={booking}
                        style={{ width: "80px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Login to your account</h4>
                    </div>

                    <form
                      className="loginTtitle"
                      onSubmit={handleSubmit(userInfo)}
                    >
                      <label className="form-label" for="form2Example11">
                        name
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="name"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Enter your name"
                          {...register("name", {
                            required: true,
                          })}
                        />
                        {errors.name?.message}
                      </div>
                      <label className="form-label" for="form2Example11">
                        Username
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Enter your email address"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "invalid email",
                            },
                          })}
                        />
                        {errors.email?.message}
                      </div>
                      <label className="form-label" for="form2Example22">
                        Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Enter your Password"
                          {...register("password", {
                            required: true,
                            minLength: {
                              value: 6,
                              message:
                                "password should be at least 6 characters",
                            },
                          })}
                        />
                        {errors.password?.message}
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                          value="Register"
                        >
                          Register
                        </button>
                        <h3>{userErrors && userErrors}</h3>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 backgLogin ">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4"></h4>
                    <p className="small mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
