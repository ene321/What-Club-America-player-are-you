let siu = document.querySelector(".result");
let button = document.querySelector("button");
let player = document.querySelector(".goals").value;
let soccer = document.querySelector(".postions").value;
let chu = document.querySelector(".chu");
let lay = document.querySelector(".lay");
let fid = document.querySelector(".fid");
let mar = document.querySelector(".marche");
button.onclick = function() {
    let NUM = document.querySelector(".NUM").value;
    let user = document.querySelector(".username").value;
    console.log(NUM);
    console.log(user);

    if (NUM > 0 && NUM < 10 && user === "Goalie") {
        siu.innerHTML = " You scored " + NUM + " and you play " + user + " which makes you Agustin Marchesin";
        mar.style.display = "block";
    }
   else if (NUM > 10 && NUM < 20 && user === "Mid field") {
        siu.innerHTML = " You scored " + NUM + " and you play " + user + " which makes you Alvaro Fidalgo";
       fid.style.display = "block";
    }
    
    else if ( NUM > 19 && NUM < 52 && user === "defense"){
    siu.innerHTML = " You scored " + NUM + " and you play " + user + " which makes you Layun";
        lay.style.display = "block";
    }
    else if ( NUM >51  && NUM < 53 && user === "foward"){
    siu.innerHTML = " You scored " + NUM + " and you play " + user + " which makes you Chucho benitez";
        chu.style.display = "block";
    }
     else {
 siu.innerHTML = "Incorrect inputs, try again";
    }
};