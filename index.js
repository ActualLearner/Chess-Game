// Generate Chess board
for (let i = 0; i < 8; i++) {

let numberLabel = document.createElement("div");
numberLabel.innerHTML = i + 1;

    for (let j = 0; j < 8; j++) {

        let letters = "abcdefgh";
        let letterLabel = document.createElement("div");
        letterLabel.innerHTML = letters[j];

        let block = document.createElement("div");
        block.classList.add("block");

        // For chess blocks
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                block.classList.add("white");
            } else {
                block.classList.add("black");
            }
        } else {
            if (j % 2 == 0) {
                block.classList.add("black");
            } else {
                block.classList.add("white");
            }
        }

        let board = document.querySelector("#board");
        board.appendChild(block);

        // attaching number labels
        if(j == 0){
            numberLabel.classList.add("numberLabel");
            block.appendChild(numberLabel);
        }

        // attaching letter labels
        if(i == 7){
            letterLabel.classList.add("letterLabel");
            block.appendChild(letterLabel);
        }
    }
}

//