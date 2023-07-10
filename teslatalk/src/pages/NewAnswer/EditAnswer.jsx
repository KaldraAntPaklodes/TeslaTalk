import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import NewAnswer from "./NewAnswer";
import { getAnswer } from "../../api/answers";

const EditAnswer = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(id)
  console.log("topicas is edio", topic)

  useEffect(() => {
    setIsLoading(true);
    getAnswer(id)
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

  return <NewAnswer topic={topic} />;
};

export default EditAnswer;
