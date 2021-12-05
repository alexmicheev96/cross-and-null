'use strict';

const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.querySelector('.content');
const modalResult = document.querySelector('.modal-result_wrapper');
const modalOverlay = document.querySelector('.overlay');
const modalBtnClose = document.querySelector('.btn-closer');


area.addEventListener('click', (event) => {
    if (event.target.matches('div.box')) {
        if (move % 2 === 0) {                             // первыми ходят крестики
            event.target.textContent = 'X';
        } else {
            event.target.textContent = 'O';
        }
        move++;    // постфиксный декремент добавляет следующий шаг
        check();
    } 
});

const check = function () {
    let boxes = document.querySelectorAll('.box');
    const arr = [
        [0, 1, 2],
        [3, 4 ,5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3 ,6],
        [1, 4, 7],
        [2, 5, 8]
    ];
    for(let i = 0; i< arr.length; i++) {
        if(boxes[arr[i][0]].textContent == "X"  &&  boxes[arr[i][1]].textContent == "X" && boxes[arr[i][2]].textContent == "X") {   // зачем нужем массив внутри псевдомассива boxes?  так мы указываем что с помощью данного массива и с помощью цикла перебираем каждый элемент arr (который в свою очередь тоже является массивом) логика такая  что с помощью такой операции мы обращаеся к каждому к каждой области через цикл 
            result = 'крестики';
            prepareResult(result);
        } else if (boxes[arr[i][0]].textContent == "O"  &&  boxes[arr[i][1]].textContent == "O" && boxes[arr[i][2]].textContent == "O") {
            result = 'нолики';
            prepareResult(result);      // в фунцкию  prepareResult в качесстве аргумента передаем значение переменной result
        } else if (move == 9) {
            result = 'ничья'
            drawResult(result);
        }
    }
};

const prepareResult = function(winner) {
    contentWrapper.innerHTML = `победили ${winner}!`;  // с помощью итерации присваиваем знаачение
    modalResult.style.display = 'block';
};

const drawResult = function(draw) {
    contentWrapper.innerHTML = `${draw}!`;
    modalResult.style.display = 'block';
};

const closeModal = function() {
    modalResult.style.display = 'none';
    location.reload();
};
modalOverlay.addEventListener('click', closeModal);
modalBtnClose.addEventListener('click', closeModal);