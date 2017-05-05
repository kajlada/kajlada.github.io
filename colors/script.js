
function makeHex() {
    var text = "";
    var letters = "abcdef0123456789"; //Letters and Numbers needed to create a hexcode (color).
    for (var i = 0; i < 6; i++) //Length of #hexcode
    text += letters.charAt(Math.floor(Math.random() * letters.length)); //Randomly picking a letter or number from letters
    document.body.style.backgroundColor = document.getElementById("hex").innerHTML = "#" + text //Changing the background color & updating the h4
}                                                                                               //which shows the new #hexcode

document.body.onkeyup = function(e) {
    if (e.keyCode !== 32) return; //If anything is clicked, nothing happens, but if space (keyCode: 32) is pressed the makeHex() function runs.
    makeHex();
}
