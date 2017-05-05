function makeHex() {
    var text = "";
    var letters = "abcdef0123456789"; //Hexcode needs letters between a and f && 0 - 9

    for (var i = 0; i < 6; i++) //Hexcode length
        text += letters.charAt(Math.floor(Math.random() * letters.length)); //Randomly picking a letter or number from letters

    document.body.style.backgroundColor = "#" + text //generated hexcode
    document.getElementById("hex").innerHTML = "#" + text; //changes h4 element of hexcode
}


document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        makeHex();
    }
}
