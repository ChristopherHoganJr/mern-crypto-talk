import React, { useState, useContext } from "react";
import { UserContext } from "../components/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
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
        if (res.data.message === "success") {
          setUser(res.data.userId);
          navigate("/dashboard");
        } else {
          setErrors(res.data);
        }
      });
  };
  return (
    <section className=" p-3">
      <h1 className="text-center bg-slate-200 mt-5">Login To Your Account</h1>
      <form
        onSubmit={LoginHandler}
        className="flex flex-col justify-center items-center gap-5 my-5"
      >
        {errors.email_error ? <p>{errors.email_error}</p> : ""}
        <p className="w-full max-w-md text-center">
          Email{" "}
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={(e) => UserInfoChange(e)}
            className="border border-black p-2"
          />
        </p>
        {errors.password_error ? <p>{errors.password_error}</p> : ""}
        <p className="w-full max-w-md text-center">
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
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
