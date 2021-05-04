var $ = function(id){
    return document.getElementById(id)
};

var input1;
var input2;
/*var input3; defining input3 and input4
var input4;*/
function lettergrade1 (letter1){
    if (letter1 =="a" || letter1 == "A"){
        input1 = 4.0;     
        return input1;
    }else if (letter1 == "b" || letter1 == "B"){
        input1 = 3.0;
        return input1;
    }else if (letter1 == "c" || letter1 == "C"){
        input1 = 2.0;
        return input1;
    }else if (letter1 == "d" || letter1 == "D"){
        input1 = 1.0;
        return input1;
    }else if (letter1 == "f" || letter1 == "F"){
        input1 = 0;
        return input1;
    }else
        return -1;
}
function lettergrade2 (letter2){
    if (letter2 == "a" || letter2 == "A"){
        input2 = 4.0;
        return input2;
    }else if (letter2 == "b" || letter2 == "B"){
        input2 = 3.0;
        return input2;
    }else if (letter2 == "c" || letter2 == "C"){
        input2 = 2.0;
        return input2;
    }else if (letter2 == "d" || letter2 == "D"){
        input2 = 1.0;
        return input2;
    }else if (letter2 == "f" || letter2 == "F"){
        input2 = 0;
        return input2;
    }else
        return -1;
}

/* CONDITION FOR 3 & 4
function lettergrade3 (letter3){
    if (letter3 == "a" || letter3 == "A"){
        input3 = 4.0;
        return input3;
    }else if (letter3 == "b" || letter3 == "B"){
        input3 = 3.0;
        return input3;
    }else if (letter3 == "c" || letter3 == "C"){
        input3 = 2.0;
        return input3;
    }else if (letter3 == "d" || letter3 == "D"){
        input3 = 1.0;
        return input3;
    }else if (letter3 == "f" || letter3 == "F"){
        input3 = 0;
        return input3;
    }else
        return -1;
}
function lettergrade4 (letter4){
    if (letter4 == "a" || letter4 == "A"){
        input4 = 4.0;
        return input4;
    }else if (letter4 == "b" || letter4 == "B"){
        input4 = 3.0;
        return input4;
    }else if (letter4 == "c" || letter4 == "C"){
        input4 = 2.0;
        return input4;
    }else if (letter4 == "d" || letter4 == "D"){
        input4 = 1.0;
        return input4;
    }else if (letter4 == "f" || letter4 == "F"){
        input4 = 0;
        return input4;
    }else
        return -1;
}*/
var calculate = function(){
    //Converting the credit hours into float
    var credithour1 = parseFloat($("credit1").value);
    var credithour2 = parseFloat($("credit2").value);
    /*var credithour3 = parseFloat($("credit3").value);
    var credithour4 = parseFloat($("credit4").value);*/
    
    //Converting letter grader to number
    var letter1 = $('letter1').value;
    var output1 = lettergrade1(letter1);
    
    var letter2 = $('letter2').value;
    var output2 = lettergrade2(letter2);
    
    /* CONVERTING LETTERGRADES OF 3 & 4 TO NUMBER
    var letter3 = $('letter3').value;
    var output3 = lettergrade3(letter3);
    
    var letter4 = $('letter4').value;
    var output4 = lettergrade4(letter4);*/
    
    var sum =(output1 * credithour1 + output2 * credithour2 /*+ output3 * credithour3  + output4 * credithour4*/)/(credithour1 + credithour2 /*+ credithour3 + credithour4*/);    
    alert(sum.toFixed(2));
};
window.onload = function(){
    $("calculatebutton").onclick = calculate;
}
