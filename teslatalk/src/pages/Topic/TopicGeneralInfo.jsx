import "./TopicGeneralInfo.css"

const TopicGeneralInfo = ({ project }) => {
  const { title, question, creator } = project;

  return (
    <div className="TopicGeneralInfo" style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{title}</h1>
      <p style={{ fontSize: "16px", marginBottom: "5px" }}>{question}</p>
      <p className="creator" style={{ color: "#888" }}>Creator: {creator}</p>
    </div>
  );
};

export default TopicGeneralInfo;