const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
    ctx.drawImage(document.getElementById("backgroundone"), 0, 0);
    ctx.drawImage(document.getElementById("onedoor"), 420, 232);
    ctx.drawImage(document.getElementById("onejacket"), 987, 124);


const test = document.getElementById('test');
ctx.drawImage(test, 30, 30);
canvas.onmousedown = function testingFunction(event) {
    alert();
    let cx = event.pageX;
    let cy = event.pageY;
    if (cx < 420 && cx > 232 && cy < 232 && cy > 940) {
    alert();
}
};


