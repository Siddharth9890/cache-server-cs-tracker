import { object, string } from "zod";

export const paramsAllQuestionsUnderTopic = object({
  params: object({
    topicName: string({
      required_error: "topicName is required",
    })
      .min(3, "topicName should not be less than 3 characters")
      .max(30, "topicName should be not be greater than 30 characters")
      .nonempty({ message: "topic name can't be empty" })
      .trim()
      .regex(/^[a-zA-Z ]*$/, {
        message: "topic Name should have only A-Z/a-z characters",
      }),
  }),
});

export const paramsSingleQuestion = object({
  params: object({
    topicName: string({
      required_error: "topicName is required",
    })
      .min(3, "topicName should not be less than 3 characters")
      .max(30, "topicName should be not be greater than 30 characters")
      .nonempty({ message: "topic name can't be empty" })
      .trim()
      .regex(/^[a-zA-Z ]*$/, {
        message: "topic Name should have only A-Z/a-z characters",
      }),
    questionName: string({
      required_error: "questionName is required",
    })
      .min(3, "questionName should not be less than 3 characters")
      .max(30, "questionName should be not be greater than 30 characters")
      .nonempty({ message: "question name can't be empty" })
      .trim()
      .regex(/^[a-zA-Z ]*$/, {
        message: "question Name should have only A-Z/a-z characters",
      }),
  }),
});
