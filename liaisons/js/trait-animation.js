const the_animation = document.querySelectorAll('.trait__horizontal')

const observerTrait = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('trait__animation')
        }
        /*else {
            entry.target.classList.remove('trait__animation')
        }*/

    })
},
    {
        threshold: 0.5
    });
//
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
    observerTrait.observe(elements);
}


const the_animation2 = document.querySelectorAll('#space');
const the_animation3 = document.querySelector('.trait__vertical');

const observerTrait2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelector('.trait__vertical').classList.add('trait2__animation')
        }
    })
},
    {
        threshold: 0.6
    });
//
for (let i = 0; i < the_animation2.length; i++) {
    const elements2 = the_animation2[i];
    observerTrait2.observe(elements2);
}