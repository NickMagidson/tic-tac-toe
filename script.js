const Player = (sign) => {
    this.sign = sign;
  
    const getSign = () => {
      return sign;
    };
  
    return { getSign };
  };


const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", "", ]

    const setBoard = (index, sign) => {
        if (index > board.length) return;
        board[index] = sign;
    }

    const getBoard = (index) => {
        if (index > board.length) return;
        return board[index];
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
            
        }
    }
    return {setBoard, getBoard, reset};
})();





// displayController
    //lets players make marks on baored
    //takes "taken spots" into account
    
    //player 1

    //player 2

    //CODE HERE//
    // queryselect .field
    // getID message
    // getID restart-button

    //fieldElements.forEach((field) => {
        //field.addeventlisten(click, 
        //})
    //})






//Checks for when game is over
    //determine winner of looser
    //check for tie
    // let winConditions = wins array 





//redner elements on page