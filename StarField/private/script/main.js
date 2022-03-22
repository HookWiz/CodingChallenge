/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  _Template
Details: main script   
Date: 19.03.2022
Version: 1.0
*/
//! Problème: les stars partent toutes dans la même direction, corriger bug.
//* Initialisation
let container = document.querySelector('.container');
container.width = container.getBoundingClientRect().width;
container.height = container.getBoundingClientRect().height;
container.x = container.getBoundingClientRect().x;
container.y = container.getBoundingClientRect().y;
container.center = { x: 0, y: 0 };
container.center.x = container.x + container.width / 2;
container.center.y = container.y + container.height / 2;
let stars = [];
const nbStar = 4;
for (let i = 0; i < nbStar; i++) {
    stars[i] = new Star(container);
}
stars[0].element.style.backgroundColor = 'red';
let centerPoint = document.getElementById('center');
centerPoint.style.top = `${container.center.y}px`;
centerPoint.style.left = `${container.center.x}px`;
//* Update
function update() {
    stars.forEach(star => {
        star.update(container);
    })
}
setInterval(update, [100]);