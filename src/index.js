var firstPlayerTurn = false;
// var playerOneName = prompt("Enter Player One Name: ");
// var playerTwoName = prompt("Enter Player Two Name: ");
var playerOneName = "A";
var playerTwoName = "B";
var secondPlayerTurn = false;
var secondPlayerTurn = false;
var gameInProgress = false;

$(document).keydown((event) => {
  if (event.key == "s" && !gameInProgress) {
    gameInProgress = true;

    if (Math.floor(Math.random() * 2) + 1 === 1) {
      firstPlayerTurn = true;
      $(".title").text(playerOneName + " turn");
    } else {
      secondPlayerTurn = true;
      $(".title").text(playerTwoName + " turn");
    }
  }
});

$(".grid-container").on("click", "div.empty", function () {
  if (firstPlayerTurn && gameInProgress) {
    occupy(this);
    checkWinner();
    nextTurn();
  } else if (secondPlayerTurn && gameInProgress) {
    occupy(this);
    checkWinner();
    nextTurn();
  }
});

function occupy(square) {
  if (firstPlayerTurn) {
    $(square).addClass("p1-occupied");
    $(square).removeClass("empty");
  } else {
    $(square).addClass("p2-occupied");
    $(square).removeClass("empty");
  }
}

function nextTurn() {
  if (firstPlayerTurn && gameInProgress) {
    firstPlayerTurn = false;
    secondPlayerTurn = true;
    $(".title").text(playerTwoName + " turn");
  } else if (secondPlayerTurn && gameInProgress) {
    firstPlayerTurn = true;
    $(".title").text(playerOneName + " turn");
    secondPlayerTurn = false;
  }
}

function checkWinner() {
  if (
    $("#one").hasClass("p1-occupied") &&
    $("#two").hasClass("p1-occupied") &&
    $("#three").hasClass("p1-occupied")
  ) {
    gameInProgress = false;
    $(".title").text(playerOneName + " won!!!");
  }
  if (
    $("#one").hasClass("p2-occupied") &&
    $("#two").hasClass("p2-occupied") &&
    $("#three").hasClass("p2-occupied")
  ) {
    gameInProgress = false;
    $(".title").text(playerTwoName + " won!!!");
  }

  if (
    $("#four").hasClass("p1-occupied") &&
    $("#five").hasClass("p1-occupied") &&
    $("#six").hasClass("p1-occupied")
  ) {
    gameInProgress = false;
    $(".title").text(playerOneName + " won!!!");
  }
  if (
    $("#four").hasClass("p2-occupied") &&
    $("#five").hasClass("p2-occupied") &&
    $("#six").hasClass("p2-occupied")
  ) {
    gameInProgress = false;
    $(".title").text(playerTwoName + " won!!!");
  }

  if (
    $("#seven").hasClass("p1-occupied") &&
    $("#eight").hasClass("p1-occupied") &&
    $("#nine").hasClass("p1-occupied")
  ) {
    gameInProgress = false;
    $(".title").text(playerOneName + " won!!!");
  }
  if (
    $("#seven").hasClass("p2-occupied") &&
    $("#eight").hasClass("p2-occupied") &&
    $("#nine").hasClass("p2-occupied")
  ) {
    gameInProgress = false;
    $(".title").text(playerTwoName + " won!!!");
  }
}
