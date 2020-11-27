

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

function playGame(UserQuestion   , /n correctAnswer){
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
  Question : `In which city do I live..? 
  a: Mumbai
  b: Navi Mumbai
  c: Thane`,
  Answer : "b",
  
},
{
  Question : `What do I love the Most.?
  a: Coffe
  b: Chai
  c: Both a and b`,
  Answer : "b",
},
{
  Question : `What do I love to play..?
  a: Football
  b: Vallyball
  c: Cricket`,
  Answer : "c",
},
{
  Question : `What do you think am I single or In Relationship..😂😂
  a: Single
  b: Relationship`,
  Answer : "a",
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
  


