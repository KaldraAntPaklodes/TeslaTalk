import { useNavigate, generatePath, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import { deleteTopic } from "../../api/topics";
import { TOPICS_ROUTE, EDIT_TOPIC_ROUTE } from "../../routes/const";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const TopicActions = ({ id }) => {

  const {isLoggedIn} = useContext(UserContext)

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteTopic(id)
      .then(() => {
        navigate(TOPICS_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = () => {
    const path = generatePath(EDIT_TOPIC_ROUTE, { id });
    navigate(path);
  };

  if(!isLoggedIn){
    return(
      <Link to={TOPICS_ROUTE}><Button>Back to Topics</Button></Link>
    )
  }

  return (
    <div className="projectActions">
      <Button variant="outlined" onClick={handleEdit}>
        Edit Topic
      </Button>
      <Button color="error" onClick={handleDelete}>
        Delete Topic
      </Button>
      <Link to={TOPICS_ROUTE}><Button>Back to Topics</Button></Link>
    </div>
  );
};

TopicActions.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TopicActions;
