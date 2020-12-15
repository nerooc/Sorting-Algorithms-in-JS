export default class AlgoView {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return `<section class="error">
      <h1 class="error__header">
      Page not found
      </h1>
      <h2 class="error__desc">
      We can't seem to find the page you are looking for. Try going back.
      </h2>
  </section>`;
  }
}
