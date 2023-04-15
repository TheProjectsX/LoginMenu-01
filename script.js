the_button.addEventListener("mouseover", () => {
    if ((!(username.checkValidity())) || (!(password.checkValidity()))) {
        //93.45px
        let buttonWidth = the_button.offsetWidth;
        let screenWidth = window.innerWidth - (buttonWidth*2); // to avoid overflow
        let buttonPosition = Math.floor((screenWidth/2) - the_button.getBoundingClientRect().left + (buttonWidth/2));

        function getRandomXPosition() {
            let maxMove = Math.floor((screenWidth / 2) - (buttonWidth / 2));
            let minMove = -maxMove;

            let moveTo = Math.floor(Math.random() * (screenWidth - buttonWidth)) - maxMove;
            
            let diff = Math.floor(buttonPosition+moveTo);

            if ((diff >= -180) && (diff <= 180)){

                if (diff < 0){
                    moveTo -= 180;
                } else{
                    moveTo += 180;
                }
            }

            return moveTo;
        }

        let xPosition = getRandomXPosition();
        console.log("Position:", xPosition);

        the_button.style.transform = `translateX(${xPosition}px)`;
    }
})

username.addEventListener("input", () => {
    if ((username.checkValidity()) && (password.checkValidity())){
        the_button.style.transform = "translateX(0)"
    }
})

password.addEventListener("input", () => {
    if ((username.checkValidity()) && (password.checkValidity())){
        the_button.style.transform = "translateX(0)"
    }
})