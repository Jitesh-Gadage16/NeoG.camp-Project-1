# Tanay-Pratap-assignment-One
This is a Fun Quiz CLI App made using node.js


# Excercise 1
```
// ex.01 Output your name

console.log("Jitesh Gadage");

```

#  Excercise 2

```
//ex.02 : read the name of your user

var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question("what is your name.?");

```
# Excercise 3
```
// ex03: welcome your user
var welcomeMsg = `Hey ${chalk.bgYellow(username)} Welcome!!! Good to see you here...` 

console.log(chalk.blue.underline(welcomeMsg))

```

# Excercise 4 / 5
```
// //ex 04 :  print right/wrong if greater than 25
// // ex 05 : Increement score on right answer

// var userAge = readlineSync.question("Am I older than 25..?");
// var score = 0

// if(userAge == "yes"){
//   console.log("yes you are right");
//   score ++;
//   console.log("your score is " + chalk.green.underline(score));
//   console.log("-----------------")
// }else{
//   console.log("Its wrong");
//   score--;
//   console.log("your score is " + score);
//   console.log("-----------------")
// }

```

# Excercise 6

```

//function check
//   var score = 0;

//  function playGame(question, answer) {
   

//    var userQuestion = readlineSync.question(question);

  
//     if(userQuestion == answer){
//       console.log("yes!! Its Right..")
//       score = score + 1;
//       // console.log("your score is " + score);
//       console.log("------------")
//     }else{
//       console.log("Its Wrong...");
//       score = score - 1;
//       console.log("------------")

//     }
//    console.log("your score is " +chalk.bgRed(score));

//  }

//  playGame("where do i work ", "microsoft");
//   playGame(chalk.red.underline("what is my fav sports "), "cricket")
  //  console.log("your score is " + score);
```
# Excercise 7 
```
var questionOne{
  question = "where do i Work..?",
  answer = "microsoft";
}

var batman = {
  name : "batman",
  color : "black",
  strength : 1000,
}
var superman = {
  name : "superman",
  color : "red",
  strength :15000,
}

var superHero = [batman , superman];

for(var i = 0; i< superHero.length; i++){

  var currentHero = superHero[i];
  console.log(currentHero.name);
  console.log("---------")
}
```
