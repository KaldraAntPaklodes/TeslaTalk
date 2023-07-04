import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../routes/const";
import { checkUserCredentials } from "../utils/user";

const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  handleLogin: () => null,
  handleLogout: () => null,
  handleRegister: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null | {email: "test", password: "asd123"}
  const isLoggedIn = !!user; // null | {email: "test", password: "asd123"}
  const navigate = useNavigate();
  // !!null => false
  // !!{email: "test", password: "asd123"} => true

  const handleLogin = (user, setError) => {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((response) => {
        const existingUser = checkUserCredentials(response, user);
        if (existingUser) {
          setUser(existingUser);
        } else {
          setError("User email or password is incorrect.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    setUser(null);
    navigate(LOGIN_ROUTE);
  };

  const handleRegister = (newUser) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then(() => {
        navigate(LOGIN_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };