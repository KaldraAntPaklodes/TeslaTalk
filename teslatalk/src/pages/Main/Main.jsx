import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import TopicCreationBox from "../../components/TopicCreationBox/TopicCreationBox";

const MainPage = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="mainPageContainer">
      <h1>Main Page</h1>

      {isLoggedIn && <TopicCreationBox />}
    </div>
  );
};

export default MainPage;