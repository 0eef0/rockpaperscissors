//This function gets the player's choice and returns it
function makeChoice(choice){
    console.log(choice);
    return choice;
}
//This function randomly generates a number and returns the corresponding choice
function getSiteChoice(goodChoice){
    var choice = Math.floor(Math.random() * 3 + 1);
    if(hardMode){
        switch(goodChoice){
            case "rock":
                document.getElementById("exclaim").innerHTML = "PAPER!!!";
                paper.play();
                setTimeout(() => {  document.getElementById("exclaim").innerHTML = ""; }, 1000);
                return "paper";
                break;
            case "paper":
                document.getElementById("exclaim").innerHTML = "SCISSORS!";
                scissors.play();
                setTimeout(() => {  document.getElementById("exclaim").innerHTML = ""; }, 1000);
                return "scissors";
                break;
            case "scissors":
                document.getElementById("exclaim").innerHTML = "ROCK!!!";
                rock.play();
                setTimeout(() => {  document.getElementById("exclaim").innerHTML = ""; }, 1000);
                return "rock";
                break;
        }
    }else{
        switch(choice){
            case 1:
                console.log("rock");
                document.getElementById("exclaim").innerHTML = "ROCK!!!";
                rock.play();
                setTimeout(() => {  document.getElementById("exclaim").innerHTML = ""; }, 1000);
                return "rock";
                break;
            case 2:
                console.log("paper");
                document.getElementById("exclaim").innerHTML = "PAPER!!!";
                paper.play();
                setTimeout(() => {  document.getElementById("exclaim").innerHTML = ""; }, 1000);
                return "paper";
                break;
            case 3:
                console.log("scissors");
                document.getElementById("exclaim").innerHTML = "SCISSORS!";
                scissors.play();
                setTimeout(() => {  document.getElementById("exclaim").innerHTML = ""; }, 1000);
                return "scissors";
                break;
        }
    }
}

//this function takes in both the player's and the computer's choices and determines a winner
function gameResult(player, site){
    if(site == "fairWin"){
        return "lose";
    }else{
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
}

//these variables and function keeps score and announces who won the game
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
'    <h2 id="exclaim"></h2>'+
''+
'    <img src="images/rock.jpg" class="choice" onclick="addScore(gameResult(makeChoice(\'rock\'), getSiteChoice(\'rock\'))); checkForWin();">'+
'<br>' +
'    <img src="images/paper.jpg" class="choice" onclick="addScore(gameResult(makeChoice(\'paper\'), getSiteChoice(\'paper\'))); checkForWin();">'+
'    <table>'+
'        <tr>'+
'            <td><h2>Player Score</h2></td>'+
'            <td><h2>Computer Score</h2></td>'+
'        </tr>'+
'        <tr>'+
'            <td><h2 id="player">0</h2></td>'+
'            <td><h2 id="computer">0</h2></td>'+
'        </tr>'+
'        <tr>'+
'            <td colspan="2"><h2 id="result"></h2></td>'+
'        </tr>'+
'    </table>' +
'<br>' +
'    <img src="images/scissors.jpg" class="choice" onclick="addScore(gameResult(makeChoice(\'scissors\'), getSiteChoice(\'scissors\'))); checkForWin();">'
;

var gameTable = '    <table id="finalScore">'+
'        <tr>'+
'            <td><h2>Player Score</h2></td>'+
'            <td><h2>Computer Score</h2></td>'+
'        </tr>'+
'        <tr>'+
'            <td><h2 id="player"></h2></td>'+
'            <td><h2 id="computer"></h2></td>'+
'        </tr>'+
'        <tr>'+
'            <td colspan="2"><h2 id="result"></h2></td>'+
'        </tr>'+
'    </table>';
	
function startGame(rounds){
    checkDifficulty();
    totalRounds = rounds;
    document.getElementById("mainDiv").style.textAlign = "left";
    document.getElementById("mainDiv").innerHTML = game;
}

//the function and variable below end the game after someone wins the game
var totalRounds = 0;
function checkForWin(){
    setTimeout(() => {  
        if(playerScore == Math.ceil(totalRounds / 2) || computerScore == Math.ceil(totalRounds / 2)){
            document.getElementById("mainDiv").style.textAlign = "center";
            if(playerScore > computerScore){
                document.getElementById("mainDiv").innerHTML = "<h2>Player WIN!</h2>" + gameTable;
                document.getElementById("player").innerHTML = playerScore;
                document.getElementById("computer").innerHTML = computerScore;
                document.getElementById("result").innerHTML = "<button>Reset</button>";
                document.getElementById("result").innerHTML = "<button onclick='resetGame()'>Reset</button>";
            }else{
                document.getElementById("mainDiv").innerHTML = "<h2>Computer WIN!</h2>" + gameTable;
                document.getElementById("player").innerHTML = playerScore;
                document.getElementById("computer").innerHTML = computerScore;
                document.getElementById("result").innerHTML = "<button onclick='resetGame()'>Reset</button>";
            }
        }
    }, 1000);

}

//Below is the code for hard mode which will totally be fair
var hardMode = false;
function checkDifficulty(){
    if(document.getElementById("diffCheck").checked){
        hardMode = true;
    }
}

//function and variable below resets the game
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById('mainDiv').innerHTML = startMenu;
    hardMode = false;
}
var startMenu = '<h2>How would you like to play?</h2>'+
'        <button onclick="startGame(3)">Best of 3</button>'+
'        <button onclick="startGame(5)">Best of 5</button>'+
'        <button onclick="startGame(7)">Best of 7</button>'+
''+
'        <input type="checkbox" id="diffCheck">'+
'        <label for="diffCheck">Hard Mode</label>';