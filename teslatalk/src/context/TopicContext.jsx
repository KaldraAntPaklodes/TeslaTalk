import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../routes/const";
import { searchSimilarTopics  } from "../utils/topic";

const TopicContext = createContext({
  topic: null,
  isTopicExist: false,
  handleCreateTopic: () => null,
  handleDeleteTopic: () => null,
  handleSearchTopic: () => null,
});

const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState(null); // null | topic:"test"
  const isTopicExist = !!topic; // null | topic:"test"
  const navigate = useNavigate();
  // !!null => false
  // !!{email: "test", password: "asd123"} => true

  const handleSearchTopic = (topic, setError, setTopic) => {
    fetch("http://localhost:3000/topics")
      .then((resp) => resp.json())
      .then((response) => {
        const existingTopic = searchSimilarTopics(response, topic);
        if (existingTopic.length > 0) {
          setTopic(existingTopic[0]);
        } else {
          setError("There are no results for this topic.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleDeleteTopic = () => {
    setTopic(null);
    navigate(MAIN_ROUTE);
  };

  const handleCreateTopic = (newTopic) => {
    fetch("http://localhost:3000/topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTopic),
    })
      .then((resp) => resp.json())
      .then(() => {
        navigate(LOGIN_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <TopicContext.Provider
      value={{ topic, isTopicExist, handleCreateTopic, handleDeleteTopic, handleSearchTopic }}
    >
      {children}
    </TopicContext.Provider>
  );
};

export { TopicContext, TopicProvider };