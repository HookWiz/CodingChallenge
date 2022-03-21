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
    element = document.createElement('div');
    size = 1;
    speed = 1;

    /**
     * the constructor of the class star
     * @param {HTMLElement} container  the container of the star
     */
    constructor(container) {
        container.appendChild(this.element);
        this.element.classList.add('star');
        this.generate(container.center);
        this.show();
    };
    /**
     * Generate a random position in a an area around the center 
     * @param {object} center   the center of the area
     * @param {int} radius      the radius of the area
     */
    generate(center) {
        let radius = 100;
        let maxRangeX = center.x + radius;
        let minRangeX = center.x - radius;
        let maxRangeY = center.y + radius;
        let minRangeY = center.y - radius;
        this.element.x = Math.floor(Math.random() * (maxRangeX - minRangeX)) + minRangeX;
        this.element.y = Math.floor(Math.random() * (maxRangeY - minRangeY)) + minRangeY;
    };
    /**
     * calculate the position from the center of the container
     */
    positionFromCenter() {
        this.element.cx = this.element.x - container.center.x;
        this.element.cy = this.element.y - container.center.y;
    };
    /**
     * calculate the slope
     */
    calculateSlope() {
        this.element.slope = this.element.cy / this.element.cx;
    };
    /**
     * update the x position
     */
    updateXPosition() {
        if (this.element.cx > 0) {
            this.element.cx += this.speed;
        } else {
            this.element.cx -= this.speed;
        }
        this.element.x = container.center.x + this.element.cx;
    };
    /**
     * update the y position
     */
    updateYPosition() {
        this.element.cy = this.element.slope * this.element.cx;
        this.element.y = container.center.y + this.element.cy;
    };
    /**
     * update the position
     */
    updatePosition() {
        this.calculateSlope();
        this.updateXPosition();
        this.updateYPosition();
    };
    /**
     * Regenerate the star if it goes out of the container
     */
    regenerate() {
        // if the star go beyond the border of the container regenerate the star
        if (this.element.x > container.x + container.width || this.element.x < 0) {
            this.generate(container.center, this.element.radius);
        }
        if (this.element.y > container.y + container.height || this.element.y < 0) {
            this.generate(container.center, this.element.radius);
        }
    };
    /**
     * show the star
     */
    show() {
        this.element.style.top = `${this.element.y}px`;
        this.element.style.left = `${this.element.x}px`;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
    };
    /**
     * update the star
     * @param {HtmlElement} container 
     */
    update(container) {
        this.positionFromCenter();
        this.updatePosition();
        this.regenerate();
        this.show();
    };
}