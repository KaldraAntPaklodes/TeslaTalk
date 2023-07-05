import axios from "axios";

export const getTopics = async () => {
  const response = await axios.get("http://localhost:3000/topics");
  return response.data;
};

export const getTopic = async (id) => {
  const response = await axios.get(`http://localhost:3000/topics/${id}`);
  return response.data;
};

export const createTopic = async (project) => {
  const response = await axios.post("http://localhost:3000/topics", project);
  return response.data;
};

export const updateTopic = async (project) => {
  const response = await axios.put(
    `http://localhost:3000/topics/${project.id}`,
    project
  );
  return response.data;
};

export const deleteTopic = async (id) => {
  const response = await axios.delete(`http://localhost:3000/topics/${id}`);
  return response.data;
};
