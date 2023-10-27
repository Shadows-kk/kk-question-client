import React, { useEffect } from "react";
import style from "./QuestionRadio.module.scss";
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    isVertical?: boolean;
    list: Array<{
      value: string;
      text: string;
      checked: boolean;
    }>;
  };
};
const QuestionCheckBox: React.FC<PropsType> = ({ fe_id, props }) => {
  const { title, list = [], isVertical = false } = props;
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const toogleChecked = (value: string) => {
    console.log(value);
    // 点击已选中的数据，取消选中
    if (selectedValues.includes(value)) {
      console.log("已选中", value);
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      console.log("未选中", value);
      // 点击未选中，则添加选中
      setSelectedValues(selectedValues.concat(value));
    }
  };
  useEffect(() => {
    list.forEach((item) => {
      const { value, checked } = item;
      if (checked) {
        setSelectedValues((selectedValues) => selectedValues.concat(value));
      }
    });
  }, [list]);
  return (
    <>
      <p className={style.title}>{title}</p>
      <ul className={style.list}>
        {list.map((item) => {
          const { value, text, checked } = item;
          let liClassName = "";
          if (isVertical) {
            liClassName = style.verticalItem;
          } else {
            liClassName = style.horizationItem;
          }
          return (
            <li key={value} className={liClassName}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(value)}
                  onChange={()=>toogleChecked(value)}
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
export default QuestionCheckBox;
