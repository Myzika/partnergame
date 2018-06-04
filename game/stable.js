function game() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let hasDoorknob = false;

    levelOne();

    function levelOne() {
        /**
         * These draw in the images onto the canvas
         */
        ctx.drawImage(document.getElementById("backgroundone"), 0, 0);
        ctx.drawImage(document.getElementById("onedoor"), 420, 232);
        ctx.drawImage(document.getElementById("onejacket"), 987, 126);
        ctx.drawImage(document.getElementById("onedoorknob"), 777, 780);
        ctx.drawImage(document.getElementById("onebroom"), 189, 210);

        /*
         * This creates the default display on the canvas.
         */
        ctx.font = "60px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("You wake up in a dark, cramped space", 672, 1100);
        ctx.fillText("with no grasp of where you are or how", 672, 1170);
        ctx.fillText("you got there. It's very odd.", 672, 1240);

        /**
         * Makes it so that on click, saves the coordinates of the click and it gets the colour
         * @param event the click
         */
        canvas.onmousedown = function levelOneGame(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            /**
             * These take the red value of the clicked pixel and execute different displays.
             */
            if (data[0] === 5) {
                ctx.clearRect(70, 966, 1211, 336);
                ctx.font = "60px VT323";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("A jacket with the name 'Wilco' on it", 515, 1060);
                ctx.fillText("and 'JANITOR' on the sleeve.", 515, 1130);
                ctx.fillText("It's kind of heavy. Take the jacket?", 515, 1200);
                ctx.drawImage(document.getElementById("yes"), 966, 945);
                ctx.drawImage(document.getElementById("no"), 966, 1134);
            }
            else if (data[0] === 80) {
                ctx.clearRect(70, 966, 1211, 336);
                ctx.font = "60px VT323";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("Just a door. It's very sturdy...", 672, 1100);
            }
            else if (data[0] === 85) {
                ctx.clearRect(70, 966, 1211, 336);
                ctx.font = "60px VT323";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("A broom. There are spots in the", 672, 1100);
                ctx.fillText("dust next to it that makes it", 672, 1170);
                ctx.fillText("seem like there were others.", 672, 1240);
            }
            else if (data[0] === 215) {
                if (hasDoorknob === true) {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("You place the doorknob in the", 672, 1100);
                    ctx.fillText("hole, push it in a little bit,", 672, 1170);
                    ctx.fillText("twist it, and the door swings open.", 672, 1240);
                    setTimeout(
                        levelTwo, 4000
                    )
                }
                else {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("Seems like the doorknob is missing.", 672, 1100);
                }
            }
            else if (x > 966) {
                if (y > 945) {
                    if (y < 1134) {
                        ctx.clearRect(70, 966, 1211, 336);
                        ctx.font = "60px VT323";
                        ctx.fillStyle = "white";
                        ctx.textAlign = "center";
                        ctx.fillText("When you pick up the jacket,", 672, 1100);
                        ctx.fillText("you notice there is a doorknob", 672, 1170);
                        ctx.fillText("which you put in your pocket.", 672, 1240);
                        hasDoorknob = true;
                    }
                    else if (y > 1134) {
                        ctx.clearRect(70, 966, 1211, 336);
                        ctx.font = "60px VT323";
                        ctx.fillStyle = "white";
                        ctx.textAlign = "center";
                        ctx.fillText("You put the jacket back on the hook.", 672, 1100);
                    }
                }
            }
        };

    }

    function levelTwo() {
        ctx.drawImage(document.getElementById("twobackground"), 0, 0);
    }
}
