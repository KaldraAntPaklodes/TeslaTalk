import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getTopics } from "../../api/topics";
import TopicCard from "./TopicCard";
import { TOPIC_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import NewTopicButton from "../../components/Button/NewTopicButton";


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
    return <Loader/>;
  }

  if (topics.length === 0) {
    return <div>
        <NewTopicButton/>
        There are no topics yet.
        </div>;
  }

  return (
    <div>
        <NewTopicButton/>
        <div className="topics">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={generatePath(TOPIC_ROUTE, { id: topic.id })}
              className="single-project"
            >
              <TopicCard title={topic.title} />
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Topics;
