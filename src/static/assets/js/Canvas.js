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
    function generateBlocks(num = 20) {
      if (num && typeof num !== 'number') {
        alert('First argument must be a Number');
        return;
      }

      for (let i = 0; i < num; i += 1) {
        // Losujemy wartość bloku
        const value = Math.floor(Math.random() * 100);

        // Tworzymy blok
        const block = document.createElement('svg');

        // Nadajemy mu klasę
        block.classList.add('block');

        // Ustawiamy go w odpowiednim miejscu i dajemy odpowiednią wysokość
        block.style.height = `${value * 2}px`;
        block.style.left = '2%';

        window.innerWidth > 800
          ? (block.style.transform = `translateX(${i * 2}vw)`)
          : (block.style.transform = `translateX(${i * 4}vw)`);
        // Próbowałem na wartościach procentowych, natomiast psuło to animację, elementy zaczęły nachodzić na siebie

        // Tworzymy opis bloku
        const blockLabel = document.createElement('label');
        blockLabel.classList.add('block__id');
        blockLabel.innerHTML = value;

        // Dodajemy opis do bloku i blok do przeznaczonego elementu canvas
        block.appendChild(blockLabel);
        canvas.appendChild(block);
      }
    }

    // Funkcja zamieniająca dwa pliki miejscami
    function swap(el1, el2) {
      return new Promise((resolve) => {
        // Kopiujemy style obu elementów
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        // Bierzemy pozycje z własciwości transform
        const transform1 = style1.getPropertyValue('transform');
        const transform2 = style2.getPropertyValue('transform');

        // Zamieniamy pozycjami
        el1.style.transform = transform2;
        el2.style.transform = transform1;

        // Razem z animacją zamieniamy elementy miejscami w kodzie HTML
        window.requestAnimationFrame(function () {
          setTimeout(() => {
            canvas.insertBefore(el2, el1);
            resolve();
          }, 250);
        });
      });
    }

    // Funkcja przedstawiająca sortowanie bąbelkowe na naszych elementach
    async function bubbleSort() {
      // NodeList stworzony z naszych bloków
      let blocks = document.querySelectorAll('.block');

      // Sortowanie
      for (let i = 0; i < blocks.length - 1; i += 1) {
        for (let j = 0; j < blocks.length - i - 1; j += 1) {
          // Zamiana kolorów elementów które porównujemy
          blocks[j].style.backgroundColor = '#FF4949';
          blocks[j + 1].style.backgroundColor = '#FF4949';

          // Opóźnienie
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 500)
          );

          // Wyciągnięcie wylosowanych wcześniej wartości z porównywanych bloków
          const value1 = Number(blocks[j].childNodes[0].innerHTML);
          const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

          // Porównanie
          if (value1 > value2) {
            // Zamiana
            await swap(blocks[j], blocks[j + 1]);
            // Ponowne wybranie bloków, tym razem razem ze zmianami
            blocks = document.querySelectorAll('.block');
          }

          // Elementy wracają do początkowych kolorów
          blocks[j].style.backgroundColor = '#58B7FF';
          blocks[j + 1].style.backgroundColor = '#58B7FF';
        }

        // Element zatwierdzony (ostatni) dostaje zielony kolor
        blocks[blocks.length - i - 1].style.backgroundColor = 'green';
      }
    }

    // Od razu generujemy bloki
    generateBlocks();

    // Po wciśnięciu przycisku start, włączamy sortowanie
    startButton.addEventListener('click', () => {
      bubbleSort();
      startButton.disabled = true;
    });

    // Po wcisnięciu przycisku reload, tworzymy nowy zestaw bloków
    reloadButton.addEventListener('click', () => {
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

  // IIFE które poszukuje nasz element
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
