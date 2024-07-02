function getRandomInt(max){

    return Math.floor(Math.random() * max);

}


function getComputerChoice(){


    let answerCode = getRandomInt(3);

    if(answerCode == 0)
        return "rock";
    else if(answerCode == 1)
        return "paper";
    else return "scissor";


}


function getHumanChoice(){

    let answer = prompt("Enter your choice").toLowerCase();

    if(answer != "rock" && answer != "paper" && answer != "scissor"){
        alert("Invalid answer, automtically selecting an option");
        answer = getComputerChoice();
    }
    
    return answer;
    
}



function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){

        if(humanChoice == "rock")
            if(computerChoice == "paper"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else if(computerChoice == "scissor"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            else console.log(`It is a draw! Both of you chose ${humanChoice}`);

    
        if(humanChoice =="paper")
            if(computerChoice == "rock"){
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            }
            else if(computerChoice == "scissor"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else console.log(`It is a draw! Both of you chose ${humanChoice}`);

    
        if(humanChoice == "scissor")
            if(computerChoice == "paper"){
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            }
            else if(computerChoice == "rock"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else console.log(`It is a draw! Both of you chose ${humanChoice}`);

        
        console.log(`Score: ${humanScore}(you):${computerScore}(comp)`);
            
    
    }

    for(let i = 0; i < 5; i++)
        playRound();

    if(humanScore > computerScore)
        console.log(`You won with a score of ${humanScore}(you) to ${computerScore}(comp)!`)
    else if(humanScore < computerScore)
        console.log(`You lost with a score of ${humanScore}(you) to ${computerScore}(comp) `)
    else console.log(`It is a draw with a score of ${humanScore}(you) to ${computerScore}(comp) `)


}

playGame();