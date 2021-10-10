/*TypeWriter*/
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.changeCursor(' ').typeString('Learning')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Developing')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Sharing')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Influencing')
    .pauseFor(2500)
    .start();

/*Scroll to Top */
const scrollTop = document.querySelector(".scroll-to-top");

const buttonVisibility = () => {
    if (document.documentElement.scrollTop <= 702) {
        scrollTop.style.display = "none";
    } else {
        scrollTop.style.display = "block";
    }
}
buttonVisibility();

scrollTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    buttonVisibility();
});