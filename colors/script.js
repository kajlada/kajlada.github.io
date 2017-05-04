document.body.onkeyup = function(e) {
    if (e.keyCode !== 32) return; //if space isn't pressed nothing happens.
    document.body.style.backgroundColor = document.getElementById("hex").innerHTML = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
//randomly picked number between 0 - 1 which manipulates the 0xFFFFFF(a hexidecimal value) which represents rgb coordinates,
//and then .toString(16) converts the hexadecimal value into text.
}
