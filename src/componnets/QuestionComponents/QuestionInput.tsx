import React from "react";
import style from "./QuestionInput.module.scss";
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};
const QuestionInput: React.FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;
  return (
    <>
      <p>{title}</p>
      <div className={style.inputWrapper}>
        <input name={fe_id} placeholder={placeholder}></input>
      </div>
    </>
  );
};
export default QuestionInput;
