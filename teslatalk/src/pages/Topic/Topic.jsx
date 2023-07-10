import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getTopic } from "../../api/topics";
import TopicGeneralInfo from "./TopicGeneralInfo";
import TopicActions from "./TopicActions";
import NewAnswerButton from "../../components/Button/NewAnswerButton";
import AnswerCard from "../NewAnswer/AnswerCard";
import "./Topic.css"

const Topic = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
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

  if (isLoading || !topic) {
    return <Loader />;
  }

  return (
    <div className="topicContainer">
      <TopicActions topic={topic} />
      <TopicGeneralInfo project={topic} />

      <div>
        <NewAnswerButton topicId={topic._id} />
        <div className="answers">
          {topic.answers.map((answer) => (
            <AnswerCard
              key={answer._id}
              answer={answer}
              onSuccess={() => {
                setIsLoading(true)
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
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
