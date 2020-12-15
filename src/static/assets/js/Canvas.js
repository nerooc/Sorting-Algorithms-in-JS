waitForElementToDisplay(
  '#canvas',
  function () {
    const canvas = document.getElementById('canvas');
    const startButton = document.getElementById('start-btn');
    const reloadButton = document.getElementById('reload-btn');

    const codeDescription = document.querySelector(
      '.algorithms__sort__wrapper__code-desc'
    );

    // DEKLARUJEMY NOWEGO WORKERA ///////////////////////////////////////////////////////////////////
    const worker = new Worker('./static/assets/js/FetchWorker.js');

    // Słuchamy czy worker czegoś od nas nie chce
    worker.addEventListener('message', workerMessaged);
    worker.addEventListener('error', workerError);

    // Po kliknięciu w przycisk startujący sortowanie, wysyłamy wiadomość do workera
    // by zaczął fetch'ować dane z url bacon ipsum
    startButton.addEventListener('click', () => {
      worker.postMessage({
        do: 'fetch',
        url: 'https://baconipsum.com/api/?type=meat-and-filler',
      });
    });

    // Funkcja odbierająca wiadomość od Workera
    function workerMessaged(ev) {
      let data = ev.data;
      codeDescription.textContent = JSON.parse(data, null, 2).join(' ') + '\n';
    }

    // Funkcja odbierająca error od Workera
    function workerError(err) {
      console.log(err.message, err.filename);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////

    // Funkcja generująca bloki do sortowania
    function generateBlocks(amount = 20) {
      if (amount && typeof amount !== 'number') {
        alert('First argument must be a typeof Number');
        return;
      }
      for (let i = 0; i < amount; i += 1) {
        const value = Math.floor(Math.random() * 100);
        const block = document.createElement('div');
        block.classList.add('block');

        block.style.height = `${value * 2}px`;
        block.style.left = '2%';
        block.style.transform = `translateX(${i * 120}%)`;

        const blockLabel = document.createElement('label');
        blockLabel.classList.add('block__id');
        blockLabel.innerHTML = value;

        block.appendChild(blockLabel);
        canvas.appendChild(block);
      }
    }

    function swap(el1, el2) {
      return new Promise((resolve) => {
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        const transform1 = style1.getPropertyValue('transform');
        const transform2 = style2.getPropertyValue('transform');

        el1.style.transform = transform2;
        el2.style.transform = transform1;

        // Wait for the transition to end!
        window.requestAnimationFrame(function () {
          setTimeout(() => {
            canvas.insertBefore(el2, el1);
            resolve();
          }, 250);
        });
      });
    }

    async function bubbleSort() {
      let blocks = document.querySelectorAll('.block');
      for (let i = 0; i < blocks.length - 1; i += 1) {
        for (let j = 0; j < blocks.length - i - 1; j += 1) {
          blocks[j].style.backgroundColor = '#FF4949';
          blocks[j + 1].style.backgroundColor = '#FF4949';

          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 500)
          );

          const value1 = Number(blocks[j].childNodes[0].innerHTML);
          const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

          if (value1 > value2) {
            await swap(blocks[j], blocks[j + 1]);
            blocks = document.querySelectorAll('.block');
          }

          blocks[j].style.backgroundColor = '#58B7FF';
          blocks[j + 1].style.backgroundColor = '#58B7FF';
        }

        blocks[blocks.length - i - 1].style.backgroundColor = '#13CE66';
      }
    }

    generateBlocks();

    startButton.addEventListener('click', () => {
      bubbleSort();
      startButton.disabled = true;
    });

    reloadButton.addEventListener('click', () => {
      // Empty the canvas
      startButton.disabled = false;
      canvas.innerHTML = '';
      generateBlocks(20);
    });
  },
  1000,
  9000
);

// Funkcja, która czeka aż element pojawi się w DOM'ie i wtedy wykonuje przekazany callback
// Jest to funkcja niezbędna do funkcjonowania aplikacji jako SPA
function waitForElementToDisplay(
  selector,
  callback,
  checkFrequencyInMs,
  timeoutInMs
) {
  let startTimeInMs = Date.now();

  // IIFE które przechodzi po drzewie w poszukiwaniu naszego elementu
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
