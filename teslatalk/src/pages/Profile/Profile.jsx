import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "../../components/Button/Button";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <div className="profileContainer">
      <h2 className="profileHeading">Profile</h2>
      <div className="profileInfo">
        {Object.entries(user).map(([key, value]) => (
          <div key={key} className="profileField">
            <span className="profileFieldKey">{key}:</span> {value}
          </div>
        ))}
      </div>
      <Button onClick={handleLogout} className="logoutButton">
        Logout
      </Button>
    </div>
  );
};

export default Profile;
