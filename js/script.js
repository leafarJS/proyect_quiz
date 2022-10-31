//@ts-check
import { newQuestions } from "../database/question.js";
import { Quiz } from "../models/Quiz.js";
import { UI } from "../models/UI.js";

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    console.log(quiz);
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (choice) => {
      quiz.guess(choice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex, newQuestions.length);
  }
};

function main() {
  const quiz = new Quiz(newQuestions);
  const ui = new UI();

  renderPage(quiz, ui);
}
main();
