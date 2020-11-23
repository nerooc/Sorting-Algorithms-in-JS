export default class Navbar {
    constructor() {
        this.navbar = document.getElementById("navbar");
        this.hamburger = document.getElementById("hamburger");
        this.navlinks = document.getElementById("links");
        this.routes = document.querySelectorAll("#routing");
    }

    addShadow = (e) => {
        const y = window.scrollY;

        if (y > 20) {
            this.navbar.className = "nav shadow";
        } else {
            this.navbar.className = "nav";
        }
    }

    handleHamburger = () => {   
        this.navlinks.classList.toggle('nav__wrapper__links--hamburger');
    }

    init = () => {
        document.addEventListener('scroll', this.addShadow);
        this.hamburger.addEventListener('click', this.handleHamburger);
        this.routes.forEach(btn => {
            btn.addEventListener('click', () => this.navlinks.classList.remove('nav__wrapper__links--hamburger'));
        })
    }
}