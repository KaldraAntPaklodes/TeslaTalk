import PropTypes from "prop-types";

const AnswerCard = ({ answer }) => {
  return (
    <div className="AnswerCard">
      <p className="title">{answer}</p>
    </div>
  );
};

AnswerCard.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default AnswerCard;