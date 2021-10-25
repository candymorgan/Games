let test;
function question() {
  test = document.createElement("input");
  test.setAttribute("placeholder", "What Year Where You born?");
  test.setAttribute("onchange", "birth_year()");
  test.setAttribute("type", "number");
  let box = document.getElementById("answer");
  box.appendChild(test);

}

function birth_year() {
  let year = parseInt(test.value);
  let result = (2021 - year) * 365;
  let h1 = document.createElement("h1");
  h1.setAttribute("id", "large_font");
  let more_info = document.createTextNode("You are  " + result + "  days old");
  h1.appendChild(more_info);
  document.getElementById("age_result").appendChild(h1);

}


function reset_button() {
  document.getElementById("large_font").remove();



}

function imgGenerator() {
  let image = document.createElement("img");
  image.setAttribute("id", "img_pix");
  image.src = "../img/four.jpg";
  let img_cont = document.getElementById("img_container");
  img_cont.appendChild(image);
}

function del() {
  document.getElementById("img_pix").remove();

}

//This code is also used to remove a single image from the image collection
// function createImage(id){
//   this.image = document.createElement("img");
//   this.image.setAttribute("id", "img_pix");
//   this.image.src = "../img/four.jpg";
//   this.image.classList.add(id);
//   this.img_cont = document.getElementById("img_container");
//    this.img_cont.appendChild(this.image);
// }

// function imgGenerator(){
//   new createImage("img_pix");
// }
// function del(){
//   document.querySelector(".img_pix").remove();
// }


//The rock, paper, scissors challenge.


function games() {
  let botChoice = bChoice();
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "msg");
  let choice = document.getElementById("rock");
  //  console.log(choice.getAttribute("id"));


  if (choice.getAttribute("id") === "rock" && botChoice === "rock") {
    let message = document.createTextNode("You Tied!!");
    h3.appendChild(message);
    document.getElementById("imgcont").appendChild(h3).style = "background-color: #096665";


  } else if (choice.getAttribute("id") === "rock" && botChoice === "paper") {
    let messageTwo = document.createTextNode("The Bot Won!!");
    h3.appendChild(messageTwo);
    document.getElementById("imgcont").appendChild(h3);
  } else if (choice.getAttribute("id") === "rock" && botChoice === "scissors") {
    let messageThree = document.createTextNode("You Won");
    h3.appendChild(messageThree);
    document.getElementById("imgcont").appendChild(h3).style = "background-color: green";
  }

  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();
  document.getElementById("rock").style = "box-shadow: 0 5px 5px 5px rgba(0, 0, 100, 2); height: 5rem; width: 20%;"

}

function paper() {
  let botChoice = bChoice();
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "msg");
  let choice = document.getElementById("paper");
  (choice.getAttribute("id"));

  if (choice.getAttribute("id") === "paper" && botChoice === "paper") {
    let message = document.createTextNode("You Tied!!");
    h3.appendChild(message);
    document.getElementById("imgcont").appendChild(h3).style = "background-color: #096665";


  } else if (choice.getAttribute("id") === "paper" && botChoice === "scissors") {
    let messageTwo = document.createTextNode("The Bot Won!!");
    h3.appendChild(messageTwo);
    document.getElementById("imgcont").appendChild(h3);
  } else if (choice.getAttribute("id") === "paper" && botChoice === "rock") {
    let messageThree = document.createTextNode("You Won!!");
    h3.appendChild(messageThree);
    document.getElementById("imgcont").appendChild(h3).style = "background-color: green";
  }

  document.getElementById("rock").remove();
  document.getElementById("scissors").remove();
  document.getElementById("paper").style = "box-shadow: 0 5px 5px 5px rgba(0, 0, 100, 2); height: 5rem; width: 20%;"


}

function scissors() {
  let botChoice = bChoice();
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "msg");
  let choice = document.getElementById("scissors");
  (choice.getAttribute("id"));


  if (choice.getAttribute("id") === "scissors" && botChoice === "scissors") {
    let message = document.createTextNode("You Tied!!");
    h3.appendChild(message);
    document.getElementById("imgcont").appendChild(h3).style = "background-color: #096665";


  } else if (choice.getAttribute("id") === "scissors" && botChoice === "rock") {
    let messageTwo = document.createTextNode("The Bot Won!!");
    h3.appendChild(messageTwo);
    document.getElementById("imgcont").appendChild(h3);
  } else if (choice.getAttribute("id") === "scissors" && botChoice === "paper") {
    let messageThree = document.createTextNode("You Won!!");
    h3.appendChild(messageThree);
    document.getElementById("imgcont").appendChild(h3).style = "background-color: green";
  }

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  // document.getElementById("rock").style = "box-shadow: 0 5px 5px 5px rgba(0, 0, 100, 2); height: 5rem; width: 20%;"

}



function bChoice() {
  let gameItems = ["rock", "paper", "scissors"];
  randomItem = gameItems[Math.floor(Math.random() * gameItems.length)];
  let imag = document.createElement("img");
  imag.setAttribute("id", "pixa");
  let screen = document.getElementById("games");

  if (randomItem === "rock") {
    imag.src = "img/rock2a.jpg";
    screen.appendChild(imag);


  } else if (randomItem === "paper") {
    imag.src = "img/paper2.jpg";
    screen.appendChild(imag);
  } else if (randomItem === "scissors") {
    imag.src = "img/scissors.jpg";
    screen.appendChild(imag);

  }
  return randomItem;

}


