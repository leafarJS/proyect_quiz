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
  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback) {
    const choisesContainer = d.getElementById("choices");
    choisesContainer.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
      const btn = d.createElement("button");
      btn.className = "btn";
      btn.innerText = choices[i];

      btn.addEventListener("click", () => callback(choices[i]));

      choisesContainer.append(btn);
    }
  }
  showScores(score) {
    const gameOverHTML = `
      <h1>Result</h1>
      <h2 id="score">Your scores: ${score}</h2>
      `;
    // <h2 id="score">Your scores: ${quiz.score}</h2>

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    let element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
