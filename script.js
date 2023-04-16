// Consts Variales
const theButton = document.getElementById("theButton");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Script Helper Variables
let width = window.screen.width;
let buttonWidth = theButton.offsetWidth;
let buttonPosition = 0;
let lastMove = 0;

// Get Random Button positions
function randomPosition(){
    let position;

    let random = Math.floor(Math.random() * (width - buttonWidth));
    while (Math.abs(random - lastMove) < buttonWidth + 10){
        random = Math.floor(Math.random() * (width/2));
        console.log(random)
    }

    lastMove = random;

    if (random > (width/2)){
        random = Math.floor(random / 2);
    } else {
        random = - Math.floor(random / 2);
    }

    if (buttonPosition < 0){
        position = random
    } else {
        position = -random
    }
    
    return position;
}

theButton.addEventListener("mouseover", () => {
    if ((username.checkValidity()) && (password.checkValidity())){
        return;
    }

    let position = randomPosition();
    buttonPosition = position;

    console.log("Position: " + position)
    theButton.style.transform = `translateX(${position}px)`;
})

theButton.addEventListener("click", () => {
    if ((username.checkValidity()) && (password.checkValidity())){
        alert("Yay!\nYou Passed")
        username.value = "";
        password.value = "";
        return;
    }

    let position = randomPosition();
    buttonPosition = position;

    console.log("Position: " + position)
    theButton.style.transform = `translateX(${position}px)`;
})


username.addEventListener("input", () => {
    if ((username.checkValidity()) && (password.checkValidity())){
        theButton.style.transform = "translateX(0)"
    }
})

password.addEventListener("input", () => {
    if ((username.checkValidity()) && (password.checkValidity())){
        theButton.style.transform = "translateX(0)"
    }
})
