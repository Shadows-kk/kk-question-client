import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionInfo from "./QuestionInfo";
import QuestionTextArea from "./QuestionTextArea";
import QuestionCheckBox from "./QuestionCheckBox";

type ComponentInfoType = {
  fe_id: string;
  type: string;
  isHidden: boolean;
  props: any;
};
export default function getComponent(comp: ComponentInfoType) {
  const { fe_id, type, isHidden, props = {} } = comp;
  if (isHidden) return null;
  switch (type) {
    case "questionTitle":
      return <QuestionTitle {...props} />;
    case "questionParagraph":
      return <QuestionParagraph {...props} />;
    case "questionInput":
      return <QuestionInput fe_id={fe_id} props={props} />;
    case "questionRadio":
      return <QuestionRadio fe_id={fe_id} props={props} />;
    case "questionTextarea":
      return <QuestionTextArea fe_id={fe_id} props={props} />;
    case "questionCheckBox":
      return <QuestionCheckBox fe_id={fe_id} props={props} />;
    case "questionInfo":
      return <QuestionInfo {...props} />;
    default:
      return null;
  }
  return null;
}
