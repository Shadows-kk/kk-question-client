import React from "react";
import style from "./QuestionRadio.module.scss";
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{
      value: string;
      text: string;
    }>;
    value: string;
    isVertical: boolean;
  };
};
const QuestionRadio: React.FC<PropsType> = ({ fe_id, props }) => {
  const { title, options, value, isVertical } = props || {};
  let liClassName = "";
  if (isVertical) {
    liClassName = style.verticalItem;
  } else {
    liClassName = style.horizationItem;
  }
  return (
    <>
      <p className={style.title}>{title}</p>
      <ul className={style.list}>
        {options.map((item) => {
          const { value: val, text } = item;
          return (
            <li key={val} className={liClassName}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default QuestionRadio;
