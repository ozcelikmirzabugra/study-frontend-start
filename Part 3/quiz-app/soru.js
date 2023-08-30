function Question(question_text, answer_choices, true_answer) {
  this.question_text = question_text;
  this.answer_choices = answer_choices;
  this.true_answer = true_answer;
}

Question.prototype.check_answer = function (answer) {
  return answer === this.true_answer;
};

let questions = [
  new Question(
    "1-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Question(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "html", c: "javascipt", d: "sql" },
    "d"
  ),
  new Question(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "node.js", b: "typescript", c: "angular", d: "react" },
    "a"
  ),
  new Question(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d"
  ),
];
