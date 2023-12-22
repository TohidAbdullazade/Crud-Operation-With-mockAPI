import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditOutlined } from "@ant-design/icons";
import { UserDeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Read = () => {
  const [user, setUser] = useState([]);

  const getData = () => {
    axios
      .get("https://658156403dfdd1b11c42ff04.mockapi.io/React_Crud_Operation")
      .then((res) => {
        setUser(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = (id) => {
    if (id) {
      axios
        .delete(
          `https://658156403dfdd1b11c42ff04.mockapi.io/React_Crud_Operation/${id}`
        )
        .then(() => {
          getData();
        });
      const notify = () => {
        if (axios.put) {
          toast.error("was deleted", {
            position: "bottom-center",
            autoClose: 2000,
          });
        }
      };
      notify();
    }
  };

  const setToLocal = (id, name, lastName, email, password) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <>
      <ToastContainer />
      <table className="table px-5 w-75 mt-5">
        <thead>
          <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <Link to={"/update"}>
                  <Button
                    onClick={() =>
                      setToLocal(
                        data.id,
                        data.name,
                        data.lastName,
                        data.email,
                        data.password
                      )
                    }
                  >
                    <EditOutlined />
                  </Button>
                </Link>
              </td>
              <td>
                <Button onClick={() => deleteUser(data.id)}>
                  <UserDeleteOutlined />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-btn flex w-full justify-center mt-5 ">
        <Link to={"/"}>
          <button className=" bg-blue-700 rounded-md p-1  text-white">
            Create New User
          </button>
        </Link>
      </div>
    </>
  );
};

export default Read;
