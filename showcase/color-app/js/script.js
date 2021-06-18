//(function() {openHome();})();


$(function () {
    //$("#color-main-icon-menu").on("click", function() {menuToggle()});
    $("#color-main-icon-reload").on("click", function () { resetEverything() });
    $("#color-home").on("click", function () { openHome() });
    $("#color-converter").on("click", function () { openConverter() });
    $("#color-generator").on("click", function () { openGenerator() });
    $("#color-gradient").on("click", function () { openGradient() });
})

/*
function menuToggle() {
    var menu = document.getElementById("color-menu");
    var icon_menu = document.getElementById("color-main-icon-menu");

    if (menu.style.left == "0px") {
        menu.style.left = "-300px";
        menu.style.transition = "left 0.5s";
        icon_menu.style.transform = "rotate(0deg)";
        icon_menu.style.transition = "transform 0.5s";
    }

    else {
        menu.style.left = "0px";
        menu.style.transition = "left 0.5s";
        icon_menu.style.transform = "rotate(90deg)";
        icon_menu.style.transition = "transform 0.5s";
    }
}
*/


$(function () {
    $("#color-main-icon-menu").click(function () {
        //$("#color-menu").slideToggle();					//use to toggle as up-down
        $("#color-menu").animate({ width: 'toggle' }, 250);	//use to toggle as left-right
    })
})


function resetEverything() {
    var appName = document.getElementById("color-main-title").innerHTML;

    if (appName == "Color App") {
        return;
    }

    var formElements = document.getElementById("color-form");
    var formElements = formElements.elements;

    for (var i = 0; i < formElements.length; i++) {
        formElements[i].value = "";
    }

    if (appName == "Gradient") {
        document.getElementsByClassName("color-ans")[0].innerHTML = "------";
        document.getElementsByClassName("color-ans")[1].innerHTML = "------";
        document.getElementById("color-hexres").style.backgroundImage = "linear-gradient(to right bottom, #CB0ACD 25%, #1FB5ED)";
    }

    else {
        document.getElementById("color-ans").innerHTML = "------";
        document.getElementById("color-hexres").style.backgroundImage = "linear-gradient(to right bottom, #CB0ACD 25%, #1FB5ED)";
    }
}


function openHome() {
    var li_array = document.getElementsByTagName("li");

    for (var i = 0; i < li_array.length; i++)
        $(li_array[i]).removeClass();

    $(li_array[0]).addClass("selected");

    //setTimeout(function() {menuToggle()}, 50);
    $("#color-menu").animate({ width: 'toggle' }, 250);

    document.getElementById("color-main-title").innerHTML = "Color App";
    document.getElementById("color-main-content").innerHTML = "";

    $("#color-main-content").append('<div id="color-main-content"><div style="width: 80%; padding: 5%; font-size: larger" class="color-well">Welcome to Color App</div><div style="width: 80%; padding: 5%; font-size: larger; margin-top: 15%" class="color-well">Start by pressing Menu button</div><div style="width: 80%; padding: 5%; font-size: larger; margin-top: 15%" class="color-well">Developed by<br>-&gt; Bhavyai Gupta &lt;-</div></div>');
}


function openConverter() {
    var li_array = document.getElementsByTagName("li");

    for (var i = 0; i < li_array.length; i++)
        $(li_array[i]).removeClass();

    $(li_array[1]).addClass("selected");

    //setTimeout(function() {menuToggle()}, 50);
    $("#color-menu").animate({ width: 'toggle' }, 250);

    document.getElementById("color-main-title").innerHTML = "Converter";
    document.getElementById("color-main-content").innerHTML = "";

    $("#color-main-content").append('<form id="color-form"><label class="color-label">Red: </label><input type="number" min="0" max="255" name="red" id="color-red" class="color-input" autofocus><br><label class="color-label">Green: </label><input type="number" min="0" max="255" name="grn" id="color-grn" class="color-input"><br><label class="color-label">Blue: </label><input type="number" min="0" max="255" name="blu" id="color-blu" class="color-input"><br></form><div id="color-contain-ans" class="color-well"><span id="color-ans">------</span></div><div id="color-hexres" onclick="converter()">Press</div>');
}


