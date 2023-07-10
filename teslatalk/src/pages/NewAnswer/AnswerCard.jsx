import Button from "../../components/Button/Button";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteAnswer } from "../../api/answers";
import { EDIT_ANSWER_ROUTE } from "../../routes/const";
import { generatePath, useNavigate } from "react-router-dom";

const AnswerCard = ({ answer, onSuccess }) => {
  const userContext = useContext(UserContext);
  const canManage = answer.userId === userContext.user._id;
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteAnswer(answer._id)
      .then(onSuccess)
      .catch((error) => {
        console.error(error);
      });
  };
  
  const handleEdit = () => {
    const path = generatePath(EDIT_ANSWER_ROUTE, { id: answer._id });
    navigate(path);
  };

  return (
    <div className="AnswerCard">
      <p className="title">{answer.answer}</p>
      <p>Creator: {answer.creator}</p>
      {canManage && (
        <>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )}
    </div>
  );
};


export default AnswerCard;
