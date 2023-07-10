const TopicGeneralInfo = ({ project }) => {
  const {
    title,
    question,
    creator,
    id
  } = project;

  return (
    <div>
      <p>topic id: {id}</p>
      <h1>{title}</h1>
      <p>{question}</p>
      <p>{creator}</p>
    </div>
  );
};

export default TopicGeneralInfo;
