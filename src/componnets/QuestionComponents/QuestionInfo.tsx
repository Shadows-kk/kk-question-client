import React from "react";
type PropsType = {
  title: string;
  desc?: string;
};
const QuestionInfo: React.FC<PropsType> = (props: PropsType) => {
  const { title, desc } = props || {};
  // 描述可以换行
  const descList = desc.split("\n");
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{title}</h3>

      {descList.map((item, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {item}
        </span>
      ))}
    </div>
  );
};
export default QuestionInfo;
