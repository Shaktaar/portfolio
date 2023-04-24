// I want that you get the .item elements and when they are visible on screen you add them the class active
var items = document.querySelectorAll('.item');
var options = {
    root: null,
    rootMargin: "0px 0px 100px 0px"
};
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);
items.forEach(function (item) {
    observer.observe(item);
});
