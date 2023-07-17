var randomNumber1 = Math.floor(Math.random() * 6)+1;
var imgOne = "dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src","./images/"+imgOne);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var imgTwo = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src","./images/"+imgTwo);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player one wins 🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player two wins 🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw!";

}
