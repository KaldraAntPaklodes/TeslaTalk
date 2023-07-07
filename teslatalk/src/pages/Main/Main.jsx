import { TOPICS_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <h1>Main Page</h1>

      <Link to={TOPICS_ROUTE}>See Topics</Link>
      
    </div>
  );
};

export default MainPage;
