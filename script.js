var canvas = document.getElementById("canvas");
canvas.width = 900;
canvas.height = 430;
var ctx = canvas.getContext('2d');

class Sorting {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.squares = new Array(8);
    }

    // ERRORBOX COULD POSSIBLY BE A CLASS, NOT A An object that allows to display
    // errors
    errorBox = {
        // DOM representation of the object
        domElement: document.getElementById("errorBox"),

        // Default error message
        defaultMessage: "Sorry, something went wrong!",

        // Method allowing us to display errors
        displayMessage: function (message = this.defaultMessage) {
            this.domElement.style.visibility = "visible";
            this.domElement.innerHTML = message;
        }
    }

    // 8 positions on the canvas
    positions = [
        {
            x: 30,
            y: 50
        }, {
            x: 140,
            y: 50
        }, {
            x: 250,
            y: 50
        }, {
            x: 360,
            y: 50
        }, {
            x: 470,
            y: 50
        }, {
            x: 580,
            y: 50
        }, {
            x: 690,
            y: 50
        }, {
            x: 800,
            y: 50
        }
    ];

    // Initializes the squares and indexes
    init() {
        
        // Drawing all the squares on the canvas
        for (let i = 0; i < 8; i++) {
            this.squares[i] = new Square(Math.floor(Math.random() * (10 - 1)) + 1, this.positions[i].x, this.positions[i].y);
            this
                .squares[i]
                .draw();
        }

        // adding indexes to the canvas
        for (let i = 0; i < 8; i++) {
            ctx.font = "normal normal bold 20px Roboto";
            ctx.fillStyle = "black";
            ctx.fillText(i, this.positions[i].x + 25, this.positions[i].y + 100);
        }
    }

    // Swaps two squares
    swap() {}

    // Marks the squares that are currently compared
    mark() {}

    // Main sort function
    sort() {}

}

// Class defining the square containing value
class Square {
    constructor(value, posX, posY, color = "black") {
        this.value = value;
        this.posX = posX;
        this.posY = posY;
        this.color = color;

        this.width = 65;
        this.height = 65;
    }

    // Method that allows us to draw the square
    draw() {

        // Configuration
        ctx.lineWidth = 7;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = "white";

        // Draw square
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
        ctx.strokeRect(this.posX, this.posY, this.width, this.height);

        // Configuration
        ctx.font = "normal normal bold 35px Roboto";
        ctx.fillStyle = "red";

        // Draw value
        ctx.fillText(this.value, this.posX + this.width / 3, this.posY + 2 * this.height / 3);
    }
}

// Initializing the sorting procedure
let sort = new Sorting(900, 430);
sort.init();
