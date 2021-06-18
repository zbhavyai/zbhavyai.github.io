//set input value to 0 when document loads
$(function () {
    $("#calci-field").val("0");
    $("#calci-history").val("");
})


//reset input and history when Clear is pressed
$(function () {
    $(".calci-clear").click(function () {
        $("#calci-history").val("");
        $("#calci-field").val("0");
    })
})


//when a number is pressed
$(function () {
    $(".calci-number").click(function () {

        var currentValue = $("#calci-field").val();

        if ((currentValue.length == 1) && (currentValue[0] == 0)) {
            currentValue = "";
            $("#calci-field").val(currentValue);
        }

        var newValue = $(this).attr("data-value");
        $("#calci-field").val(currentValue + newValue);
    })
})


//when an operator is pressed
$(function () {
    $(".calci-operator").click(function () {
        var operator = $(this).attr("data-value");
        var currentValue = $("#calci-history").val() + $("#calci-field").val();
        $("#calci-history").val(currentValue + operator);
        $("#calci-field").val("0");
    })
})


//when square root is pressed
$(function () {
    $(".calci-root").click(function () {
        var currentValue = $("#calci-field").val();
        newValue = Math.pow(currentValue, 0.5);
        //newValue = newValue.toFixed(8);
        $("#calci-field").val(newValue);
    })
})


//when backspace is pressed
$(function () {
    $(".calci-del").click(function () {
        var expression = $("#calci-field").val();

        if (expression.length == 1)
            $("#calci-field").val("0");

        else {
            expression = expression.slice(0, expression.length - 1);
            $("#calci-field").val(expression);
        }
    })
})


//when +- is pressed
$(function () {
    $(".calci-plus").click(function () {
        var expression = $("#calci-field").val();
        expression = expression * (-1);
        $("#calci-field").val(expression);
    })
})


//when = is pressed
$(function () {
    $(".calci-equalto").click(function () {
        var expression = $("#calci-history").val();
        $("#calci-history").val(expression + $("#calci-field").val());
        var result = eval($("#calci-history").val());
        $("#calci-history").val("");
        $("#calci-field").val(result);
    })
})


//emulate clicking via keyboard strokes
$("html").keydown(function (event) {
    var pressedKey = event.key;
    // console.log(pressedKey);

    switch (pressedKey) {
        case "0": document.getElementById("calci-zero").click(); break;
        case "1": document.getElementById("calci-one").click(); break;
        case "2": document.getElementById("calci-two").click(); break;
        case "3": document.getElementById("calci-three").click(); break;
        case "4": document.getElementById("calci-four").click(); break;
        case "5": document.getElementById("calci-five").click(); break;
        case "6": document.getElementById("calci-six").click(); break;
        case "7": document.getElementById("calci-seven").click(); break;
        case "8": document.getElementById("calci-eight").click(); break;
        case "9": document.getElementById("calci-nine").click(); break;

        //Clear (Delete)
        case "Delete": document.getElementById("calci-clear").click(); break;

        //Square Root (r or R)
        case "r": document.getElementById("calci-root").click(); break;
        case "R": document.getElementById("calci-root").click(); break;

        //Plus Minus (p or P)
        case "p": document.getElementById("calci-plusminus").click(); break;
        case "P": document.getElementById("calci-plusminus").click(); break;

        //Delete (Backspace)
        case "Backspace": document.getElementById("calci-del").click(); break;


        case "/": document.getElementById("calci-div").click(); break;
        case "*": document.getElementById("calci-mul").click(); break;
        case "-": document.getElementById("calci-sub").click(); break;
        case "+": document.getElementById("calci-add").click(); break;

        case "=": document.getElementById("calci-equal").click(); break;
        case "Enter": document.getElementById("calci-equal").click(); break;
        case ".": document.getElementById("calci-dec").click(); break;
    }
});
