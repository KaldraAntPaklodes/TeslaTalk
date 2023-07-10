import { useContext, useState } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import { UserContext } from "../../context/UserContext";
import { createAnswer, updateAnswer } from "../../api/answers";
import { TOPICS_ROUTE, TOPIC_ROUTE } from "../../routes/const";

// TODO write PropTypes from project;

const NewAnswer = ({ topic }) => {
  const { user } = useContext(UserContext);
  const [title] = useState(topic?.title);
  const [answer, setAnswer] = useState(topic?.answer || "");
  const isEditing = !!topic;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittingAnswer = {
      title,
      answer,
      creator: user.name,
    };
  
    const saveAnswer = isEditing ? updateAnswer : createAnswer;
    const savingAnswer = isEditing
      ? { id: topic.id, ...submittingAnswer }
      : submittingAnswer;
  
    saveAnswer(savingAnswer)
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
        <h1>{title}</h1>
      <FormItem
        type="text"
        label="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <Button type="submit">
        {isEditing ? "Edit" : "Create"} Answer
      </Button>
    </form>
  );
};

export default NewAnswer;
