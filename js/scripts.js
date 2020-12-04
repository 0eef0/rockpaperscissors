//This function gets the player's choice and returns it
function makeChoice(choice){
    console.log(choice);
    return choice;
}
//This function randomly generates a number and returns the corresponding choice
function getSiteChoice(){
    var choice = Math.floor(Math.random() * 3 + 1);
    switch(choice){
        case 1:
            console.log("rock");
            document.getElementById("exclaim").innerHTML = "ROCK!!!";
            return "rock";
            break;
        case 2:
            console.log("paper");
            document.getElementById("exclaim").innerHTML = "PAPER!!!";
            return "paper";
            break;
        case 3:
            console.log("scissors");
            document.getElementById("exclaim").innerHTML = "SCISSORS!";
            return "scissors";
            break;
    }
}

//this function takes in both the player's and the computer's choices and determines a winner
function gameResult(player, site){
    switch(player){
        case "rock":
            switch(site){
                case "rock":
                    console.log("tie");
                    return "tie";
                    break;
                case "paper":
                    console.log("lose");
                    return "lose";
                    break;
                case "scissors":
                    console.log("win");
                    return "win";
                    break;
            }
            break;
        case "paper":
            switch(site){
                case "paper":
                    console.log("tie");
                    return "tie";
                    break;
                case "scissors":
                    console.log("lose");
                    return "lose";
                    break;
                case "rock":
                    console.log("win");
                    return "win";
                    break;
                }
            break;
        case "scissors":
            switch(site){
                case "scissors":
                    console.log("tie");
                    return "tie";
                    break;
                case "rock":
                    console.log("lose");
                    return "lose";
                    break;
                case "paper":
                    console.log("win");
                    return "win";
                    break;
            }
            break;
    }
}

//these variables and function keeps score and announce who won the game
var playerScore = 0;
var computerScore = 0;
function addScore(result){
    switch(result){
        case "win":
            document.getElementById("result").innerHTML = "Player Point!";
            playerScore++;
            document.getElementById("player").innerHTML = playerScore;
            break;
        case "lose":
            document.getElementById("result").innerHTML = "Computer Point!";
            computerScore++;
            document.getElementById("computer").innerHTML = computerScore;
            break;
        case "tie":
            document.getElementById("result").innerHTML = "Tie!";
    }
}

//function and variable below start the game
var game = '<img src="images/computer.png" id="theCPU">'+
'    <h1 id="exclaim"></h1>'+
''+
'    <img src="images/rock.jpg" class="choice" onclick="addScore(gameResult(makeChoice(\'rock\'), getSiteChoice())); checkForWin();">'+
'    <img src="images/paper.jpg" class="choice" onclick="addScore(gameResult(makeChoice(\'paper\'), getSiteChoice())); checkForWin();">'+
'    <img src="images/scissors.jpg" class="choice" onclick="addScore(gameResult(makeChoice(\'scissors\'), getSiteChoice())); checkForWin();">'+
'    <table>'+
'        <tr>'+
'            <td><h1>Player Score</h1></td>'+
'            <td><h1>Computer Score</h1></td>'+
'        </tr>'+
'        <tr>'+
'            <td><h1 id="player">0</h1></td>'+
'            <td><h1 id="computer">0</h1></td>'+
'        </tr>'+
'        <tr>'+
'            <td colspan="2"><h1 id="result"></h1></td>'+
'        </tr>'+
'    </table>';
	
function startGame(rounds){
    totalRounds = rounds;
    document.getElementById("mainDiv").innerHTML = game;
}

//the function and variable below end the game after someone wins the game
var totalRounds = 0;
function checkForWin(){
    if(playerScore == Math.ceil(totalRounds / 2) || computerScore == Math.ceil(totalRounds / 2)){
        document.getElementById("mainDiv").innerHTML = "Finish";
    }
}