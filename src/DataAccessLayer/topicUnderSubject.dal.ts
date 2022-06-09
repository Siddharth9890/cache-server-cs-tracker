import {
  TopicUnderSubject,
  TopicUnderSubjectOutput,
} from "../models/TopicUnderSubject";

export const getAllTopicsUnderSubjectDal = async (
  subjectName: string
): Promise<TopicUnderSubjectOutput[]> => {
  const topics = await TopicUnderSubject.findAll({
    where: { under_which_subject: subjectName },
    limit: 30,
  });
  if (topics.length === 0) throw `Topics not found for subject ${subjectName} `;
  return topics;
};

export const getAllTopics = async (): Promise<TopicUnderSubject[]> => {
  return await TopicUnderSubject.findAll({ limit: 1 });
};
