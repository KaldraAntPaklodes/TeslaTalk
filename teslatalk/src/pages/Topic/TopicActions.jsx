import { useNavigate, generatePath } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import { deleteTopic } from "../../api/topics";
import { TOPICS_ROUTE, EDIT_TOPIC_ROUTE } from "../../routes/const";

const TopicActions = ({ id }) => {
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

  return (
    <div className="projectActions">
      <Button variant="outlined" onClick={handleEdit}>
        Edit Topic
      </Button>
      <Button color="error" onClick={handleDelete}>
        Delete Topic
      </Button>
    </div>
  );
};

TopicActions.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TopicActions;
