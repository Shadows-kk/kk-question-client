import PageWrapper from "@/componnets/PageWrapper/index";
import QuestionInput from "@/componnets/QuestionComponents/QuestionInput";
import QuestionRadio from "@/componnets/QuestionComponents/QuestionRadio";
import style from "@/styles/Question.module.scss";
type PropsType = {
  id: string;
};
export default function About(props: PropsType) {
  return (
    <>
      <PageWrapper title="问卷">
        <h4>标题</h4>
        <form method="POST" action="/api/answer">
          <input type="hidden" name="questionId" defaultValue={props.id} />
          <QuestionInput
            fe_id="123123"
            props={{ title: "你的姓名", placeholder: "请输入姓名" }}
          />
          <QuestionRadio
            fe_id="123ew23"
            props={{
              title: "姓名",
              options: [
                { value: "1", text: "1" },
                { value: "2", text: "2" },
              ],
              value: "1",
              isVertical: false,
            }}
          />
          <div className={style.submitBtnContainer}>
            <button type="submit">提交</button>
          </div>
        </form>
      </PageWrapper>
    </>
  );
}
export async function getServerSideProps(context: any) {
  const { id } = context.params;
  return {
    props: {
      id,
    },
  };
}
