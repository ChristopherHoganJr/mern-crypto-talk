import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const UserInfoChange = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const LoginHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users/login",
        {
          email: userInfo.email,
          password: userInfo.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.msg === "success!") navigate("/loggedin");
        else {
          setErrors(res.data.msg);
        }
      });
  };
  return (
    <section className="border border-1 border-black p-3">
      <form
        onSubmit={LoginHandler}
        className="flex flex-col justify-center items-center gap-3"
      >
        <p className="w-full max-w-md">
          Email{" "}
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={(e) => UserInfoChange(e)}
            className="border border-black p-2"
          />
        </p>
        <p className="w-full max-w-md">
          Password{" "}
          <input
            name="password"
            type="text"
            value={userInfo.password}
            onChange={(e) => UserInfoChange(e)}
            className="border border-black p-2 "
          />
        </p>
        <button type="submit" className="border border-black p-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Login;
