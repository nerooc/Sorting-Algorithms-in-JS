import MainView from './Views/MainView.js';
import AlgoView from './Views/AlgoView.js';
import NewsView from './Views/NewsView.js';
import AboutView from './Views/AboutView.js';
import ErrorView from './Views/ErrorView.js';

export default class Router {
  constructor() {
    // We create an array from the navigation buttons
    this.placeholder = document.getElementById('placeholder');
    this.routeBtns = Array.from(document.querySelectorAll('.routing'));
    this.routes = [
      {
        path: '/',
        view: MainView,
      },
      {
        path: '/about',
        view: AboutView,
      },
      {
        path: '/algorithms',
        view: AlgoView,
      },
      {
        path: '/news',
        view: NewsView,
      },
    ];
  }

  navigateTo = (url) => {
    history.pushState(null, null, url);
    this.route();
  };

  route = () => {
    const loc = location.pathname;

    const [route] = this.routes.filter((route) => {
      return route.path == loc;
    });

    if (!route) {
      const viewObj = new ErrorView();
      this.placeholder.innerHTML = viewObj.getHtml();
      return;
    }

    const viewObj = new route.view();

    this.placeholder.innerHTML = viewObj.getHtml();
  };

  clickHandler = (e) => {
    e.preventDefault();
    this.navigateTo(e.target.href);
  };

  init = () => {
    document.addEventListener('DOMContentLoaded', () => {
      this.routeBtns.forEach((btn) =>
        btn.addEventListener('click', this.clickHandler)
      );
    });

    this.route();
  };
}
