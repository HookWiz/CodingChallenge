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
    /**
     * the constructor of the class star
     * @param {HTMLElement} container  the container of the star
     */
    constructor(container) {
        container.appendChild(this.element);
        this.element.z = container.width;
        this.element.classList.add('star');
        this.element.style.position = 'absolute';
        this.element.size = 1;
        this.element.step = 10;
        this.element.radius = 300;
        this.generate(container.center, this.element.radius);
        this.show();

    };

    update(container) {
        // calculate the position from the center of the container
        this.element.cx = container.center.x - this.element.x;
        this.element.cy = container.center.y - this.element.y;

        if (this.element.cx > 0) {
            this.element.x -= this.element.step;
        } else {
            this.element.x += this.element.step;
        }
        if (this.element.cy > 0) {
            this.element.y -= this.element.step;
        } else {
            this.element.y += this.element.step;
        }
        if (this.element.x > container.x + container.width || this.element.x < 0) {
            this.generate(container.center, this.element.radius);
        }
        if (this.element.y > container.y + container.height || this.element.y < 0) {
            this.generate(container.center, this.element.radius);
        }
        this.show();
    };
    show() {
        this.element.style.top = `${this.element.y}px`;
        this.element.style.left = `${this.element.x}px`;
        this.element.style.width = `${this.element.size}px`;
        this.element.style.height = `${this.element.size}px`;
    };
    /**
     * Generate a position in a circle form the center 
     * @param {object} center   the center of the circle
     * @param {int} radius      the radius of the circle
     */
    generate(center, radius) {
        let maxRangeX = center.x + radius;
        let minRangeX = center.x - radius;
        let maxRangeY = center.y + radius;
        let minRangeY = center.y - radius;
        this.element.x = Math.floor(Math.random() * (maxRangeX - minRangeX)) + minRangeX;
        this.element.y = Math.floor(Math.random() * (maxRangeY - minRangeY)) + minRangeY;
    };
}