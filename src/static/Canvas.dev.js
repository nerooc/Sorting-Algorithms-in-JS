"use strict";

waitForElementToDisplay('#canvas', function () {
  var canvas = document.getElementById('canvas');
  var startButton = document.getElementById('start-btn');
  var reloadButton = document.getElementById('reload-btn');
  var codeDescription = document.querySelector('.algorithms__sort__wrapper__code-desc'); // DEKLARUJEMY NOWEGO WORKERA ///////////////////////////////////////////////////////////////////

  var worker = new Worker('./static/assets/js/FetchWorker.js'); // Słuchamy czy worker czegoś od nas nie chce

  worker.addEventListener('message', workerMessaged);
  worker.addEventListener('error', workerError); // Po kliknięciu w przycisk startujący sortowanie, wysyłamy wiadomość do workera
  // by zaczął fetch'ować dane z url bacon ipsum

  startButton.addEventListener('click', function () {
    worker.postMessage({
      "do": 'fetch',
      url: 'https://baconipsum.com/api/?type=meat-and-filler'
    });
  }); // Funkcja odbierająca wiadomość od Workera

  function workerMessaged(ev) {
    var data = ev.data;
    codeDescription.textContent = JSON.parse(data, null, 2).join(' ') + '\n';
  } // Funkcja odbierająca error od Workera


  function workerError(err) {
    console.log(err.message, err.filename);
  } ////////////////////////////////////////////////////////////////////////////////////////////////
  // Funkcja generująca bloki do sortowania


  function generateBlocks() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

    if (num && typeof num !== 'number') {
      alert('First argument must be a Number');
      return;
    }

    for (var i = 0; i < num; i += 1) {
      // Losujemy wartość bloku
      var value = Math.floor(Math.random() * 100); // Tworzymy blok

      var block = document.createElement('svg'); // Nadajemy mu klasę

      block.classList.add('block'); // Ustawiamy go w odpowiednim miejscu i dajemy odpowiednią wysokość

      block.style.height = "".concat(value * 2, "px");
      block.style.left = '2%';
      window.innerWidth > 800 ? block.style.transform = "translateX(".concat(i * 2, "vw)") : block.style.transform = "translateX(".concat(i * 4, "vw)"); // Próbowałem na wartościach procentowych, natomiast psuło to animację, elementy zaczęły nachodzić na siebie
      // Tworzymy opis bloku

      var blockLabel = document.createElement('label');
      blockLabel.classList.add('block__id');
      blockLabel.innerHTML = value; // Dodajemy opis do bloku i blok do przeznaczonego elementu canvas

      block.appendChild(blockLabel);
      canvas.appendChild(block);
    }
  } // Funkcja zamieniająca dwa pliki miejscami


  function swap(el1, el2) {
    return new Promise(function (resolve) {
      // Kopiujemy style obu elementów
      var style1 = window.getComputedStyle(el1);
      var style2 = window.getComputedStyle(el2); // Bierzemy pozycje z własciwości transform

      var transform1 = style1.getPropertyValue('transform');
      var transform2 = style2.getPropertyValue('transform'); // Zamieniamy pozycjami

      el1.style.transform = transform2;
      el2.style.transform = transform1; // Razem z animacją zamieniamy elementy miejscami w kodzie HTML

      window.requestAnimationFrame(function () {
        setTimeout(function () {
          canvas.insertBefore(el2, el1);
          resolve();
        }, 250);
      });
    });
  } // Funkcja przedstawiająca sortowanie bąbelkowe na naszych elementach


  function bubbleSort() {
    var blocks, i, j, value1, value2;
    return regeneratorRuntime.async(function bubbleSort$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // NodeList stworzony z naszych bloków
            blocks = document.querySelectorAll('.block'); // Sortowanie

            i = 0;

          case 2:
            if (!(i < blocks.length - 1)) {
              _context.next = 24;
              break;
            }

            j = 0;

          case 4:
            if (!(j < blocks.length - i - 1)) {
              _context.next = 20;
              break;
            }

            // Zamiana kolorów elementów które porównujemy
            blocks[j].style.backgroundColor = '#FF4949';
            blocks[j + 1].style.backgroundColor = '#FF4949'; // Opóźnienie

            _context.next = 9;
            return regeneratorRuntime.awrap(new Promise(function (resolve) {
              return setTimeout(function () {
                resolve();
              }, 500);
            }));

          case 9:
            // Wyciągnięcie wylosowanych wcześniej wartości z porównywanych bloków
            value1 = Number(blocks[j].childNodes[0].innerHTML);
            value2 = Number(blocks[j + 1].childNodes[0].innerHTML); // Porównanie

            if (!(value1 > value2)) {
              _context.next = 15;
              break;
            }

            _context.next = 14;
            return regeneratorRuntime.awrap(swap(blocks[j], blocks[j + 1]));

          case 14:
            // Ponowne wybranie bloków, tym razem razem ze zmianami
            blocks = document.querySelectorAll('.block');

          case 15:
            // Elementy wracają do początkowych kolorów
            blocks[j].style.backgroundColor = '#58B7FF';
            blocks[j + 1].style.backgroundColor = '#58B7FF';

          case 17:
            j += 1;
            _context.next = 4;
            break;

          case 20:
            // Element zatwierdzony (ostatni) dostaje zielony kolor
            blocks[blocks.length - i - 1].style.backgroundColor = 'green';

          case 21:
            i += 1;
            _context.next = 2;
            break;

          case 24:
          case "end":
            return _context.stop();
        }
      }
    });
  } // Od razu generujemy bloki


  generateBlocks(); // Po wciśnięciu przycisku start, włączamy sortowanie

  startButton.addEventListener('click', function () {
    bubbleSort();
    startButton.disabled = true;
  }); // Po wcisnięciu przycisku reload, tworzymy nowy zestaw bloków

  reloadButton.addEventListener('click', function () {
    startButton.disabled = false;
    canvas.innerHTML = '';
    generateBlocks(20);
  });
}, 1000, 9000); // Funkcja, która czeka aż element pojawi się w DOM'ie i wtedy wykonuje przekazany callback
// Jest to funkcja niezbędna do funkcjonowania aplikacji jako SPA

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now(); // IIFE które poszukuje nasz element

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