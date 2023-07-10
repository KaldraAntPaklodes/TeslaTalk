import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getTopics } from "../../api/topics";
import TopicCard from "./TopicCard";
import { TOPIC_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import NewTopicButton from "../../components/Button/NewTopicButton";
import "./Topics.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((response) => {
        setTopics(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (topics.length === 0) {
    return (
      <div className="noTopicsContainer">
        <NewTopicButton />
        <p className="noTopicsMessage">There are no topics yet.</p>
      </div>
    );
  }

  return (
    <div>
      <NewTopicButton />
      <div className="topicsContainer">
        <h2 className="topicsHeading">Topics:</h2>
        <div className="topicCards">
          {topics.map((topic) => (
            <Link
              key={topic._id}
              to={generatePath(TOPIC_ROUTE, { id: topic._id })}
              className="topicLink"
            >
              <TopicCard title={topic.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
