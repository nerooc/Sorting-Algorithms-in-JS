"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainView =
/*#__PURE__*/
function () {
  function MainView(params) {
    _classCallCheck(this, MainView);

    this.params = params;
  }

  _createClass(MainView, [{
    key: "getHtml",
    value: function getHtml() {
      return "<section class=\"main-content\">\n        <header class=\"header\">\n            <h1 class=\"header__title\">Sorting Algorithms in Javascript</h1>\n            <paragraph class=\"header__desc\">Clubhouse is a project made specifically for\n                Javascript and web developers that want to learn more about sorting algorithms</paragraph>\n            <div class = \"header__buttons\">\n                <button class=\"header__buttons__explore\"  onclick=\"window.open('tomaszgajda.com','_blank');\">EXPLORE</button>\n                <button class=\"header__buttons__additional\">Sign up with Google</button>\n            </div>  \n        </header>\n        <div class=\"content\">\n            <div class=\"advantages\">\n                <div class=\"advantages__post\">\n                    <img\n                        src=\"./assets/img/blaze-adv.svg\"\n                        alt=\"fast\"\n                        class=\"advantages__post__image\">\n                    <div class=\"advantages__post__wrapper\">\n                        <h3 class=\"advantages__post__wrapper__title\">Fastest possible</h3>\n                        <p class=\"advantages__post__wrapper__desc\">Our algorithms are as fast as\n                            possible, there is simply no way someone did it better</p>\n                    </div>\n                </div>\n                <div class=\"advantages__post\">\n                    <img\n                        src=\"./assets/img/block-adv.svg\"\n                        alt=\"easy-and-accessible\"\n                        class=\"advantages__post__image\">\n                    <div class=\"advantages__post__wrapper\">\n\n                        <h3 class=\"advantages__post__wrapper__title\">Easy and accessible</h3>\n                        <p class=\"advantages__post__wrapper__desc\">Each sorting algorithm has a clear\n                            description to help you understand the concept</p>\n                    </div>\n\n                </div>\n                <div class=\"advantages__post\">\n                    <img\n                        src=\"./assets/img/mobile-adv.svg\"\n                        alt=\"mobile-friendly\"\n                        class=\"advantages__post__image\">\n                    <div class=\"advantages__post__wrapper\">\n\n                        <h3 class=\"advantages__post__wrapper__title\">Mobile friendly</h3>\n                        <p class=\"advantages__post__wrapper__desc\">You can use our website comfortably\n                            on various devices, including phones and tablets</p>\n                    </div>\n\n                </div>\n            </div>\n\n            <video class=\"video\" src=\"./assets/video/video.mp4\" controls></video>\n        </div>\n\n    </section>\n\n    <section class=\"feedback\">\n        <img\n            src=\"./assets/img/face-picture.png\"\n            alt=\"face-picture\"\n            class=\"feedback__image\">\n        <div class=\"feedback__wrapper\">\n            <h6 class=\"feedback__wrapper__name\">\n                <b>Talyah Kodumal,\n                    <br>\n                    CTO and Co-Founder\n                    <br></b>\n                airly</h6>\n            <p class=\"feedback__wrapper__quote\">\u201CI have learnt so much using this website! I\n                recommend it to everyone that starts their journey with algorithms and web\n                development!\u201D</p>\n        </div>\n\n    </section>";
    }
  }]);

  return MainView;
}();

exports["default"] = MainView;