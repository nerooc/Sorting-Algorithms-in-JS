// Setting up canvas
waitForElementToDisplay(
  '#canvas',
  function () {
    var canvas = document.getElementById('canvas');
    canvas.width = 900;
    canvas.height = 430;

    function generateBlocks(num = 20) {
      if (num && typeof num !== 'number') {
        alert('First argument must be a typeof Number');
        return;
      }
      for (let i = 0; i < num; i += 1) {
        const value = Math.floor(Math.random() * 100);
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.height = `${value * 3}px`;
        block.style.transform = `translateX(${i * 30}px)`;

        const blockLabel = document.createElement('label');
        blockLabel.classList.add('block__id');
        blockLabel.innerHTML = value;

        block.appendChild(blockLabel);
        canvas.appendChild(block);
      }
    }

    generateBlocks();
  },
  1000,
  9000
);

function waitForElementToDisplay(
  selector,
  callback,
  checkFrequencyInMs,
  timeoutInMs
) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    } else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs) return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}
