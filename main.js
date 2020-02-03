document.addEventListener("DOMContentLoaded",function(event) {
    
    let turnNumber = 0;
    let playerScore = 0;
    let computerScore = 0;
    
    
    const dealB = document.getElementById("deal");
    const nextB = document.getElementById("next");
    
    playerArr = [];
    computerArr = [];
    
    dealB.addEventListener("click",function(){
        turnNumber = 0;
        playerScore = 0;
        computerScore = 0;
        
        let i; // 
        let random; //
        
        deck.load();
        console.log(deck.cardArray);
        for(i = 0; i< 52; i++){ // this shuffles
            const temp = Math.floor(Math.random()*(i+1)); //creates random number
            const exchange = deck.cardArray[temp];
            deck.cardArray[temp] = deck.cardArray[i];
            deck.cardArray[i] = exchange;
        }
        for(j = 0; j < 26; j++) {
            playerArr[j] = deck.cardArray[j];
            computerArr[j]=deck.cardArray[j + 26]; // this allows a division and creates a separate deck for both player and computer gamer.
        }
        
        dealB.style.display = "none";
        nextB.style.display = "block";
        
    });
    
    nextB.addEventListener("click",function(){
        let playerC = document.getElementById("playerCard");
        let computerC = document.getElementById("computerCard");
        let end = document.getElementById("end");
        let playerS = document.getElementById("playerScore");
        let computerS = document.getElementById("computerScore");
        

        
        let pRank = playerArr[turnNumber].rank;
        let pSuit = playerArr[turnNumber].suit;
        let cRank = computerArr[turnNumber].rank;
        let cSuit = computerArr[turnNumber].suit;
        
        
        //from here, this displays the player's + computer's cards with something like x "of " d
        playerC.innerHTML = faces(pRank) + " of " + tostring(pSuit);
        computerC.innerHTML = faces(cRank) + " of " + tostring(cSuit);
        playerC.style.color = colorA(pSuit);
        computerC.style.color = colorA(cSuit);
        
        
        if(pRank > cRank) {
            end.innerHTML = "Player Wins, WOO WEE";
            playerScore++
        } else if (pRank == cRank){
            if(pSuit > cSuit){
                end.innerHTML = "Computer Wins";
                playerScore++;
            } else {
                end.innerHTML = "Computer Wins, uh OH";
                computerScore++;
            }
        } else {
            end.innerHTML = "Computer Wins, ohhh NO";
            computerScore++;
        }
        playerS.innerHTML = "Player Score" + playerS;
        computerS.innerHTML = "Computer Score" + computerS;
        
        
        turnNumber++;
        document.getElementById("turnNumber").innerHTML = "Turn Number:" + turnNumber; 
        
        if(turnNumber > 25){
            if(playerS > computerS){
               end.innerHTML = "Game Over PLAYER WINS!"
               } else if(playerS == computerS) {
                   end.innerHTML = "Game Over TIE!"
               } else {
                   end.innerHTML = "Game Over YOU WIN!"
               }
            dealB.style.display = "block"; // start over button 
            nextB.style.display = "none"; // not shown because deal button has to be shown
        }
        
        function tostring(x){
                switch(x){

            case 3: 
                suit = "HEARTS";
                break;
            case 2: 
                suit = "DIAMONDS";
                break;
            case 1:
                suit = "CLUBS";
                break;
            case 0:
                suit = "SPADES";
                break;
        }
        return suit;
    }
    
    function faces(y) {
        switch(y){
            default: 
                rank = y;
                break;
            case 14: 
                rank = "ACE";
                break;
            case 13: 
                rank = "KING";
                break;
            case 12:
                rank = "QUEEN";
                break;
            case 11:
                rank = "JACK";   
                break;

        }
        return rank;
    }
    
    function colorA(x) {
        switch(x) {
            case 2:
                color = "red";
                break;
            case 3:
                color = "red";
                break;
            default: 
                color = "black";
        }
        return color; 
    }
        
    });
    
});