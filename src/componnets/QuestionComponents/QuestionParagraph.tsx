import React, { CSSProperties } from "react";
type PropsType = {
  text: string;
  isCenter?: boolean;
};
const QuestionParagraph: React.FC<PropsType> = (props: PropsType) => {
  const { text, isCenter = false } = props;
  // 样式
  const style: CSSProperties = {};
  if (isCenter) {
    style.textAlign = "center";
  }
  return (
    <>
      <p style={style}>{text}</p>
    </>
  );
};
export default QuestionParagraph;
