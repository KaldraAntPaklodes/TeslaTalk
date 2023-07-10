import { useContext, useState } from "react";
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
  const isEditing = !!topic;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittingTopic = {
      title,
      question,
      creator: user.name,
      userId: user._id
    };

    const saveTopic = isEditing ? updateTopic : createTopic;
    const savingTopic = isEditing
      ? { id: topic._id, ...submittingTopic }
      : submittingTopic;

    saveTopic(savingTopic)
      .then(() => {
        const route = isEditing
          ? generatePath(TOPIC_ROUTE, { id: topic._id })
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
          Current ID: <strong>{topic._id}</strong>
        </p>
      )}
      <Button type="submit">
        {isEditing ? "Edit" : "Create"} Topic
      </Button>
    </form>
  );
};

export default NewTopic;
