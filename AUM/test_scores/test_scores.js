var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var $ = function (id) {
    return document.getElementById(id);
};

var displayResults = function () {
    var average = 0;
    var highest = 0;
    var highest_index = 0;
    var sum = 0; // initial sum
    // var sum2 = scores[0] + scores[1] + scores[2]
    for (var i = 0 ; i < scores.length; i++) {
        sum += scores[i];
        if (scores[i] > highest) {   
            highest = scores[i];
            highest_index = i;
        }
    }
    average = sum/scores.length;
    var result_div = $("results");
    var htmlString = "<h2>Results</h2>";
    htmlString += "<p>Average score = " + average + "</p>";
    htmlString += "<p>High score = " + names[highest_index] + " with a score of " + highest + "</p>";
    result_div.innerHTML = htmlString;
};

var addScore = function(){
    var name = $("name").value;
    var score = $("score").value;
    if (name != null && score != null){
        score = parseInt(score);
        names[names.length] = name;
        scores[scores.length] = score;
    }
};
var displayScores = function() {
    var scores_table = $("scores_table");
    var htmlString = "<h2>Scores</h2>";
    htmlString += "<th>Name</th><th>Score</th>";
    for (var i = 0; i < names.length; i++){
        htmlString += "<tr><td>" + names[i] + "</td><td>"+ scores[i] + "</td></tr>";
    }
    scores_table.innerHTML = htmlString;
};
/*
var displayScores = function () {
    data = "";
    for (var i = 0; i < names.length; i++) {
    data += names[i] + " = " + scores[i] + "\n";
    }
    $("scores_display").value = data;
};*/
window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};