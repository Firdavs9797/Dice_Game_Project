var num = Math.floor(Math.random() * 6) + 1; // num 1- 6;
var dice_random = "dice" + num + ".png";  // images 1- 6;
var random_image = "images/" + dice_random;
var image1 = document.querySelectorAll("img")[0].setAttribute("src",random_image);

var num2 = Math.floor(Math.random()*6) + 1;
var dice_random_two = "dice" + num2 + ".png";
var random_image2 = "images/" + dice_random_two;
var image2 = document.querySelectorAll("img")[1].setAttribute("src",random_image2);

if(num>num2)
{
  document.querySelector("h1").innerHTML = "Player 1 won the game! Player 2 you should practice more! 화이팅!";
}
else if(num2>num)
{
  document.querySelector("h1").innerHTML = "Player 2 won the game! Player 1 you should practice more! 화이팅!";
}
else {
  document.querySelector("h1").innerHTML = "Draw! Try again!!";
}
