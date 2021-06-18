var lastTime = 0;
var replaceable = true;

//emulate mouse press events via keyboard keypress
$("html").keydown(function (event) {
    var pressedKey = event.key;

    //determine the key pressed and emulate the mouse click event
    switch (pressedKey) {
        case "0": document.getElementById("t9-zero").click(); break;
        case "1": document.getElementById("t9-one").click(); break;
        case "2": document.getElementById("t9-two").click(); break;
        case "3": document.getElementById("t9-three").click(); break;
        case "4": document.getElementById("t9-four").click(); break;
        case "5": document.getElementById("t9-five").click(); break;
        case "6": document.getElementById("t9-six").click(); break;
        case "7": document.getElementById("t9-seven").click(); break;
        case "8": document.getElementById("t9-eight").click(); break;
        case "9": document.getElementById("t9-nine").click(); break;
        case "#": document.getElementById("t9-hash").click(); break;
        case "Backspace": document.getElementById("t9-hash").click(); break;
        case "*": document.getElementById("t9-ast").click(); break;
        case "Delete": document.getElementById("t9-ast").click(); break;
    }
})


//to add or not to add
$(".t9-button").click(function () {
    // console.log(event.which);
    var thisTime = event.timeStamp;				//determine the event timestamp

    //determine whether to replace the last entered character or not
    if ((thisTime - lastTime) > 1000) {
        replaceable = false;
    }

    else {
        replaceable = true;
    }

    //reset lastTime value
    lastTime = thisTime;

    var newText = type($(this).attr("data-value"));
    $("#t9-field").val(newText);
})


