var name = prompt("what are your called ?")

var score = 0;
var question1 = "Where Do yOU live ?"
var question2 = "which country do you live in ?"
var question3 = "2+2*3"


var answer1 = prompt(question1)
var answer2 = prompt(question2)
var answer3 = prompt(question3)

if (answer1 == "Karachi") {
    score++
}
if (answer2 == "pakistan") {
    score++
}
if (answer3 == "12") {
    score++
}

alert("your score is " + score)
var name1 = prompt("what are your called ?")
var score1 = 0;
var question4 = "What is your favorite color ?"
var question5 = "what is your favorite dish ?"
var question6 = "3*3"

var answer4 = prompt(question4)
var answer5 = prompt(question5)
var answer6 = prompt(question6)


if (answer4 == "black") {
    score1++
}
if (answer5 == "biryani") {
    score1++
}
if (answer6 == "9") {
    score1++
}

alert("your score is " + score1)

var name2 = prompt("what are your called ?")
var score2 = 0;
var question7 = "20+3-4"
var question8 = "who's the founder of pakistan?"
var question9 = "30/4"

var answer7 = prompt(question7)
var answer8 = prompt(question8)
var answer9 = prompt(question9)



if (answer7 == "19") {
    score2++
}
if (answer8 == "Quaid-e-azam") {
    score2++
}
if (answer9 == "7.5") {
    score2++
}
alert("your score is " + score2)

var array = []
array.push(name,score,name1,score1,name2,score2)
alert(array)