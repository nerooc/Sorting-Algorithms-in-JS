export default class AlgoView {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return `<section class="algorithms">
        <div class="algorithms__sort">
            <h1 class="algorithms__sort__title">Bubble Sort</h1>
            <p class="algorithms__sort__desc">(W razie braku renderowania elementów do sortowania, proszę odświeżyć stronę) <br> Bubble Sort is the simplest sorting algorithm
                that works by repeatedly swapping the adjacent elements if they are in wrong
                order.</p>

                <div class="algorithms__sort__placeholder">
                    <div class="algorithms__sort__placeholder__error" id="errorBox"></div>
                    <div class="algorithms__sort__placeholder__sorting">
                        <div class="algorithms__sort__placeholder__sorting__canvas" id="canvas"></div>
                        <div class="algorithms__sort__placeholder__sorting__controls">
                            <button class="button start-btn" id="start-btn">START</button>
                            <button class="button reload-btn" id="reload-btn">RELOAD</button>
                        </div>
                    </div>
                </div>
                <h3 class="algorithms__sort__subtitle">Code</h3>

            <div class="algorithms__sort__wrapper">
                <div class="algorithms__sort__wrapper__code">
    let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
    };
    </div> 
            <div>
                <h1> Wynik fetch'a z WebWorkera:</h1>
                <p class="algorithms__sort__wrapper__code-desc"></p>
            </div>     
            </div>
        </div>
    </section>`;
  }
}
