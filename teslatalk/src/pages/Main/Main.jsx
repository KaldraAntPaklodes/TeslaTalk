import { TOPICS_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";
import "./Main.css";

const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <h1 className="mainPageTitle">Main Page</h1>

      <Link to={TOPICS_ROUTE} className="topicsLink">See Topics</Link>
    </div>
  );
};

export default MainPage;
