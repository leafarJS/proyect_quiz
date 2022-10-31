import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const newQuestions = data.map(
  (q) => new Question(q.question, q.choises, q.answer)
);
