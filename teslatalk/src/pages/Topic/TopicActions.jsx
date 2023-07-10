import { useNavigate, generatePath, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import { deleteTopic } from "../../api/topics";
import { TOPICS_ROUTE, EDIT_TOPIC_ROUTE } from "../../routes/const";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const TopicActions = ({ topic }) => {
  const { isLoggedIn, user } = useContext(UserContext);
  const canManage = user?._id && topic.userId === user._id;

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteTopic(topic._id)
      .then(() => {
        navigate(TOPICS_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = () => {
    const path = generatePath(EDIT_TOPIC_ROUTE, { id: topic._id });
    navigate(path);
  };

  if (!isLoggedIn) {
    return (
      <Link to={TOPICS_ROUTE}>
        <Button>Back to Topics</Button>
      </Link>
    );
  }

  return (
    <div className="projectActions">
      {canManage && (
        <>
          <Button variant="outlined" onClick={handleEdit}>
            Edit Topic
          </Button>
          <Button color="error" onClick={handleDelete}>
            Delete Topic
          </Button>
        </>
      )}
      <Link to={TOPICS_ROUTE}>
        <Button>Back to Topics</Button>
      </Link>
    </div>
  );
};

TopicActions.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TopicActions;
