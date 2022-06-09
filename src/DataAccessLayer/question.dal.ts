import { Question, QuestionOutput } from "../models/Question";

export const getAllQuestionsUnderATopicDal = async (
  topicName: string
): Promise<QuestionOutput[]> => {
  const questions = await Question.findAll({
    where: { under_which_topic: topicName },
    limit: 30,
  });
  if (questions.length === 0) throw `Questions not found for ${topicName} `;
  return questions;
};

export const getSingleQuestionDal = async (
  questionName: string,
  topicName: string
): Promise<QuestionOutput> => {
  const questions = await Question.findOne({
    where: { question_name: questionName, under_which_topic: topicName },
  });
  if (!questions) throw `${questionName} not found`;
  return questions;
};
