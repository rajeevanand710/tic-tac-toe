let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container")
let newBtn = document.querySelector("#new-btn")
let resetBtn = document.querySelector("#reset-btn")
let scroll = document.querySelector(".scroll")
let owon = document.querySelector("#owon")

let turnO = true;
let count = 0;

const winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

const addColor = (box) => {
    if(turnO===true){
        box.style.color = "black";
    }
}

const checkWinner = () => {
    for(pattern of winnerPatterns){
        let pos1Val = boxes[pattern[0]].innerHTML
        let pos2Val = boxes[pattern[1]].innerHTML
        let pos3Val = boxes[pattern[2]].innerHTML

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerHTML = "O";
            addColor(box);
            turnO = false;
            
        }
        else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        
        count++;
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            showDraw();
        }
        
    })
    
})





const showDraw = () => {
    msgContainer.classList.remove("hide")
    scroll.classList.remove("hide")
    msg.innerHTML = `Yupp :( Your game is DRAW!`
    disableBoxes();
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide")
    scroll.classList.remove("hide")
    msg.innerHTML = `Congratulations! ${winner} is the winner!`
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes()
    msgContainer.classList.add("hide")
    scroll.classList.add("hide")
}

const enableBoxes = () => {
    for(let box of boxes){
        box.innerHTML = ""
        box.disabled = false;
    }
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
