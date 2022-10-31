export class Question {
  /**
   *
   * @param {string} text pregunta
   * @param {string[]} choices opciones
   * @param {string} answer respuesta
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  /**
   *
   * @param {string} choice respuesta del usuario
   * @returns {boolean} return true if is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}
