var carousel_container = document.querySelectorAll('.carousel_container');
    var carousel = document.querySelectorAll('.carousel');
    for (var i = 0; i < carousel_container.length; i++) {
        new ScrollBooster({
            viewport: carousel_container[i],
            content: carousel[i],
            scrollMode: 'transform', // use CSS 'transform' property
            direction: 'horizontal', // allow only horizontal scrolling
            emulateScroll: false, // scroll on wheel events
        });
    }