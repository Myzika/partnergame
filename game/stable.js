function game() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let hasDoorknob = false;
    let takeEm = false;
    let flashlight = false;
    let keycard = false;
    let keycardTwo = false;
    let goIn = false;

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
                        levelTwo, 2500
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
        ctx.drawImage(document.getElementById("twowindows"), 0, 50);
        ctx.drawImage(document.getElementById("twolights"), 950, 0);
        if (flashlight === false) {
            ctx.drawImage(document.getElementById("twoblood"), 483, 630);
        }
        ctx.drawImage(document.getElementById("twofardoor"), 1133, 483);

        canvas.onmousedown = function levelTwoGame(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            /**
             * These take the red value of the clicked pixel and execute different displays.
             */
            if (data[0] === 93) { //blood
                takeEm = true;
                ctx.clearRect(70, 966, 1211, 336);
                ctx.font = "60px VT323";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("A dark pool of blood is visible on the floor", 672, 1100);
                ctx.fillText("It smells terrible and upon closer inspection", 672, 1170);
                ctx.fillText("there's a keycard and a flashlight in it.", 672, 1240);
                setTimeout(
                    function() {
                        ctx.clearRect(70, 966, 1211, 336);
                        ctx.fillText("Take them?", 515, 1100);
                        ctx.drawImage(document.getElementById("yes"), 966, 945);
                        ctx.drawImage(document.getElementById("no"), 966, 1134);
                    }, 2500
                )
            }
            else if (data[0] === 16) { //windows
                takeEm = false;
                ctx.clearRect(70, 966, 1211, 336);
                ctx.font = "60px VT323";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("You look out the windows and watch the stars go", 672, 1100);
                ctx.fillText("by. That tells you the ship is still moving. While", 672, 1170);
                ctx.fillText("it's quiet,there must be someone else aboard.", 672, 1240);
            }
            else if (data[0] === 82) { //door
                door();
            }
            else if (x > 966 && takeEm === true) {
                if (y > 945) {
                    if (y < 1134) {
                        ctx.clearRect(70, 966, 1211, 336);
                        ctx.font = "60px VT323";
                        ctx.fillStyle = "white";
                        ctx.textAlign = "center";
                        ctx.fillText("You pick up the keycard and you", 672, 1100);
                        ctx.fillText("pick up the flashlight. After wiping", 672, 1170);
                        ctx.fillText("them down, you put them in your pocket.", 672, 1240);
                        flashlight = true;
                        keycard = true;
                        ctx.drawImage(document.getElementById("twoblood-2"), 483, 630);
                        ctx.clearRect(70, 966, 1211, 336);
                        ctx.font = "60px VT323";
                        ctx.fillStyle = "white";
                        ctx.textAlign = "center";
                        ctx.fillText("You pick up the keycard and you", 672, 1100);
                        ctx.fillText("pick up the flashlight. After wiping", 672, 1170);
                        ctx.fillText("them down, you put them in your pocket.", 672, 1240);
                    }
                    else if (y > 1134) {
                        ctx.clearRect(70, 966, 1211, 336);
                        ctx.font = "60px VT323";
                        ctx.fillStyle = "white";
                        ctx.textAlign = "center";
                        ctx.fillText("You walk away from the puddle of blood.", 672, 1100);
                    }
                }

            }

            function door() {
                if (flashlight === true) {
                    ctx.drawImage(document.getElementById("twobgdoor"), 0, 0);
                    ctx.drawImage(document.getElementById("twodoor"), 360, 200);
                    ctx.drawImage(document.getElementById("twogreen"), 1008, 525);
                    ctx.drawImage(document.getElementById("twored"), 1113, 525);
                    ctx.drawImage(document.getElementById("twokeycard"), 1030, 630);
                    canvas.onmousedown = function() {
                        if (keycard === true) {
                            ctx.clearRect(70, 966, 1211, 336);
                            ctx.font = "60px VT323";
                            ctx.fillStyle = "white";
                            ctx.textAlign = "center";
                            ctx.fillText("You slide the slightly bloody keycard", 672, 1100);
                            ctx.fillText("into the slot, and push the door gently.", 672, 1170);
                            ctx.fillText("It swings open without hesitation.", 672, 1240);
                            setTimeout(
                                levelThree, 2500
                            )
                        }
                        else {
                            ctx.clearRect(70, 966, 1211, 336);
                            ctx.font = "60px VT323";
                            ctx.fillStyle = "white";
                            ctx.textAlign = "center";
                            ctx.fillText("The door seems to be locked", 672, 1100);
                            ctx.fillText("and it seems to require a keycard", 672, 1170);
                            ctx.fillText("Click to return to last room.", 672, 1240);
                            canvas.onmousedown = function() {
                                levelTwo();
                            }
                        }
                    }
                }
                else {
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(0, 0, 1344, 1344);
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("I can't see anything!", 672, 1100);
                    canvas.onmousedown = function() {
                        levelTwo();
                    }
                }

            }
        }
    }

    function levelThree() {
        ctx.drawImage(document.getElementById("threeBackground"), 0, 0);
        ctx.drawImage(document.getElementById("rightDoorFar"), 990, 525);
        ctx.drawImage(document.getElementById("midDoorFar"), 607, 504);
        ctx.drawImage(document.getElementById("leftDoorFar"), 147, 510);
        ctx.drawImage(document.getElementById("light"), 380, 0);
        ctx.drawImage(document.getElementById("leftBlood"), 210, 945);

        canvas.onmousedown = function levelThreeGame(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (data[0] === 127) {
                ctx.clearRect(70, 966, 1211, 336);
                ctx.font = "60px VT323";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("IMMMMA LIGHT FIXTURE", 672, 1100);
                ctx.fillText("IMA LIGHT FIXTURE THAT DOESN'T", 672, 1170);
                ctx.fillText("WOOOOOOOOOOOOOOOORK", 672, 1240);
            }
            else if (data[0] === 82 && x >= 901) {
                rightDoor();
            }
            else if (data[0] === 82 && x <= 336) {
                leftDoor();

            }
            else if (data[0] === 28) {
                middleDoor();
            }
            else if (data[0] === 93) {
                ctx.clearRect(70, 966, 1211, 336);
                ctx.font = "60px VT323";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("What...? More blood...", 672, 1100);
                ctx.fillText("I'm not sure if I want to", 672, 1170);
                ctx.fillText("know where it's from.", 672, 1240);
            }
        }

        function leftDoor() {
            ctx.drawImage(document.getElementById("leftDoorClose"), 0, 0);
            ctx.drawImage(document.getElementById("leftDoor"), 353, 210);
            ctx.drawImage(document.getElementById("twokeycard"), 1029, 640);
            ctx.drawImage(document.getElementById("twogreen"), 1008, 525);
            ctx.drawImage(document.getElementById("twored"), 1113, 525);

            canvas.onmousedown = function leftDoor(event) {
                const rect = canvas.getBoundingClientRect(),
                    x = event.clientX - rect.left,
                    y = event.clientY - rect.top;
                let data = ctx.getImageData(x, y, 1, 1).data;

                if (data[0] === 93 || data[0] === 119) {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("It's still fresh...I", 672, 1100);
                    ctx.fillText("don't know if I wanna", 672, 1170);
                    ctx.fillText("go in there...", 672, 1240);
                }
                else if (data[0] === 114) {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("This door appears to be", 672, 1100);
                    ctx.fillText("locked via the keycard", 672, 1170);
                    ctx.fillText("slot, and made of titanium.", 672, 1240);
                }
                else if (data[0] === 161 && goIn === false) {
                    goIn = true;
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("You look at the card slot", 672, 1100);
                    ctx.fillText("and pull out the card from the", 672, 1170);
                    ctx.fillText("previous hallway.", 672, 1240);
                    setTimeout(
                        function() {
                            ctx.clearRect(70, 966, 1211, 336);
                            ctx.font = "60px VT323";
                            ctx.fillStyle = "white";
                            ctx.textAlign = "center";
                            ctx.fillText("Do you want to go in?", 515, 1130);
                            ctx.drawImage(document.getElementById("yes"), 966, 945);
                            ctx.drawImage(document.getElementById("no"), 966, 1134);
                        }, 2500
                    )
                }

                else if (x > 966 && goIn === true) {
                    if (y > 945) {
                        if (y < 1134) {
                            ctx.clearRect(70, 966, 1211, 336);
                            ctx.font = "60px VT323";
                            ctx.fillStyle = "white";
                            ctx.textAlign = "center";
                            ctx.fillText("You slip the card in and", 672, 1100);
                            ctx.fillText("swing the door open smoothly", 672, 1170);
                            ctx.fillText("and you grab your keycard.", 672, 1240);
                            setTimeout(
                                function() {
                                    goIn = false;
                                    ctx.clearRect(0, 0, 1344, 1344)
                                    ctx.fillText("This is where our story ends...", 672, 600);
                                    ctx.fillText("for now, that is. Keep checking", 672, 700);
                                    ctx.fillText("in to see how this story continues.", 672, 800);
                                }, 2500
                            )
                        }
                        else if (y > 1134) {
                            ctx.clearRect(70, 966, 1211, 336);
                            ctx.font = "60px VT323";
                            ctx.fillStyle = "white";
                            ctx.textAlign = "center";
                            ctx.fillText("Maybe later.", 672, 1100);
                            canvas.onmousedown = function goBack(event) {
                                levelThree();
                            }
                        }
                    }

                }
            }
        }

        function rightDoor() {
            ctx.drawImage(document.getElementById("rightDoorClose"), 0, 0);
            ctx.drawImage(document.getElementById("rightDoor"), 353, 210);
            ctx.drawImage(document.getElementById("twokeycard"), 1029, 640);
            ctx.drawImage(document.getElementById("twogreen"), 1008, 525);
            ctx.drawImage(document.getElementById("twored"), 1113, 525);

            canvas.onmousedown = function rightDoor(event) {
                const rect = canvas.getBoundingClientRect(),
                    x = event.clientX - rect.left,
                    y = event.clientY - rect.top;
                let data = ctx.getImageData(x, y, 1, 1).data;

                if (data[0] === 114) {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("This door appears to be", 672, 1100);
                    ctx.fillText("locked via the keycard", 672, 1170);
                    ctx.fillText("slot, and the door won't budge.", 672, 1240);
                }
                else if (data[0] === 161) {
                    if (keycardTwo === false) {
                        ctx.clearRect(70, 966, 1211, 336);
                        ctx.font = "60px VT323";
                        ctx.fillStyle = "white";
                        ctx.textAlign = "center";
                        ctx.fillText("You need a keycard", 672, 1100);
                        ctx.fillText("for this door. The one", 672, 1170);
                        ctx.fillText("from last time doesn't work this time.", 672, 1240);
                        setTimeout(
                            function() {
                                ctx.clearRect(70, 966, 1211, 336);
                                ctx.font = "60px VT323";
                                ctx.fillStyle = "white";
                                ctx.textAlign = "center";
                                ctx.fillText("The door seems to be jammed", 672, 1100);
                                ctx.fillText("and no matter how hard you push, won't move.", 672, 1170);
                                ctx.fillText("Click to return to the hallway.", 672, 1240);
                            }, 2500
                        )
                        canvas.onmousedown = function() {
                            levelThree();
                        }
                    }
                }
            }
        }

        function middleDoor() {
            ctx.drawImage(document.getElementById("midDoorClose"), 0, 0);
            ctx.drawImage(document.getElementById("midDoor"), 353, 210);
            ctx.drawImage(document.getElementById("midDoorknob"), 752, 775)

            canvas.onmousedown = function rightDoor(event) {
                const rect = canvas.getBoundingClientRect(),
                    x = event.clientX - rect.left,
                    y = event.clientY - rect.top;
                let data = ctx.getImageData(x, y, 1, 1).data;

                if (data[0] === 114) {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("A wooden door. It's not like the", 672, 1100);
                    ctx.fillText("others on the ship. It adorns a", 672, 1170);
                    ctx.fillText("golden doorknob. It's locked.", 672, 1240);
                }
                else if (data[0] === 168 || data[0] === 125) {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("The knob doesn't move too much.", 672, 1100);
                    ctx.fillText("The door doesn't open. Maybe there's a", 672, 1170);
                    ctx.fillText("key around here somewhere.", 672, 1240);
                    setTimeout(function() {
                        ctx.fillText("(This is a WIP and", 672, 1100);
                        ctx.fillText("this area is incomplete.)", 672, 1170);
                        ctx.fillText("Click to go back.", 672, 1240);
                    }, 2500);
                    canvas.onmousedown = function() {
                        levelThree();
                    }
                }
                else if (data[0] === 61) {
                    ctx.clearRect(70, 966, 1211, 336);
                    ctx.font = "60px VT323";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("There's a spot with fresher colours", 672, 1100);
                    ctx.fillText("and screw holes. Maybe there was a", 672, 1170);
                    ctx.fillText("plaque or something that used to be here.", 672, 1240);
                }

            }
        }
    }
}
