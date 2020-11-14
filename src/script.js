import Navbar from "./assets/js/Navbar.js";
import Router from "./assets/js/Router.js";
import "./style.scss";

const nav = new Navbar();
const router = new Router();
nav.init();
router.init();
/*
// Setting up canvas
var canvas = document.getElementById("canvas");
canvas.width = 900;
canvas.height = 430;
var ctx = canvas.getContext('2d');
let startTime = 0;

class Sorting {

    // Constructor
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.squares = new Array(8);
    }

    // ///////////////////////// SUPPORTING STRUCTURES
    // //////////////////////////////// ERRORBOX COULD POSSIBLY BE A CLASS, NOT AN
    // OBJECT An object that allows us to display errors
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

    // Action table
    actionArray = new Array();

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

    // ///////////////////////////// INITIALIZATION
    // /////////////////////////////////// Initializes the squares and indexes
    init() {
        for (let i = 0; i < 8; i++) {
            this.squares[i] = new Square(Math.floor(Math.random() * (16 - 1)) + 1, this.positions[i].x, this.positions[i].y);
        }

        // Testing
        console.log(JSON.parse(JSON.stringify(this.squares)));

        // Drawing all the squares and indexes on the canvas
        this.drawSquares();
        this.drawIndexes();
    }

    // //////////////////////////////// DRAWING ///////////////////////////////////
    // Draws all the squares
    drawSquares() {
        for (const square of this.squares) {
            square.draw();
        }
    }

    // Adding indexes to the canvas
    drawIndexes() {
        for (let i = 0; i < 8; i++) {
            ctx.font = "normal normal bold 20px Roboto";
            ctx.fillStyle = "black";
            ctx.fillText(i, this.positions[i].x + 25, this.positions[i].y + 100);
        }
    }

    // Marks the squares that are currently compared
    mark() {}

    //Redraws the canvas
    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawSquares();
        this.drawIndexes();
    }

    // //////////////////////////////// SORTING ///////////////////////////////////
    // Main sort function
    sortx() {

        let len = this.squares.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1; j++) {

                if (this.squares[j].value > this.squares[j + 1].value) {
                    let tmp = this.squares[j];

                    // Change positions on the canvas
                    this
                        .squares[j]
                        .move(this.positions[j + 1]);
                    this
                        .squares[j]
                        .anim();

                    this
                        .squares[j + 1]
                        .move(this.positions[j]);
                    this
                        .squares[j + 1]
                        .anim();

                    // Change positions in the array
                    this.squares[j] = this.squares[j + 1];
                    this.squares[j + 1] = tmp;

                }

            }
        }

    }

}

// Class defining the square containing value
class Square {
    constructor(value, posX, posY, color = "black") {
        this.value = value;
        this.nextX;
        this.nextY;
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.duration = 1000;
        this.width = 65;
        this.height = 65;
    }

    // Method that allows us to draw the square
    draw(x = this.posX, y = this.posY) {
        if (this.nextX > x) {
            ctx.clearRect(x - 20, y - 10, this.width, this.height + 20);
        } else if (this.nextX < x) {
            ctx.clearRect(x + 20, y - 10, this.width, this.height + 20);
        }
        ctx.beginPath();
        // Configuration
        ctx.lineWidth = 7;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = "white";

        // Draw square
        ctx.fillRect(x, y, this.width, this.height);
        ctx.strokeRect(x, y, this.width, this.height);

        // Configuration
        ctx.font = "normal normal bold 35px Roboto";
        ctx.fillStyle = "red";

        // Draw value
        ctx.fillText(this.value, this.value <= 9
            ? x + this.width / 3
            : x + this.width / 5.5, y + 2 * this.height / 3);
    }

    move(position) {
        this.nextX = position.x;
        this.nextY = position.y;
    }

    anim(time) {
        // deltaTime should be in the range [0 ~ 1]
        var deltaTime = (time) / this.duration;
        // currentPos = previous position + (difference * deltaTime)
        var currentX = this.posX + ((this.nextX - this.posX) * deltaTime);
        var currentY = this.posY + ((this.nextY - this.posY) * deltaTime);

        if (deltaTime >= 1) { // this means we ended our animation
            this.posX = this.nextX; // reset x variable
            this.posY = this.nextY; // reset y variable
            startTime = null; // reset startTime
            this.draw(this.posX, this.posY); // draw the last frame, at required position
        } else {
            this.draw(currentX, currentY);
            requestAnimationFrame((time) => this.anim(time)); // do it again
        }
    }
}

// Initializing the sorting procedure
let sort = new Sorting(900, 430);
sort.init();
sort.sortx();
*/
