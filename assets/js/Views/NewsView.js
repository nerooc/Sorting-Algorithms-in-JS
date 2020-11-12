export default class NewsView {
    constructor(params) {
        this.params = params;
    }

    getHtml() {
        return `<section class="news">
        <div class="news__post">
            <img
                src="./assets/img/news/pc-evening.png"
                alt="post-photo"
                class="news__post__image">
            <div class="news__post__wrapper">
                <h1 class="news__post__wrapper__title">ES6 for everyone</h1>
                <h3 class="news__post__wrapper__date">22 - october - 20</h3>
                <p class="news__post__wrapper__desc">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed id urna sed tortor dignissim semper. Nulla nec dapibus
                    urna, a ultrices ante. Etiam purus lorem, placerat vitae hendrerit id, ultrices
                    sed est. Phasellus scelerisque volutpat consectetur.
                </p>
            </div>
        </div>

        <div class="news__post">
            <img
                src="./assets/img/news/girl-board.png"
                alt="post-photo"
                class="news__post__image">
            <div class="news__post__wrapper">
                <h1 class="news__post__wrapper__title">Why algorithms?</h1>
                <h3 class="news__post__wrapper__date">20 - october - 20</h3>
                <p class="news__post__wrapper__desc">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed id urna sed tortor dignissim semper. Nulla nec dapibus
                    urna, a ultrices ante. Etiam purus lorem, placerat vitae hendrerit id, ultrices
                    sed est. Phasellus scelerisque volutpat consectetur.
                </p>
            </div>
        </div>

        <div class="news__post">
            <img
                src="./assets/img/news/vscode-colors.png"
                alt="post-photo"
                class="news__post__image">
            <div class="news__post__wrapper">
                <h1 class="news__post__wrapper__title">Front-end roadmap</h1>
                <h3 class="news__post__wrapper__date">15 - october - 20</h3>
                <p class="news__post__wrapper__desc">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed id urna sed tortor dignissim semper. Nulla nec dapibus
                    urna, a ultrices ante. Etiam purus lorem, placerat vitae hendrerit id, ultrices
                    sed est. Phasellus scelerisque volutpat consectetur.
                </p>
            </div>
        </div>

        <div class="news__post">
            <img
                src="./assets/img/news/security-js.png"
                alt="post-photo"
                class="news__post__image">
            <div class="news__post__wrapper">
                <h1 class="news__post__wrapper__title">Security in JS apps</h1>
                <h3 class="news__post__wrapper__date">12 - october - 20</h3>
                <p class="news__post__wrapper__desc">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed id urna sed tortor dignissim semper. Nulla nec dapibus
                    urna, a ultrices ante. Etiam purus lorem, placerat vitae hendrerit id, ultrices
                    sed est. Phasellus scelerisque volutpat consectetur.
                </p>
            </div>
        </div>

    </section>
`;
    }
}