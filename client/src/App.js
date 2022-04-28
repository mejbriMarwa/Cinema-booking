import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoviesLists from "./pages/MoviesLists";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ListsMv from "./pages/ListsMv";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";
import BookMovie from "./components/BookMovie";
import PaymentMovie from "./components/PaymentMovie";
import SeatsMovie from "./components/SeatsMovie";
import HomePage from "./pages/HomePage";
import PostMovie from "./components/PostMovie";
import Dashboard from "./pages/Dashboard";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import AddPayment from "./components/AddPayment";
import ActionProvider from "./pages/ActionProvider";
import MessageParser from "./pages/MessageParser";
import Config from "./pages/Config";
import AddDeleteMovieModal from "./components/AddDeleteMovieModal";
import FeedBack from "./pages/FeedBack";
import ModalMovies from "./components/ModalMovies";
import ProgramMovies from "./pages/ProgramMovies";
// import AddMovieList from "./pages/AddMovieList";
import MyReservation from "./pages/MyReservation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/postMovie" element={<PostMovie />} />
          <Route path="/actionProvider" element={<ActionProvider />} />
          <Route path="/messageParser" element={<MessageParser />} />
          <Route path="/config" element={<Config />} />
        </Route>
        <Route path="/feedBack" element={<FeedBack />} />
        <Route path="/programMovies" element={<ProgramMovies />} />
        <Route path="/modalMovies" element={<ModalMovies />} />
        <Route path="/moviesLists" element={<MoviesLists />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ListsMv" element={<ListsMv />} />
        <Route path="/addDeleteMovieModal" element={<AddDeleteMovieModal />} />
        <Route path="/myReservation" element={<MyReservation />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookMovie" element={<BookMovie />} />
          <Route path="/paymentMovie" element={<PaymentMovie />} />
          <Route path="/addPayment" element={<AddPayment />} />
          <Route path="/seatsMovie" element={<SeatsMovie />} />
          <Route path="/listsMv" element={<ListsMv />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/updateBook" element={<UpdateBook />} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
