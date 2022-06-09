import { Subject, SubjectOutput } from "../models/Subjects";

export const getAllSubjectsDal = async (): Promise<SubjectOutput[]> => {
  return await Subject.findAll({ limit: 10 });
};