function btn_change() {
  let colours = document.getElementsByTagName("button");
  let new_color = document.getElementById("select_me").value;
  let btn_ids = ["btn_red1", "btn_blue2", "btn_green1"];
  let rand_colours = ["red", "blue", "green"];
  let rand = rand_colours[Math.floor(Math.random() * rand_colours.length)];
  for (let i = 0; i < colours.length; i++) {

    if (new_color === "Red") {
      colours[i].style.background = "red";
    } else if (new_color === "Blue") {
      colours[i].style.background = "blue";
    } else if (new_color === "Green") {
      colours[i].style.background = "green";
    } else if (new_color === "Reset") {
      colours[i].removeAttribute("style");

    } else if (new_color === "Random") {
      for (let j = 0; j < btn_ids.length; j++) {
        document.getElementById(btn_ids[j]).style.background = rand;

      }
    }
  }

}

document.querySelector(".btn_hit").addEventListener("click", hitFunc);
document.querySelector(".btn_stand").addEventListener("click", stand);
// document.querySelector(".btn_deal").addEventListener("click", dealFunc);
let msg = document.querySelector(".displayMsg");
let winCount = document.querySelector(".win");
let lossCount = document.querySelector(".loss");
let drawCount = document.querySelector(".draw");
let card_display = document.querySelector(".you_container");
let computerCard_display = document.querySelector(".Dealer_container");
let you_h3 = document.getElementById("h3");
let Dealer_h3 = document.getElementById("delh3");
let cardNumbers = ["8", "2", "7", "3", "1"];
let answer1 = 0;
let answer2 = 0;
let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;
let pickedCards = "";
let rands = 0;
let counter = 0;

function hitFunc() {
  let cards = ["img/8.jpeg", "img/2.jpg", "img/7.jpeg", "img/3.jpeg", "img/1.jpeg"];
  let card_image = document.createElement("img");
  card_image.setAttribute("id", "cimg");
  let random_cards = cards[Math.floor(Math.random() * cards.length)];
  card_image.src = random_cards;
  card_display.appendChild(card_image);


  function count() {
    for (let i = 0; i < cards.length; i++) {
      if (random_cards === cards[i]) {
        answer1 += parseInt(cardNumbers[i]);

      }

    }
    you_h3.innerHTML = answer1;

  }
  count();

}


function stand() {
  rands = Math.floor(Math.random() * 5 + 1);
  counter = rands;
  function sleep() {
    if (counter > 0) {
      computerCard();
      counter--;
    } else {
      clearInterval(interval);
      outputMssg();
      scoreCount();
    }

  }
  const interval = setInterval(sleep, 1000);

}


function computerCard() {

  let cards = ["img/8.jpeg", "img/2.jpg", "img/7.jpeg", "img/3.jpeg", "img/1.jpeg"];
  let card_image = document.createElement("img");
  let random_cards = cards[Math.floor(Math.random() * cards.length)];
  card_image.src = random_cards;
  computerCard_display.appendChild(card_image);
  function count() {
    for (let i = 0; i < cards.length; i++) {
      if (random_cards === cards[i]) {
        answer2 += parseInt(cardNumbers[i]);

      }

    }

    Dealer_h3.innerHTML = answer2;

  }
  count(); 
}


function outputMssg() {
  // if(answer1 > answer2 && answer1 <= 21){
  //   return "You Won!!" || "You Lost!!";
  // }else if(answer2 > answer1 && answer2 <= 21){
  //   return "The Computer Won!!" || "The Computer Lost!!";
  // }else if(answer2 === answer1){
  //   return "It's a Draw!!";
  // }else{
  //   return "Invalid!!"
  // }
  if (answer1 > answer2 && answer1 <= 21) {
    msg.textContent = "You Won!!";
    msg.style.color = "darkmagenta";
  } else if (answer2 > answer1 && answer2 <= 21) {
    msg.textContent = "The Computer Won!!";
    msg.style.color = "darkmagenta";
  } else if (answer1 === answer2) {
    msg.textContent = "It's a draw";
    msg.style.color = "navy";
  } else if (answer1 > 21 && answer2 <= 21) {
    msg.textContent = "You Lost!!";
    msg.style.color = "red";
  } else if (answer2 > 21 && answer1 <= 21) {
    msg.textContent = "The computer Lost!!";
    msg.style.color = "red";
  } else ("Invalid!!");

}

let scoreCount = () => {
  if (msg.textContent === "You Won!!") {
    winCounter++;
    winCount.innerHTML = winCounter;
  } else if (msg.textContent === "The Computer Won!!") {
    lossCounter++;
    lossCount.innerHTML = lossCounter;
  } else if (msg.textContent === "It's a draw") {
    drawCounter++;
    drawcount.innerHTML = drawCounter;
  } else {
    alert("Invalid");
  }


}


let dealFunc = () => {
  card_display.innerHTML = "";
  answer1 = 0;
  you_h3.innerHTML = 0;

  computerCard_display.innerHTML = "";
  answer2 = 0;
  Dealer_h3.innerHTML = 0;
  msg.innerHTML = "Let's Play";
  msg.style.color = "";
  winCount.innerHTML = 0;
  winCounter = 0;
  lossCount.innerHTML = 0;
  lossCounter = 0
  drawCount.innerHTML = 0;
  drawCounter = 0;
}
dealFunc();























