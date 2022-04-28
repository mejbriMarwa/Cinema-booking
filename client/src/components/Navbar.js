import React from "react";
import "../pages/main.css";
import "../pages/variable.css";
import "../pages/reset.css";
import "../pages/media_query.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../components/components.css";
import { logout } from "../slices/userSlice";
import { slide as Menu } from "react-burger-menu";
const Navbar = () => {
  const { isAuth, userInfo, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="headerNav">
      <div className="navbar">
        <a href="/" className="navbar-brand">
          <h4>
            <span>Cinema</span> Booking
          </h4>
        </a>

        <nav className="">
          <ul className="navbar-navHome">
            <li>
              <Link to="/" className="navbar-link">
                home
              </Link>
            </li>
            <li>
              <Link to="/ProgramMovies" className="navbar-link">
                ProgramMovies
              </Link>
            </li>
            {isAuth && role === "admin" ? (
              <>
                <li>
                  <Link to="/MoviesLists" className="navbar-link">
                    <span className="spanLink"> Movies</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Dashboard" className="navbar-link">
                    <span>ProgramMovies</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Profile" className="navbar-link">
                    <span>{userInfo.name}</span>
                  </Link>
                </li>
                <button
                  onClick={() => dispatch(logout())}
                  className="navbar-signin"
                >
                  logOut
                </button>
              </>
            ) : isAuth && role === "user" ? (
              <>
                <li>
                  <Link to="/MoviesLists" className="navbar-link">
                    <span className="spanLink">Movies</span>
                  </Link>
                  <Link to="/MyReservation" className="navbar-link">
                    <span className="spanLink">Reservation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Profile" className="navbar-link">
                    <span className="spanLink">{userInfo.name}</span>
                  </Link>
                </li>
                <button
                  onClick={() => dispatch(logout())}
                  className="navbar-signin"
                >
                  logOut
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="navbar-signin">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
