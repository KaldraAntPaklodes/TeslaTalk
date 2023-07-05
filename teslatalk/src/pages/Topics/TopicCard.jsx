import PropTypes from "prop-types";

const TopicCard = ({ title }) => {
  return (
    <div className="topicCard">
      <p className="title">{title}</p>
    </div>
  );
};

TopicCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default TopicCard;
