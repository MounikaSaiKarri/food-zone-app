import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

function Login() {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // ✅ If already logged in redirect to home
  useEffect(() => {

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser) {
      navigate("/home");
    }

  }, [navigate]);


  const loginLogics = (loginData) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

  // check if user exists
  const existingUser = users.find(
  user => user.email === loginData.email
);

if(!existingUser){
  alert("You are not registered. Please register first.");
  navigate("/register");
  return;
}

  const validUser = users.find(
    (user) =>
      user.email === loginData.email &&
      user.password === loginData.password
  );

  if (validUser) {

    localStorage.setItem("loggedUser", JSON.stringify(validUser));

    alert(`Welcome ${validUser.fullname} 👋`);

    reset();

    navigate("/home");

  } else {

    alert("Invalid Password ❌");

  };

  };

  return (

    <div className="login-container">

      <div className="login-box">

        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit(loginLogics)}>

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="form-control mb-3"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="form-control mb-3"
          />

          <button type="submit" className="btn btn-warning w-100">
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;