import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "../../components/Button/Button";

const Profile = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <div>
      {Object.entries(user).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Profile;