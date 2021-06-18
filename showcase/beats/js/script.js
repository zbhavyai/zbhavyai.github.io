$(function () {
    var x = document.getElementsByClassName("beats-bar");

    (function () { start() })();

    function start() {
        for (var i = 0; i < x.length; i++) {
            var r, g, b, z;

            r = (Math.random() * 255);
            g = (Math.random() * 255);
            b = (Math.random() * 255);

            r = Math.ceil(r);
            g = Math.ceil(g);
            b = Math.ceil(b);

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

            x[i].style.background = z;

            var t = Math.random();
            x[i].style.WebkitAnimation = "bars_up_down " + t + "s ease-in infinite";
            x[i].style.animation = "bars_up_down " + t + "s ease-in infinite";
        }
    }


    setTimeout(function () { white_border() }, 700);

    function white_border() {
        var h = document.getElementById("beats-heading");
        h.style.textShadow = "-3px -3px 3px #FFFFFF, 3px -3px 3px #FFFFFF, -3px 3px 3px #FFFFFF, 3px 3px 3px #FFFFFF";
    }

    setTimeout(function () { toggle_space() }, 1000);

    function toggle_space() {
        var h = document.getElementById("beats-heading");
        h.style.WebkitAnimation = "spacing_toggle 0.8s ease-in infinite";
        h.style.animation = "spacing_toggle 0.8s ease-in infinite";
    }
})
