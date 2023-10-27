import React from "react";
import style from "./QuestionTextArea.module.scss";
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};
const QuestionTextArea: React.FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;
  return (
    <>
      <p className={style.title}>{title}</p>
      <div className={style.textAreaWrapper}>
        <input name={fe_id} placeholder={placeholder}></input>
      </div>
    </>
  );
};
export default QuestionTextArea;
