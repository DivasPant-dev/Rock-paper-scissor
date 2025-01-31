const choice = ["rock", "paper", "scissor"];

function onGame(playerChoice) {
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
        

    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissor") ? "You WIN!" : "You Lost";
                break;
            
            case "paper":
                result = (computerChoice === "rock") ? "You WIN!" : "You Lost";
                break;

            case "scissor":
                result = (computerChoice === "rock") ? "You WIN!" : "You Lost";
                break;
        }

        document.querySelector(".result").innerHTML = result + ", Computer Choice was " + computerChoice;
    }
}