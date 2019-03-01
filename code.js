/* the five yes or no questions are below */
var human = confirm("Are you a human? If Yes Press OK !");
console.log('Human error!Skynet is Rising!');
if (human) {
    console.log("Catch Here "); 
    alert('Good To know');
   } 
   else 
   {
   console.log("Again");
   alert('Thanks!');
   }
var cars = confirm("Do you like cars? If Yes Press OK !");
console.log('Car Error');
if (cars) {
    console.log("here1 here ");
    alert('Great This Game is For You ')
   } 
   else {
    console.log("here2");
    alert('Thanks!');
   }
var fast = confirm("Do you the know fastest cars? If Yes Press OK !");
console.log('fast error');
if (fast) {
    console.log("here here ");
    alert('Okay continue ');
   } 
   else 
   {
    console.log("here3");
    alert('Thanks!');
    
   }
var game = confirm("Do you like to play a game? If Yes Press OK !");
console.log('game error');
if (game) {
    console.log("catch here4 ");
    alert('Great ');
   } 
   else {
    console.log("again1");
    alert('Thanks!');
   }
var guess = confirm("you will be followed up with questions? If Yes Press OK !");
console.log('guess error');
if (guess) {
 console.log("damn here ");
 alert('All the Best ');
} 
else 
{
 console.log("oh no again");
 alert('Thanks!');
}

/* Guess the right number of cars */
alert ('Guess the right answer in 3 attempts, if not you LOST ');
var rightanswer = 4;
var guesstyres = prompt('How Many Tyres do a Car have ?');
for (i=0;i<3;i++)
{
    if(rightanswer == guesstyres)
    {
        alert('Brilliant !');
        break;
    }

    else 
    {
        prompt('Oops ! Try again');
    }
}

/* Guess any fastest car in the world */

var bestcars = [
    "Hennessey Venom F5",
    "Ferari",
    "Bugatti Chiron",
    "Lamborghini"
    ];
var guessbestcar = prompt('Give me one fastest car you know?');
for (i=0;i<3;i++)
{
    if(bestcars == guessbestcar)
    {
        alert('Right Answer !');
        break;
    }

    else 
    {
        prompt('Oops ! Try again');
    }
}


   