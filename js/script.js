"use strict" 

let btnBurgerOpen = document.getElementById('opened');
let btnBurgerClose = document.getElementById('closed');
let burgerList = document.getElementById('burger-list');

btnBurgerOpen.addEventListener('click', () => {
    btnBurgerOpen.style.display = "none";
    btnBurgerClose.style.display = "block";
    burgerList.style.display = "block";
} ,false);

btnBurgerClose.addEventListener('click', () => {
    btnBurgerClose.style.display = "none";
    btnBurgerOpen.style.display = "block";
    burgerList.style.display = "none";
} ,false);

burgerList.addEventListener('click', () => {
    btnBurgerClose.style.display = "none";
    btnBurgerOpen.style.display = "block";
    burgerList.style.display = "none";
} ,false);

