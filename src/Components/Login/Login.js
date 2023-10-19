import React, { useState } from "react";
import "./Login.css";
import khelo from "../../Assets/Images/khelo.png";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { httpPost } from "../../utils/Http";
// import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleApi = () => {
    // console.log({ email, password });
    // axios
    //   .post("https://client-rest-api.vercel.app/v1/user/login", {
    //     username: email,
    //     password: password,
    //   })

    httpPost("/user/login", {
      username: email,
      password: password,
    })
      .then((res) => {
        console.log(res);

        // localStorage.setItem("username", JSON.stringify(email));
        // localStorage.setItem("password", JSON.stringify(password));
        localStorage.setItem("token", JSON.stringify(res.token));
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="login-main">
      <div className="login-div">
        <img src={khelo} alt="" className="khelo-logo" />
        <div className="input-div">
          <BiSolidUser style={{ color: "#7875B5", marginRight: "10px" }} />
          <input
            type="email"
            placeholder="Enter User ID....."
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-div">
          <RiLockPasswordFill
            style={{ color: "#7875B5", marginRight: "10px" }}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" onClick={handleApi}>
          LOG IN NOW
          <FaGreaterThan style={{ color: "#7875B5", marginLeft: "6rem" }} />
        </button>
        <span className="login-note">
          Note - This Website is not for Indian Territory.
        </span>
      </div>
    </div>
  );
};

export default Login;
