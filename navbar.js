export default class Navbar {
    constructor() {
        this.navbar = document.getElementById("navbar");
    }

    addShadow = (e) => {
        const y = window.scrollY;

        if(y > 20){
            this.navbar.className = "nav shadow";
        } else {
            this.navbar.className = "nav";
        }
    }

    init = () => {
        document.addEventListener('scroll', this.addShadow);
    }
}