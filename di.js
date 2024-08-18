let RandomNumber1=Math.floor(Math.random()*6)+1;
let RandomImage1="dice"+RandomNumber1+".png";
let RandomLoc="images/"+RandomImage1;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomLoc);

let randomNumber2=Math.floor(Math.random()*6)+1;
let randomImage2="dice"+randomNumber2+".png";
let randomLoc2="images/"+randomImage2;
let image2=document.querySelectorAll("img")[1].setAttribute("src",randomLoc2);

if(RandomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Kamesh Abhi🪓 is winner";
}
else if(RandomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Vijay Goud🪓 is Winner";  
}
else if(RandomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Arey Bugga";  
}