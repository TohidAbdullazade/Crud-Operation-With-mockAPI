import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateUsers = () => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  };

  useEffect(() => {
    updateUsers();
  }, []);

  const handleUpdate = (e) => {
    axios
      .put(
        `https://658156403dfdd1b11c42ff04.mockapi.io/React_Crud_Operation/${id}`,
        { name, lastName, email, password }
      )
      .then(() => {
        setTimeout(() => {
          navigate("/read");
        }, 2500);
      });
    const notify = () => {
      if (axios.put) {
        toast.success("was updated", {
          position: "bottom-center",
          autoClose: 2000,
        });
      }
    };
    notify();
    e.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <div className="form-container px-10 ">
        <h1 className="font-sans font-semibold text-2xl  mt-2.5 ">Update</h1>
        <form>
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
         
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
          <Link to={"/"}>
            
            <button className="btn btn-primary ml-1">Back</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Update;
