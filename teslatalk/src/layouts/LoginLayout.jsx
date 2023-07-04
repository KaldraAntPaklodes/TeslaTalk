import Topbar from "../components/Topbar/Topbar";
import './LayoutsGreeting.css'

const LoginLayout = ({ children }) => {
  return (
    <div className="login-container">
      <Topbar />
      <h4>Welcome to TeslaTalk, the hub for  enthusiasts!</h4>
      {children}
    </div>
  );
};

export default LoginLayout;