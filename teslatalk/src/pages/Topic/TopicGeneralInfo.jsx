const TopicGeneralInfo = ({ project }) => {
  const {
    title,
    question,
    creator
  } = project;

  return (
    <div>
      <h1>{title}</h1>
      <p>{question}</p>
      <p>{creator}</p>
    </div>
  );
};

export default TopicGeneralInfo;
