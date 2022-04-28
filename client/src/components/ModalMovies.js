import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowBooking, removeBooking } from "../slices/bookSlice";
// import UpdateBook from "./UpdateBook";
const ModalMovies = () => {
  const dispatch = useDispatch();
  const { BookList, pending, rejected } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(ShowBooking());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(removeBooking(id));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modalMv">
      <Button variant="" onClick={handleShow}>
        Your reservation information
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your reservation information</Modal.Title>
        </Modal.Header>
        {pending && <p>pending...</p>}
        {rejected && <p>{rejected}</p>}
        {BookList.map((book) => (
          <Modal.Body key={book._id}>
            <div>
              <h3 className="ModalShow"> {book.Username}</h3>
              <h3 className="ModalShow"> {book.email}</h3>
              <h3 className="ModalShow"> {book.movie}</h3>
              <h3 className="ModalShow"> {book.seats}</h3>
              <button
                className="ModalShowBtn"
                onClick={() => handleDelete(book._id)}
              >
                delete book
              </button>
            </div>
            {/* <UpdateBook bookId={book._id} /> */}
          </Modal.Body>
        ))}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/PaymentMovie">
            <button type="button" className="ModalShowBtn">
              {" "}
              Payment{" "}
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalMovies;
