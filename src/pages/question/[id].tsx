import PageWrapper from "@/componnets/PageWrapper/index";
import style from "@/styles/Question.module.scss";
import getQuestionById from "@/pages/services/question";
import getComponent from "@/componnets/QuestionComponents/index";
type PropsType = {
  errorno: number;
  data?: {
    id: string;
    title: string;
    desc?: string;
    css?: string;
    isPublisheded: boolean;
    isDeleted: boolean;
    componentList: Array<any>;
  };
  msg?: string;
};
export default function About(props: PropsType) {
  const { errorno, data, msg = "" } = props;
  // 数据错误
  if (errorno !== 0) {
    return (
      <PageWrapper title="页面错误">
        <h3>页面请求出错</h3>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  const {
    id,
    title = "",
    desc = "",
    isDeleted,
    isPublished,
    componentList = [],
  } = data || {};
  // 问卷已经被删除的错误
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h3>{title}</h3>
        <p>该问卷已被删除</p>
      </PageWrapper>
    );
  }
  // 问卷未发布的错误
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h3>{title}</h3>
        <p>该问卷未发布</p>
      </PageWrapper>
    );
  }
  // 遍历接口获取的组件列表，生成对应的组件
  const ComponentListElem = (
    <>
      {componentList.map((c) => {
        const ComponentElem = getComponent(c);
        return <div key={c.fe_id}>{ComponentElem}</div>;
      })}
    </>
  );
  return (
    <>
      <PageWrapper title={title}>
        <form method="POST" action="/api/answer">
          <input type="hidden" name="questionId" defaultValue={id} />
          {ComponentListElem}
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
  const data = await getQuestionById(id);
  return {
    props: {
      ...data,
    },
  };
}
