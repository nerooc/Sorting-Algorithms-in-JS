export default class AboutView {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return `<section class="about">
        <div class="about__wrapper">
            <h1 class="about__wrapper__title">My name is Thomas...</h1>
            <p class="about__wrapper__desc">I'm a third year Applied Computer Science
                student at the AGH University of Science and Technology in Krakow. I have been
                learning Front-End technologies for a year now and this time was just enough to
                make sure that this is my place in the industry. <br><br> This website is one of my
                university projects, but during the process it turned out to be one of my
                favourites. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna
                sed tortor dignissim semper. Nulla nec dapibus urna, a ultrices ante. Etiam
                purus lorem, placerat vitae hendrerit id, ultrices sed est. Phasellus
                scelerisque volutpat consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </p>
        </div>
        <img src="../static/assets/img/about-photo.jpg" alt="about-photo" class="about__photo">
    </section>`;
  }
}
