import PropTypes from "prop-types";
import React from "react";

const Topic = ({ topic, question }) => {
  return (
    <div className="topicContainer">
      <h3>{topic}</h3>
      <p>{question}</p>
    </div>
  );
};

Topic.propTypes = {
  topic: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default Topic;