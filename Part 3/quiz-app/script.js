const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.show_question(quiz.call_question());
    ui.show_question_counts(quiz.question_index + 1, quiz.questions.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function() {
    if (quiz.questions.length != quiz.question_index + 1) {
      quiz.question_index += 1;
      clearInterval(counter);
      clearInterval(counter_line);
      startTimer(10);
      startTimerLine();
      ui.show_question(quiz.call_question());
      ui.show_question_counts(quiz.question_index + 1, quiz.questions.length);
      ui.btn_next.classList.remove("show");
    } else {
      clearInterval(counter);
      clearInterval(counter_line);
      ui.quiz_box.classList.remove("active");
      ui.score_box.classList.add("active");
      ui.show_score(quiz.questions.length, quiz.true_answer_counts);
    }
});

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function() {
    quiz.question_index = 0;
    quiz.true_answer_counts = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counter_line);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.call_question();

    if (question.check_answer(answer)) {
      quiz.true_answer_counts += 1;
      option.classList.add("correct");
      option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
      option.classList.add("incorrect");
      option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(counter);

            ui.time_text.textContent = "Süre Bitti";

            let answer = quiz.call_question().true_answer;

            for(let option of ui.option_list.children) {

                if (option.querySelector("span b").textContent == answer) {
                  option.classList.add("correct");
                  option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }

                option.classList.add("disabled");
            }

            ui.btn_next.classList.add("show");
        }
    }
}

let counter_line;
function startTimerLine() {
    let line_width = 0;

    counter_line = setInterval(timer, 20);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if(line_width > 549) {
            clearInterval(counter_line);
        }
    }
}


