import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name, lastName, email, password === "")) {
      const notify = () => {
        toast.error("All fields must be filled in to register", {
          position: "top-center",
          autoClose: 2000,
          draggable: true,
          closeOnClick: true,
          pauseOnHover: false,
        });
      };
      notify();
    } else {
      const notify = () => {
        toast.success("was added successfully", {
          position: "bottom-center",
          autoClose: 1800,
          draggable: true,
          closeOnClick: true,
          pauseOnHover: false,
        });
      };
      notify();

      setTimeout(() => {
        axios.post(
          "https://658156403dfdd1b11c42ff04.mockapi.io/React_Crud_Operation",
          { name, lastName, email, password }
        );
        e.preventDefault();

        navigate("/read");
      }, 2500);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="form-container px-10 ">
        <h1 className="font-sans font-semibold text-2xl  mt-2.5 ">Create</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control w-75"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Lastname</label>
            <input
              type="text"
              className="form-control w-75"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control w-75"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control w-75"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">Submit</button>
          <Link to={"/read"}>
            <button className="btn btn-primary ml-2">View</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Create;
