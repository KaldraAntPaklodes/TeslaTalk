import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../routes/const";
import "./LoginJoinButton.css";

const LoginJoinButton = () => {
  return (
    <div className="login-join-button">
      <Link to={LOGIN_ROUTE} className="login-button">Login</Link>
      <Link to={REGISTER_ROUTE} className="join-button">Register</Link>
    </div>
  );
};

export default LoginJoinButton;