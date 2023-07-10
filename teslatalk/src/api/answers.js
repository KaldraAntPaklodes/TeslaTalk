import axios from "axios";

export const getAnswers = async (id) => {
    const response = await axios.get(`http://localhost:3000/topics/${id}`);
    return response.data;
  };

export const createAnswer = async (answer) => {
  const response = await axios.post("http://localhost:3000/topics/:id/answers/:id", answer);
  return response.data;
};

export const updateAnswer = async (answer) => {
  const response = await axios.put(
    `http://localhost:3000/topics/:id/${answer.id}`,
    answer
  );
  return response.data;
};

export const deleteAnswer = async (id) => {
  const response = await axios.delete(`http://localhost:3000/topics/:id/answers`);
  return response.data;
};
