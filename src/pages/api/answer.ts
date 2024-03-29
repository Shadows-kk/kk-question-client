// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/pages/services/answer";

const genAnswerInfo = (resBody) => {
  let answerList: array[] = [];
  Object.keys(resBody).forEach((key) => {
    if (key !== "questionId") {
      answerList.push({
        componentId: key,
        value: resBody[key],
      });
    }
  });
  return {
    questionId: resBody.questionId,
    answerList,
  };
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(200).json({ errorno: -1, msg: "提交方式不正确" });
  } else {
    const answerInfo = genAnswerInfo(req.body);
    console.log(
      answerInfo
    );
    try {
      // 提交数据到服务端
      const resultData = await postAnswer(answerInfo);
      if (resultData.errorno == 0) {
        // 提交成功页面
        res.redirect("/success");
      } else {
        // 提交失败页面
        res.redirect("/fail");
      }
    } catch (e) {
      // 提交失败页面
      res.redirect("/fail");
    }
  }
}
