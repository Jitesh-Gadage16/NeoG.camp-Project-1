

//ex.02 : read the name of your user

var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question("what is your name.?");

// ex03: welcome your user
var welcomeMsg = `Hey ${chalk.bold.white.bgYellow(username)} Welcome!!! Good to see you here...` 

console.log(welcomeMsg)
  console.log(chalk.red("---------------------------------------------"))

// console.log(chalk.blue.underline(welcomeMsg))

//End Game 

// var UserIntrest =  readlineSync.question("Are you ready to play my CLI Game..?");

// if(UserIntrest == "yes"){
//   console.log("ALl the best and try to enjoy the game..!!!")
//   console.log(chalk.red("---------------------------------------------"))
// }else{
//   console.log("Okay..!! Then to You have to Play the game...hahah")
//    console.log(chalk.red("--------------------------------------------"))
// }

var score = 0 ;

function playGame(UserQuestion   , correctAnswer){
  var questions = readlineSync.question(UserQuestion);

  if(questions === correctAnswer){
    console.log(chalk.bold.black.bgGreen("Yes it's Right..!!"));
    score++;
  console.log(chalk.red("------------------"))

  }else{
    console.log( chalk.bgRed("It's wrong.."));
    score--;

  }
    console.log("your score is " + score);

}




 var Game = [{
  Question : `How Many Teams are there in IPL 2020..?
  a: 7
  b: 8
  c: 10`,
  Answer : "b",
  
},
{
  Question : `Who won the IPL 2020..?
  a: Delhi Capitals
  b: Kings XI Panjab
  c: Mumbai Indians`,
  Answer : "c",
},
{
  Question : `Who was the Orange Cap Holdar
  a: Quinton de Kock
  b: Kl Rahul
  c: Shikar Dhawan`,
  Answer : "b",
},
{
  Question : `Who was the Purple Cap Holdar..?
  a: Jasprit Bhumrha
  b: Trent Bolt
  c: Kagiso Rabada`,
  Answer : "c",
},
{
  Question : `Where was the IPL 2020 conducted..?
  a: dubai
  b: India
  c: England`,
  Answer : "a",
},

]

for(var i = 0; i < Game.length; i++){
  var currentQuestion = Game[i]
  playGame(currentQuestion.Question + ` `,currentQuestion.Answer )
  
  console.log(chalk.red("------------------"))

  }
  console.log("Thank you for Playing..!!! send Me the screenshot of your final score")
  


