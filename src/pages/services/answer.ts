import { post } from "./ajax";
export async function postAnswer(answerInfo: any) {
  const url = "/api/answer";
  const data = post(url, answerInfo);
  return data;
}
