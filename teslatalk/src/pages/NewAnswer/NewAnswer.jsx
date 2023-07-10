import { useContext, useState } from "react";
import { useNavigate, generatePath, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import { UserContext } from "../../context/UserContext";
import { createAnswer, updateAnswer } from "../../api/answers";
import { TOPIC_ROUTE } from "../../routes/const";
import "./NewAnswer.css"

// TODO write PropTypes from project;

const NewAnswer = ({ topic }) => {
  const { user } = useContext(UserContext);
  const [title] = useState(topic?.title);
  const [answer, setAnswer] = useState(topic?.answer || "");
  const isEditing = !!topic;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topicId")

  console.log("topicas", topic)

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittingAnswer = {
      title,
      answer,
      creator: user.name,
      userId: user._id
    };
  
    const saveAnswer = isEditing ? updateAnswer : createAnswer;
    const savingAnswer = isEditing
      ? { _id: topic._id, ...submittingAnswer }
      : submittingAnswer;
  
    saveAnswer(savingAnswer, topicId)
      .then(() => {
        const route = generatePath(TOPIC_ROUTE, { id: topicId?? topic.topicId });
        navigate(route);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form className="newAnswerForm" onSubmit={handleSubmit}>
      <h1 className="newAnswerTitle">{title}</h1>
      <FormItem
        type="text"
        label="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="newAnswerButton">
        <Button type="submit">
          {isEditing ? "Edit" : "Create"} Answer
        </Button>
      </div>
    </form>
  );
};

export default NewAnswer;
