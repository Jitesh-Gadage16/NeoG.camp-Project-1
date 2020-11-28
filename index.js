

//ex.02 : read the name of your user
var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question("what is your name.?");

// ex03: welcome your user
var welcomeMsg = `Hey ${chalk.bold.white.bgYellow(username)} Welcome!!! Good to see you here...` 

console.log(welcomeMsg)
  console.log(chalk.red("---------------------------------------------"))

  console.log(chalk.bgWhite.bold.black("This is a Small Fun Quiz Which will test How well do you know Me."))
  console.log(chalk.red("----- x ----- x ---- x ----- x ---- x ----- x --"))

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

function playGame(UserQuestion , correctAnswer){
  var questions =readlineSync.question(chalk.bold.cyan(UserQuestion));
  
  if(questions === correctAnswer){
    console.log(chalk.bold.black.bgGreen("Yes it's Right..!!"));
    score+=2;
  console.log(chalk.red("------------------"))

  }else{
    console.log( chalk.bgRed("It's wrong.."));
    score-=2;

  }
    console.log("your score is " + score);

}




 var Game = [{
  Question : `In which city do I live..? 
  a: Mumbai
  b: Navi Mumbai
  c: Thane `,
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
  Question : `Which one is my Favraouit..?
  a: Pizza
  b: Burger
  c: Biryani`,
  Answer : "a",
},
{
  Question : `What do you think am I single or In Relationship..😂😂
  a: Single
  b: Relationship`,
  Answer : "a",
},


]

for(var i = 0; i < Game.length; i++){
  var currentQuestion = Game[i]

  playGame(currentQuestion.Question +` `, currentQuestion.Answer )
  
  console.log(chalk.red("------------------"))

  }
  console.log("Thank you for Playing..!!! send Me the screenshot of your final score")
  


