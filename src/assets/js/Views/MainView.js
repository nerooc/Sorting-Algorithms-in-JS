export default class MainView {
    constructor(params) {
        this.params = params;
    }

    getHtml() {
        return `<section class="main-content">
        <header class="header">
            <h1 class="header__title">Sorting Algorithms in Javascript</h1>
            <paragraph class="header__desc">Clubhouse is a project made specifically for
                Javascript and web developers that want to learn more about sorting algorithms</paragraph>
            <div class = "header__buttons">
                <button class="header__buttons__explore"  onclick="window.open('tomaszgajda.com','_blank');">EXPLORE</button>
                <button class="header__buttons__additional">Sign up with Google</button>
            </div>  
        </header>
        <div class="content">
            <div class="advantages">
                <div class="advantages__post">
                    <img
                        src="./assets/img/blaze-adv.svg"
                        alt="fast"
                        class="advantages__post__image">
                    <div class="advantages__post__wrapper">
                        <h3 class="advantages__post__wrapper__title">Fastest possible</h3>
                        <p class="advantages__post__wrapper__desc">Our algorithms are as fast as
                            possible, there is simply no way someone did it better</p>
                    </div>
                </div>
                <div class="advantages__post">
                    <img
                        src="./assets/img/block-adv.svg"
                        alt="easy-and-accessible"
                        class="advantages__post__image">
                    <div class="advantages__post__wrapper">

                        <h3 class="advantages__post__wrapper__title">Easy and accessible</h3>
                        <p class="advantages__post__wrapper__desc">Each sorting algorithm has a clear
                            description to help you understand the concept</p>
                    </div>

                </div>
                <div class="advantages__post">
                    <img
                        src="./assets/img/mobile-adv.svg"
                        alt="mobile-friendly"
                        class="advantages__post__image">
                    <div class="advantages__post__wrapper">

                        <h3 class="advantages__post__wrapper__title">Mobile friendly</h3>
                        <p class="advantages__post__wrapper__desc">You can use our website comfortably
                            on various devices, including phones and tablets</p>
                    </div>

                </div>
            </div>

            <video class="video" src="./assets/video/video.mp4" controls></video>
        </div>

    </section>

    <section class="feedback">
        <img
            src="./assets/img/face-picture.png"
            alt="face-picture"
            class="feedback__image">
        <div class="feedback__wrapper">
            <h6 class="feedback__wrapper__name">
                <b>Talyah Kodumal,
                    <br>
                    CTO and Co-Founder
                    <br></b>
                airly</h6>
            <p class="feedback__wrapper__quote">“I have learnt so much using this website! I
                recommend it to everyone that starts their journey with algorithms and web
                development!”</p>
        </div>

    </section>`;
    }
}