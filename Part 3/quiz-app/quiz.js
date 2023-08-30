function Quiz(questions) {
  this.questions = questions;
  this.question_index = 0;
  this.true_answer_counts = 0;
}

Quiz.prototype.call_question = function () {
  return this.questions[this.question_index];
};