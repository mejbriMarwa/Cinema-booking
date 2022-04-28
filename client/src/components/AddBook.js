// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Postbooking } from "../slices/bookSlice";
// import ModalMovie from "./ModalMovies";
// import Form from "react-bootstrap/Form";
// import { getMovie } from "../slices/movieSlice";
// import { useForm } from "react-hook-form";
// // import Select from "react-select";
// const AddBook = () => {
//   const dispatch = useDispatch();
//   const [input, setInput] = useState({});
//   const [seats, setSeats] = useState();
//   const [movieName, setMovieName] = useState("");
//   const { movieList } = useSelector((state) => state.movie);
//   useEffect(() => {
//     dispatch(getMovie());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(Postbooking(input));
//   };
  
//   return (
//     <div className="containerBook">
//       <form>
//         <div className="inputBox">
//           <span>Username</span>
//           <div className="box">
//             <div className="icon">
//               <ion-icon name="person"></ion-icon>
//             </div>
//             <input
//               type="text"
//               name="Username"
//               onChange={handleChange}
//               placeholder="Username"
//             />
//           </div>
//         </div>

//         <div className="inputBox">
//           <span>Email</span>
//           <div className="box">
//             <div className="icon">
//               <ion-icon name="lock-closed"></ion-icon>
//             </div>
//             <input
//               type="text"
//               name="email"
//               onChange={handleChange}
//               placeholder="Email"
//             />
//           </div>
//         </div>

//         <div className="inputBox">
//           <span>Movie</span>
//           <div className="box">
//             <div className="icon">
//               <ion-icon name="lock-closed"></ion-icon>
//             </div>

//             <Form.Control
//               as="select"
//               value={movieName}
//               onChange={(e) => setMovieName(e.target.value)}
//               aria-label="Default select example"
//               className="formSelect"
//             >
//               <option>List Of Movie</option>
//               {movieList &&
//                 movieList.map((movie) => (
//                   <>
//                     <option key={movie._id}>{movie.title}</option>
//                   </>
//                 ))}
//             </Form.Control>
//           </div>
//         </div>
//         <div className="inputBox">
//           <span>Seats</span>
//           <div className="box">
//             <div className="icon">
//               <ion-icon name="lock-closed"></ion-icon>
//             </div>
//             <Form.Select
//               value={seats}
//               onChange={(e) => setSeats(e.target.value)}
//               aria-label="Default select example"
//               className="formSelect"
//             >
//               <option>List Of Seats</option>
//               <option value="Front1">Front1</option>
//               <option value="Front2">Front2</option>
//               <option value="Front3">Front3</option>
//               <option value="Middle1">Middle1</option>
//               <option value="Middle2">Middle2</option>
//               <option value="Middle3">Middle3</option>
//               <option value="Back1">Back1</option>
//               <option value="Back2">Back2</option>
//               <option value="Back3">Back3</option>
//             </Form.Select>
//           </div>
//         </div>
//         <div className="inputBox">
//           <div className="box">
//             <input type="submit" value="booking " onClick={handleSubmit} />
//           </div>
//           <br />
//           <ModalMovie />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBook;
