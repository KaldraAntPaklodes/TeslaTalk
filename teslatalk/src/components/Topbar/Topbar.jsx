import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { MAIN_ROUTE, PROFILE_ROUTE } from "../../routes/const";
import { showUserFullName } from "../../utils/user";
import { FaUserCircle } from "react-icons/fa";
import "./Topbar.css";
import LoginJoinButton from "../LoginJoinButton/LoginJoinButton";
import logoWithoutText from "../../images/logoWithoutText.png"

const Topbar = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  const userInfo = isLoggedIn ? (
    <div>
      <FaUserCircle /> {showUserFullName(user)}
    </div>
  ) : (
    <LoginJoinButton />
  );

  return (
    <nav className="navigation">
      <Link to={MAIN_ROUTE}><img className="logoImg" src={logoWithoutText} alt="logo" /></Link>
      <Link to={PROFILE_ROUTE} className="user-container">
        {userInfo}
      </Link>
    </nav>
  );
};

export default Topbar;
