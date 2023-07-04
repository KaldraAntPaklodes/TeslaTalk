import React, { useState } from "react";

const TopicCreationBox = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform topic creation logic here
    console.log("Topic:", topic);
    console.log("Question:", question);
    // Clear input fields after submission
    setTopic("");
    setQuestion("");
  };

  return (
    <div className="topicCreationBoxContainer">
      <h2>Create a Topic</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="topicInput">Topic:</label>
        <input
          type="text"
          id="topicInput"
          value={topic}
          onChange={handleTopicChange}
        />

        <label htmlFor="questionInput">Question:</label>
        <textarea
          id="questionInput"
          value={question}
          onChange={handleQuestionChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TopicCreationBox;