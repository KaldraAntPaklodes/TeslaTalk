import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getTopic } from "../../api/topics";
import TopicGeneralInfo from "./TopicGeneralInfo";
import TopicActions from "./TopicActions";
import NewAnswerButton from "../../components/Button/NewAnswerButton";
import { getAnswers } from "../../api/answers";
import AnswerCard from "../NewAnswer/AnswerCard";

const Topic = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopic(id)
      .then((response) => {
        setTopic(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    getAnswers(id)
      .then((response) => {
        setAnswers(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="topicContainer">
      <TopicActions id={topic.id} />
      <TopicGeneralInfo project={topic} />

      <div>
        <NewAnswerButton />
        <div className="answers">
          {answers.map((answer) => (
            <AnswerCard key={answer.id} answer={answer.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
