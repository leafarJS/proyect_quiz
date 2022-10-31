//@ts-check
import { newQuestions } from "../database/question.js";
import { Quiz } from "../models/Quiz.js";
import { UI } from "../models/UI.js";
function main() {
  const quiz = new Quiz(newQuestions);
  const ui = new UI();

  ui.showQuestion(quiz.getQuestionIndex().text);
}
main();
