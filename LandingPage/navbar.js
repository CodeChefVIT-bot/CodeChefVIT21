const navbar = document.querySelector('.barsNavLi');
const navbarHam = document.querySelector('.navbarHamDiv');
const hero = document.querySelector('.hero');
const heroDiv = document.querySelector('.heroDiv')
const socials = document.querySelector('.socialsFloat')
navbar.addEventListener('click', e => {

    navbarHam.innerHTML =
        `<div class="navbarHam" >
        <p class="smallNav">Home</p>
        <p class="smallNav">Events</p>
        <p class="smallNav">Webinars</p>
        <p class="smallNav">Projects</p>
        <p class="smallNav">Team</p>
        <p class="smallNav">Contact Us</p>
    </div>`;


    heroDiv.style = "display:block;margin-top:0;margin-left:0;"
    hero.style = "display:none"
    socials.style = "display:none"

})