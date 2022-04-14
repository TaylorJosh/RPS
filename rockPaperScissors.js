const hands = ['rock' , 'paper', 'scissors'];

function choice() {
  return hands[parseInt(Math.random()*10)%3];
}

let player1 = {name: "Joe", choice: choice};

let player2 = {name: "Jane", choice: choice};

function playRound () {

        let player1Choice = player1.choice();
        let player2Choice = player2.choice();

        console.log(player1.name + ' chose ' + player1Choice);
        console.log(player2.name + ' chose ' + player2Choice);
       
              if (player1Choice === player2Choice) {
                  console.log("tie");
                 return null;
              } else if (player1Choice === "rock" && player2Choice === "scissors") {
                  // p1 wins or p2 loses
                  console.log(player1.name, 'wins!');
                  return player1;
               } 
               else if (player1Choice === "paper" && player2Choice === "rock") {
                 // p1 wins or p2 loses
                 console.log(player1.name, 'wins!');
                 return player1;
             }
                 else if (player1Choice === "scissors" && player2Choice === "paper") {
                 // p1 wins or p2 loses
                 console.log(player1.name, 'wins!');
                 return player1;
             }else {
                     // p2 wins or p1 loses
                   console.log(player2.name, 'wins!');
                     return player2;
                 }
            
       }
      

       let playGame = (player1, player2, playUntil) => {
    
        let player1Wins = 0;
        let player2Wins = 0;
    
        while (player1Wins < playUntil && player2Wins < playUntil) {
            
            console.log('Current Score: ', player1.name, ':' ,player1Wins)
            console.log('Current Score: ', player2.name, ':' ,player2Wins)
            if (!playRound(player1, player2)) {
    
            } else if (playRound(player1, player2) === player1) {
                player1Wins++;
            } else {
                player2Wins++;
            }
        }  
    
        if (player1Wins === playUntil) {
            return player1;
        } else {
            return player2;
        }
    }

 console.log(player1.name.length)

 console.log(playGame(player1, player2, 5))

 module.exports.hands = hands;
 module.exports.player1 = player1;
 module.exports.player2 = player2;
 module.exports.playRound = playRound;
