//@ts-check
import { Question } from "./Question.js";

export class Quiz {
  questionIndex = 0;
  score = 0;

  /**
   *
   * @param {Question[]} question
   */
  constructor(question) {
    this.question = question;
  }
  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.question[this.questionIndex];
  }

  isEnded() {
    return this.question.length === this.questionIndex;
  }

  /**
   *
   * @param {string} answer some text
   */
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
