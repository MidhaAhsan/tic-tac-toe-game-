let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true //playerx , player 0
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

  boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked ")
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
          } else {
            //playerX
            box.innerText = "X";
            turnO = true;
          }
          box.disabled = true;
  checkwinner();

    });
    
  });

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  }; 
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  
  };
  

  const checkwinner = () => {
    for (let patterns of winPatterns)
    {
        let posva1 = boxes[patterns[0]].innerText;
        let posva2 = boxes[patterns[1]].innerText;
        let posva3 = boxes[patterns[2]].innerText;

        if (posva1 != "" && posva2 != "" && posva3 != "") {
          if (posva1 === posva2 && posva2 === posva3 ) {
            showWinner(posva1);
          }
        }
    }
  }

  newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);