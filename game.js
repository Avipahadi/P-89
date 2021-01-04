player_1_name = localStorage.getItem("player_1_n");
player_2_name = localStorage.getItem("player_2_n");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_n").innerHTML = player_1_name;
console.log(player1_name);

document.getElementById("player_1_s").innerHTML = player1_score;
document.getElementById("player_2_s").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;

function send() {
    document.getElementById("main").style.display = "none";
    document.getElementById("output").style.display = "inline";
    n_1 = document.getElementById("n_1").value;
    n_2 = document.getElementById("n_2").value;
    actual_answer = parseInt(n_1) * parseInt(n_2);
    console.log(actual_answer);
    question_number = "<h4>" + n_1 + " × " + n_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n_1").value = "";
    document.getElementById("n_2").value = "";
}