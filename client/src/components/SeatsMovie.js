// import { Link } from "react-router-dom";
// import React, { Component } from "react";

// export default class SeatsMovie extends Component {
//   constructor() {
//     super();
//     this.state = {
//       seat: [
//         "Front1",
//         "Front2",
//         "Front3",
//         "Middle1",
//         "Middle2",
//         "Middle3",
//         "Back1",
//         "Back2",
//         "Back3",
//       ],
//       seatAvailable: [
//         "Front1",
//         "Front2",
//         "Front3",
//         "Middle1",
//         "Middle2",
//         "Middle3",
//         "Back1",
//         "Back2",
//         "Back3",
//       ],
//       seatReserved: [],
//     };
//   }

//   onClickData(seat) {
//     if (this.state.seatReserved.indexOf(seat) > -1) {
//       this.setState({
//         seatAvailable: this.state.seatAvailable.concat(seat),
//         seatReserved: this.state.seatReserved.filter((res) => res !== seat),
//       });
//     } else {
//       this.setState({
//         seatReserved: this.state.seatReserved.concat(seat),
//         seatAvailable: this.state.seatAvailable.filter((res) => res !== seat),
//       });
//     }
//   }
//   render() {
//     return (
//       <div className="seats">
//         <h3 className="titleMv">Choose Seats</h3>
//         <DrawGrid
//           seat={this.state.seat}
//           available={this.state.seatAvailable}
//           reserved={this.state.seatReserved}
//           onClickData={this.onClickData.bind(this)}
//         />
//       </div>
//     );
//   }
// }

// class DrawGrid extends React.Component {
//   render() {
//     return (
//       <div className="containerSeats">
//         <table className="grid">
//           <tbody>
//             <tr>
//               {this.props.seat.map((row) => (
//                 <td
//                   className={
//                     this.props.reserved.indexOf(row) > -1
//                       ? "reserved"
//                       : "available"
//                   }
//                   key={row}
//                   onClick={(e) => this.onClickSeat(row)}
//                 >
//                   {row}{" "}
//                 </td>
//               ))}
//             </tr>
//           </tbody>
//         </table>

//         {/* <AvailableList available={this.props.available} /> */}
//         <ReservedList reserved={this.props.reserved} />
//       </div>
//     );
//   }

//   onClickSeat(seat) {
//     this.props.onClickData(seat);
//   }
// }

// // class AvailableList extends React.Component {
// //   render() {
// //     const seatCount = this.props.available.length;
// //     return (
// //       <div className="left">
// //         <h4 className="avaibleSeats">
// //           Available Seats: ({seatCount === 0 ? "No seats available" : seatCount}
// //           )
// //         </h4>
// //         <ul>
// //           {this.props.available.map((res) => (
// //             <li key={res}>{res}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   }
// // }

// class ReservedList extends React.Component {
//   render() {
//     return (
//       <div className="right">
//         <h4 className="reservedSeats">
//           Reserved Seats: ({this.props.reserved.length})
//         </h4>
//         <ul>
//           {this.props.reserved.map((res) => (
//             <li key={res}>{res}</li>
//           ))}
//         </ul>
//         <Link to="/BookMovie">
//           <button type="button" className="bookMV">
//             Booking
//           </button>
//         </Link>
//       </div>
//     );
//   }
// }

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postbooking } from "../slices/bookSlice";
import { getSeats, updateSeats } from "../slices/seatsSlice";
import { loadUserInfo } from "../slices/userSlice";
import { useNavigate, Outlet } from "react-router-dom";

const SeatsMovie = () => {
  const navigate = useNavigate();
  const { seatsList, loading, errors } = useSelector((state) => state.seats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeats());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { userInfo } = useSelector((state) => state.user);
  const handleRegister = (e, seats) => {
    e.preventDefault();
    const mv = JSON.parse(localStorage.getItem("movie"));
    console.log(mv.title, seats._id, userInfo.name);

    dispatch(
      Postbooking({
        Username: userInfo.name,
        email: userInfo.email,
        movie: mv.title,
        seats: seats._id,
      })
    );
    dispatch(updateSeats({ _id: seats._id }));
    navigate("/PaymentMovie");
  };
  return (
    <div className="seatsBox">
      {/* {loading && <p>loading ...</p>}
      {errors && <p>{errors}</p>} */}
      {seatsList &&
        seatsList.map((seats) => (
          <div key={seats._id} className="seatsBorder">
            <h3>{seats.name}</h3>
            {!seats.seatAvailable ? (
              <div>
                <h3 style={{ color: "#D82148", fontFamily: "'Amiri', serif" }}>
                  not availble
                </h3>{" "}
              </div>
            ) : (
              <h3>available</h3>
            )}
            <button className="btnGoBack" onClick={(e) => handleRegister(e, seats)}>booking</button>
            <br /> <br />
          </div>
        ))}
      <br />
      <button onClick={() => navigate(-1)} className="Btn">go back</button>
      <Outlet />
    </div>
  );
};

export default SeatsMovie;