function openGenerator() {
    var li_array = document.getElementsByTagName("li");

    for (var i = 0; i < li_array.length; i++)
        $(li_array[i]).removeClass();

    $(li_array[2]).addClass("selected");

    //setTimeout(function() {menuToggle()}, 50);
    $("#color-menu").animate({ width: 'toggle' }, 250);

    document.getElementById("color-main-title").innerHTML = "Generator";
    document.getElementById("color-main-content").innerHTML = "";

    $("#color-main-content").append('<form id="color-form"><label class="color-label">Red: </label><input type="number" min="0" max="255" name="red" id="color-red" class="color-input" readonly><br><label class="color-label">Green: </label><input type="number" min="0" max="255" name="grn" id="color-grn" class="color-input" readonly><br><label class="color-label">Blue: </label><input type="number" min="0" max="255" name="blu" id="color-blu" class="color-input" readonly><br></form><div id="color-contain-ans" class="color-well"><span id="color-ans">------</span></div><div id="color-hexres" onclick="generator()" >Press</div>');
}


function openGradient() {
    var li_array = document.getElementsByTagName("li");

    for (var i = 0; i < li_array.length; i++)
        $(li_array[i]).removeClass();

    $(li_array[3]).addClass("selected");

    //setTimeout(function() {menuToggle()}, 50);
    $("#color-menu").animate({ width: 'toggle' }, 250);

    document.getElementById("color-main-title").innerHTML = "Gradient";
    document.getElementById("color-main-content").innerHTML = "";

    $("#color-main-content").append('<form id="color-form"><label class="color-label">HEX 1</label></form><div class="color-well" style="margin-top: 4%"><span class="color-ans">------</span></div><form id="color-form" style="margin-top: -6%"><label class="color-label">HEX 2</label></form><div class="color-well" style="margin-top: 4%"><span class="color-ans">------</span></div><div id="color-hexres" onclick="setColor()" >Press</div>');
}


function converter() {
    var r, g, b, z;

    r = Number(document.getElementById("color-red").value);
    g = Number(document.getElementById("color-grn").value);
    b = Number(document.getElementById("color-blu").value);

    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);


    if ((r > 255) || (g > 255) || (b > 255)) {
        document.getElementById("color-ans").innerHTML = "INVALID"
        return;
    }

    r = (r.toString(16)).toUpperCase();
    g = (g.toString(16)).toUpperCase();
    b = (b.toString(16)).toUpperCase();

    var err = "0";

    if (r.length === 1)
        r = err.concat(r);

    if (g.length === 1)
        g = err.concat(g);

    if (b.length === 1)
        b = err.concat(b);

    z = "#" + r + g + b;

    document.getElementById("color-ans").innerHTML = z;
    document.getElementById("color-hexres").style.background = z;
}


function generator() {
    var r, g, b, z;

    r = (Math.random() * 255);
    g = (Math.random() * 255);
    b = (Math.random() * 255);

    r = Math.ceil(r);
    g = Math.ceil(g);
    b = Math.ceil(b);

    document.getElementById("color-red").value = r;
    document.getElementById("color-grn").value = g;
    document.getElementById("color-blu").value = b;

    r = (r.toString(16)).toUpperCase();
    g = (g.toString(16)).toUpperCase();
    b = (b.toString(16)).toUpperCase();

    var err = "0";

    if (r.length === 1)
        r = err.concat(r);

    if (g.length === 1)
        g = err.concat(g);

    if (b.length === 1)
        b = err.concat(b);

    z = "#" + r + g + b;

    document.getElementById("color-ans").innerHTML = z;
    document.getElementById("color-hexres").style.background = z;
}


function generateCode() {
    var r, g, b, z;

    r = (Math.random() * 255);
    g = (Math.random() * 255);
    b = (Math.random() * 255);

    r = Math.ceil(r);
    g = Math.ceil(g);
    b = Math.ceil(b);

    /*
            document.getElementById("red").value = r;
            document.getElementById("grn").value = g;
            document.getElementById("blu").value = b;
    */
    r = (r.toString(16)).toUpperCase();
    g = (g.toString(16)).toUpperCase();
    b = (b.toString(16)).toUpperCase();

    var err = "0";

    if (r.length === 1)
        r = err.concat(r);

    if (g.length === 1)
        g = err.concat(g);

    if (b.length === 1)
        b = err.concat(b);

    z = "#" + r + g + b;

    return z;
}


function setColor() {
    //document.getElementById("ans").innerHTML = z;
    var x1 = generateCode();
    var x2 = generateCode();
    document.getElementsByClassName("color-ans")[0].innerHTML = x1;
    document.getElementsByClassName("color-ans")[1].innerHTML = x2;
    document.getElementById("color-hexres").style.backgroundImage = "linear-gradient(" + "to bottom right" + ", " + x1 + ", " + x2 + ", " + x1 + ")";
}
