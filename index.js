

//ex.02 : read the name of your user
var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question("what is your name.?");

// ex03: welcome your user
var welcomeMsg = `Hey ${chalk.bold.white.bgYellow(username)} Welcome!!! Good to see you here...` 

console.log(welcomeMsg)
console.log("  ")

  console.log(chalk.bgWhiteBright.bold.black("This is a Small Fun Quiz Which will test How well do you know Me."))
   console.log(" ")



var UserIntrest =  readlineSync.question("Are you ready to play my CLI Game..?");
  console.log(chalk.red("--------------------------------------------"))

if(UserIntrest == "yes"){
  console.log(chalk.bgYellowBright.bold.black("ALl the best and try to enjoy the game..!!!"))
  console.log(chalk.red("---------------------------------------------"))
}else{
  console.log("Okay..!! Then to You have to Play the game...hahah")
   console.log(chalk.red("--------------------------------------------"))
}

var score = 0 ;

function playGame(UserQuestion , correctAnswer){
  var questions =readlineSync.question(chalk.bold.cyanBright(UserQuestion));
  
  if(questions === correctAnswer){
    console.log(chalk.bold.black.bgGreen("Yes it's Right..!!"));
    score+=2;
  console.log(chalk.red("-----------------------------"))

  }else{
    console.log( chalk.bgRed("It's wrong.."));
    score-=2;
      console.log(chalk.red("-------------------------"))

  }
    console.log("Your score is " + score);

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
  a: Coffie
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
  
   console.log(chalk.red("-----------------------------"))
  

  }
  console.log(chalk.bgYellowBright.bold.black("congrats..!! Your final score is " + score))
  console.log("  ")
  console.log("Thank you for Playing..!!! send Me the screenshot of your final score")
  


