var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "images/dice"+ randomNumber1 +".png"); // Choose one of the six dice pictures according to the result of randomNumber1

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "images/dice"+ randomNumber2 +".png"); // Choose one of the six dice pictures according to the result of randomNumber2

var titleText = document.querySelector(".container h1"); //Save the h1 element inside the class container to change their text later

if(randomNumber1 > randomNumber2) {
    titleText.innerHTML = "Player 1 wins🥇";
}
else if(randomNumber1 === randomNumber2)
{
    titleText.innerHTML = "Draw🤝";
}
else
{
    titleText.innerHTML = "Player 2 wins🏆";
}