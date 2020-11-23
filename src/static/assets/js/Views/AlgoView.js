export default class AlgoView {
    constructor(params) {
        this.params = params;
    }

    async getHtml() {
        return `<section class="algorithms">
        <div class="algorithms__sort">
            <h1 class="algorithms__sort__title">Bubble Sort</h1>
            <p class="algorithms__sort__desc">Bubble Sort is the simplest sorting algorithm
                that works by repeatedly swapping the adjacent elements if they are in wrong
                order.</p>

                <div class="algorithms__sort__placeholder">
                    <div class="algorithms__sort__placeholder__error" id="errorBox"></div>
                    <div class="algorithms__sort__placeholder__sorting">
                        <canvas class="algorithms__sort__placeholder__sorting__canvas" id="canvas"></canvas>
                        <div class="algorithms__sort__placeholder__sorting__controls">
                            <button class="button start-btn" id="start-btn">START</button>
                            <button disabled class="button pause-btn">PAUSE</button>
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
                <p class="algorithms__sort__wrapper__code-desc">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed id urna sed tortor dignissim semper. Nulla nec
                    dapibus urna, a ultrices ante. Etiam purus lorem, placerat vitae hendrerit id,
                    ultrices sed est. Phasellus scelerisque volutpat consectetur. Praesent blandit
                    blandit dui sed bibendum. Maecenas vel aliquam eros. Integer fermentum dictum
                    sapien, vel suscipit tortor blandit sit amet. Donec tincidunt non orci ut
                    bibendum. Sed porttitor dui dolor, vel ornare nunc malesuada eget. Nunc lobortis
                    felis id risus vestibulum maximus. Sed lectus lectus, ultrices et convallis in,
                    consectetur vitae nisi. Mauris non dignissim nulla. Nam et malesuada ex, vel
                    ultricies sapien. Fusce tristique lectus a nulla maximus bibendum. Fusce egestas
                    sed urna eu feugiat.</p>
            </div>
        </div>
    </section>`;
    }
}