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
  useEffect(() => {
    list.forEach((item) => {
      const { value, checked } = item;
      if (checked) {
        setSelectedValues((selectedValues) => selectedValues.concat(value));
      }
    });
  }, [list]);
  const toogleChecked = (value: string) => {
    console.log(value);
    // 点击已选中的数据，取消选中
    if (selectedValues.includes(value)) {
      setSelectedValues((selectedValues) =>
        selectedValues.filter((item) => item !== value)
      );
    } else {
      // 点击未选中，则添加选中
      setSelectedValues(selectedValues.concat(value));
    }
  };

  return (
    <>
      <p className={style.title}>{title}</p>
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />
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
                  onChange={() => toogleChecked(value)}
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
