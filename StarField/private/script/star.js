/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  CodingChallenge
Details:  the class Star
Date: 19.03.2022
Version: 1.0
*/

/**
 * A graphics effect
 */
class Star {
    container;
    element = document.createElement('div');
    size = 10;
    speed = 1;
    u;
    /**
     * the constructor of the class star
     * @param {HTMLElement} container  the container of the star
     */
    constructor(container) {
        // use the same reference
        this.container = container;
        this.container.appendChild(this.element);
        this.element.classList.add('star');
        this.u = {
            x: this.container.width / 1000,
            y: this.container.height / 1000,
        };
        this.generate();
        this.show();
    };
    /**
     * Generate a random position in a an area around the center 
     * @param {object} center   the center of the area
     * @param {int} radius      the radius of the area
     */
    generate() {
        let center = this.container.center;
        let radius = 100;
        let maxRangeX = center.x + radius;
        let minRangeX = center.x - radius;
        let maxRangeY = center.y + radius;
        let minRangeY = center.y - radius;
        this.x = Math.floor(Math.random() * (maxRangeX - minRangeX)) + minRangeX;
        this.y = Math.floor(Math.random() * (maxRangeY - minRangeY)) + minRangeY;
    };
    /**
     * calculate the position from the center of the container
     */
    positionFromCenter() {
        this.cx = (this.x - container.center.x) / this.u.x;
        this.cy = (this.y - container.center.y) / this.u.y;
    };
    /**
     * calculate the slope
     */
    calculateSlope() {
        this.slope = this.cy / this.cx;
    };
    /**
     * update the x position
     */
    updateXPosition() {
        if (this.cx > 0) {
            this.cx += this.speed;
        } else {
            this.cx -= this.speed;
        }
        this.x = (this.container.center.x + this.cx) * this.u.x;
    };
    /**
     * update the y position
     */
    updateYPosition() {
        this.cy = this.slope * this.cx;
        this.y = (this.container.center.y + this.cy) * this.u.y;
    };
    /**
     * update the position
     */
    updatePosition() {
        this.updateXPosition();
        this.calculateSlope();
        this.updateYPosition();
    };
    /**
     * Regenerate the star if it goes out of the container
     */
    regenerate() {
        // if the star go beyond the border of the container regenerate the star
        if (this.x > this.container.x + this.container.width || this.x < 0) {
            this.generate();
        }
        if (this.y > this.container.y + this.container.height || this.y < 0) {
            this.generate();
        }
    };
    /**
     * show the star
     */
    show() {
        this.element.style.top = `${this.y}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
    };
    /**
     * update the star
     */
    update() {
        this.positionFromCenter();
        this.updatePosition();
        this.regenerate();
        this.show();
    };
}