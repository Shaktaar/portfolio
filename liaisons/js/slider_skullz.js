function changeopacity(val) {
    let liste = document.getElementsByClassName("villeimg");
    liste[0].style.opacity = 1;
    liste[1].style.opacity = val * 4;
    liste[2].style.opacity = val * 2;
    if (liste[2].style.opacity >= 1) {
        liste[0].style.opacity = 0;
        liste[1].style.opacity = 0;
        liste[3].style.opacity = val * 3.5 - 2.3;
        liste[4].style.opacity = val * 4 - 3;
    }
    else {
        liste[3].style.opacity = 0;
        liste[4].style.opacity = 0;
    }
}

function slider() {
    var today = new Date();
    var date = today.getHours();
    if (date == 0) {
        date = 24;
    }
    document.getElementById("slider").value = date.toString();
    console.log(document.getElementById("slider").value);
    changeopacity(date / 24);
}
slider();