//actual typing logic
function type(x) {
    var text = $("#t9-field").val();
    // console.log(replaceable);
    var length = text.length - 1;
    //console.log(text[length]);

    switch (x) {
        case "1":
            {
                if (replaceable == true) {
                    if (text[length] == ".") {
                        text = text.slice(0, length) + ",";
                        return text;
                    }

                    else if (text[length] == ",") {
                        text = text.slice(0, length) + "?";
                        return text;
                    }

                    else if (text[length] == "?") {
                        text = text.slice(0, length) + "!";
                        return text;
                    }

                    else if (text[length] == "!") {
                        text = text.slice(0, length) + "1";
                        return text;
                    }

                    else if (text[length] == "1") {
                        text = text.slice(0, length) + ".";
                        return text;
                    }

                    else {
                        text = text + ".";
                        return text;
                    }
                }

                else {
                    text = text + ".";
                    return text;
                }
            };

        case "2":
            {
                if (replaceable == true) {
                    if (text[length] == "a") {
                        text = text.slice(0, length) + "b"
                        return text;
                    }

                    else if (text[length] == "b") {
                        text = text.slice(0, length) + "c";
                        return text;
                    }

                    else if (text[length] == "c") {
                        text = text.slice(0, length) + "2";
                        return text;
                    }

                    else if (text[length] == "2") {
                        text = text.slice(0, length) + "a";
                        return text;
                    }

                    else {
                        text = text + "a";
                        return text;
                    }
                }

                else {
                    text = text + "a";
                    return text;
                }
            };

        case "3":
            {
                if (replaceable == true) {
                    if (text[length] == "d") {
                        text = text.slice(0, length) + "e";
                        return text;
                    }

                    else if (text[length] == "e") {
                        text = text.slice(0, length) + "f";
                        return text;
                    }

                    else if (text[length] == "f") {
                        text = text.slice(0, length) + "3";
                        return text;
                    }

                    else if (text[length] == "3") {
                        text = text.slice(0, length) + "d";
                        return text;
                    }

                    else {
                        text = text + "d";
                        return text;
                    }
                }

                else {
                    text = text + "d";
                    return text;
                }
            };

        case "4":
            {
                if (replaceable == true) {
                    if (text[length] == "g") {
                        text = text.slice(0, length) + "h";
                        return text;
                    }

                    else if (text[length] == "h") {
                        text = text.slice(0, length) + "i";
                        return text;
                    }

                    else if (text[length] == "i") {
                        text = text.slice(0, length) + "4";
                        return text;
                    }

                    else if (text[length] == "4") {
                        text = text.slice(0, length) + "g";
                        return text;
                    }

                    else {
                        text = text + "g";
                        return text;
                    }
                }

                else {
                    text = text + "g";
                    return text;
                }
            };

        case "5":
            {
                if (replaceable == true) {
                    if (text[length] == "j") {
                        text = text.slice(0, length) + "k";
                        return text;
                    }

                    else if (text[length] == "k") {
                        text = text.slice(0, length) + "l";
                        return text;
                    }

                    else if (text[length] == "l") {
                        text = text.slice(0, length) + "5";
                        return text;
                    }

                    else if (text[length] == "5") {
                        text = text.slice(0, length) + "j";
                        return text;
                    }

                    else {
                        text = text + "j";
                        return text;
                    }
                }

                else {
                    text = text + "j";
                    return text;
                }
            };

        case "6":
            {
                if (replaceable == true) {
                    if (text[length] == "m") {
                        text = text.slice(0, length) + "n";
                        return text;
                    }

                    else if (text[length] == "n") {
                        text = text.slice(0, length) + "o";
                        return text;
                    }

                    else if (text[length] == "o") {
                        text = text.slice(0, length) + "6";
                        return text;
                    }

                    else if (text[length] == "6") {
                        text = text.slice(0, length) + "m";
                        return text;
                    }

                    else {
                        text = text + "m";
                        return text;
                    }
                }

                else {
                    text = text + "m";
                    return text;
                }
            };

        case "7":
            {
                if (replaceable == true) {
                    if (text[length] == "p") {
                        text = text.slice(0, length) + "q";
                        return text;
                    }

                    else if (text[length] == "q") {
                        text = text.slice(0, length) + "r";
                        return text;
                    }

                    else if (text[length] == "r") {
                        text = text.slice(0, length) + "s";
                        return text;
                    }

                    else if (text[length] == "s") {
                        text = text.slice(0, length) + "7";
                        return text;
                    }

                    else if (text[length] == "7") {
                        text = text.slice(0, length) + "p";
                        return text;
                    }

                    else {
                        text = text + "p";
                        return text;
                    }
                }

                else {
                    text = text + "p";
                    return text;
                }
            };

        case "8":
            {
                if (replaceable == true) {
                    if (text[length] == "t") {
                        text = text.slice(0, length) + "u";
                        return text;
                    }

                    else if (text[length] == "u") {
                        text = text.slice(0, length) + "v";
                        return text;
                    }

                    else if (text[length] == "v") {
                        text = text.slice(0, length) + "8";
                        return text;
                    }

                    else if (text[length] == "8") {
                        text = text.slice(0, length) + "t";
                        return text;
                    }

                    else {
                        text = text + "t";
                        return text;
                    }
                }

                else {
                    text = text + "t";
                    return text;
                }
            };

        case "9":
            {
                if (replaceable == true) {
                    if (text[length] == "w") {
                        text = text.slice(0, length) + "x";
                        return text;
                    }

                    else if (text[length] == "x") {
                        text = text.slice(0, length) + "y";
                        return text;
                    }

                    else if (text[length] == "y") {
                        text = text.slice(0, length) + "z";
                        return text;
                    }

                    else if (text[length] == "z") {
                        text = text.slice(0, length) + "9";
                        return text;
                    }

                    else if (text[length] == "9") {
                        text = text.slice(0, length) + "w";
                        return text;
                    }

                    else {
                        text = text + "w";
                        return text;
                    }
                }

                else {
                    text = text + "w";
                    return text;
                }
            };

        case "0":
            {
                if (replaceable == true) {
                    if (text[length] == " ") {
                        text = text.slice(0, length) + "0";
                        return text;
                    }

                    else if (text[length] == "0") {
                        text = text.slice(0, length) + " ";
                        return text;
                    }

                    else {
                        text = text + " ";
                        return text;
                    }
                }

                else {
                    text = text + " ";
                    return text;
                }
            }

        case "#":
            {
                text = text.slice(0, length);
                return text;
            }

        case "*":
            {
                text = "";
                return text;
            }
    }
}
