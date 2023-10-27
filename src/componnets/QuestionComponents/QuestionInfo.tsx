import React from "react";
type PropsType = {
  title: string;
  desc?: string;
};
const QuestionInfo: React.FC<PropsType> = (props: PropsType) => {
  const { title, desc } = props || {};
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
export default QuestionInfo;
