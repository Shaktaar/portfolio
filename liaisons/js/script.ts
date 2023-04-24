// I want that you get the .item elements and when they are visible on screen you add them the class active
const items = document.querySelectorAll('.item');
const options = {
  root: null,
  rootMargin: "0px 0px 100px 0px"
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.add('visible');
    }
  })
}, options)

items.forEach(item => {
  observer.observe(item);
})
