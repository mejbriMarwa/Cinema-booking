import { useEffect } from "react";
import "../pages/pages.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import booking from './booking.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    errors: userErrors,
    isAuth,
    role,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth && role === "user") Navigate("/Profile");
    else if (isAuth && role === "admin") Navigate("/dashboard");
  }, []);
  const {
    register: loginInfo,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userInfo = (data) => {
    dispatch(loginUser({ data, navigate }));
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
                        Username
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Enter your email address"
                          {...loginInfo("email", {
                            required: true,
                          })}
                        />
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
                          {...loginInfo("password", {
                            required: true,
                          })}
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Log in
                        </button>
                        <h3>{userErrors && userErrors}</h3>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/Register">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 backgLogin">
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

export default Login;
