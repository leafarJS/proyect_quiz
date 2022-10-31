const d = document;
export class UI {
  constructor() {}
  /**
   *
   * @param {string} text question to render
   */
  showQuestion(text) {
    const qTitle = d.getElementById("question");
    qTitle.innerText = text;
  }
}
