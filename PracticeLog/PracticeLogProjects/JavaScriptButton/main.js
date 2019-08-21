
var myButton = document.querySelector('button');

myButton.onclick = function () {
    checkPass();
}

// Code borrowed from Stackoverflow using jQuery
$(document).keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        checkPass();
    }
});
// back to my code again

function checkPass() {
    var password = document.getElementById("pass-entry").value;
    var userName = document.getElementById("fname").value;
    if (password == "swordfish") {
        alert(`Welcome ${userName}`);
        document.getElementById("pass-entry").style.borderColor = "green";
    } else {
        alert(`This is always the password though. Imagine the intersection of King Arthur's Round Table and seafood. Come on, ${userName}!`);
        document.getElementById("pass-entry").style.borderColor = "red";
    }
}