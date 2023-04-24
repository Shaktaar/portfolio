// var carousel_container = document.querySelectorAll('.carousel_container');
//     var carousel = document.querySelectorAll('.carousel');
//     for (var i = 0; i < carousel_container.length; i++) {
//         new ScrollBooster({
//             viewport: carousel_container[i],
//             content: carousel[i],
//             scrollMode: 'transform', // use CSS 'transform' property
//             direction: 'horizontal', // allow only horizontal scrolling
//             emulateScroll: false, // scroll on wheel events
//         });
//     }



let startX;
let scrollLeft;
let isDown = false;
let sliders = document.getElementsByClassName("carousel");

for (let i = 0; i < sliders.length; i++) {
    let slider = sliders[i];
    slider.addEventListener("mousedown", e => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
    });
}