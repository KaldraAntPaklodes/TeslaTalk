import { useContext, useState, useEffect } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import { UserContext } from "../../context/UserContext";
import { createTopic, updateTopic } from "../../api/topics";
import { TOPICS_ROUTE, TOPIC_ROUTE } from "../../routes/const";

// TODO write PropTypes from project;

const NewTopic = ({ topic }) => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState(topic?.title || "");
  const [question, setQuestion] = useState(topic?.question || "");
  const [id, setId] = useState(null);
  const isEditing = !!topic;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEditing) {
      // Fetch the latest ID for a new topic
      generateNewId();
    }
  }, [isEditing]);

  const generateNewId = () => {
    // Call your API function or generate a unique ID using any suitable logic
    // For simplicity, let's increment the ID based on the current timestamp
    const newId = Date.now();
    setId(newId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittingTopic = {
      title,
      question,
      creator: user.name,
      id,
    };

    const saveTopic = isEditing ? updateTopic : createTopic;
    const savingTopic = isEditing
      ? { id: topic.id, ...submittingTopic }
      : submittingTopic;

    saveTopic(savingTopic)
      .then(() => {
        const route = isEditing
          ? generatePath(TOPIC_ROUTE, { id: topic.id })
          : TOPICS_ROUTE;
        navigate(route);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        type="text"
        label="Topic Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormItem
        type="text"
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {isEditing && (
        <p>
          Current ID: <strong>{topic.id}</strong>
        </p>
      )}
      {!isEditing && id !== null && (
        <p>
          Generated ID: <strong>{id}</strong>
        </p>
      )}
      <Button type="submit">
        {isEditing ? "Edit" : "Create"} Topic
      </Button>
    </form>
  );
};

export default NewTopic;
