import Topbar from "../components/Topbar/Topbar";
import './LayoutsGreeting.css'

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <h4>Welcome to TeslaTalk, the hub for Tesla enthusiasts!</h4>
      <div className="authenticated-container">{children}</div>
    </>
  );
};

export default AuthenticatedLayout;