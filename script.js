'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '答對了！'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof (guess));

    if (!guess) {
        displayMessage('⛔ 請輸入1~20的整數！');

        // 勝利
    } else if (guess === secretNumber) {
        document.querySelector('h1').textContent = '密碼就是我！'
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 答對了！');
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347'

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

    // 高低唯一的不同是：再（高／低）一點，而他們的共通點是「皆不等於secretNumber」-- 提取公因數，刪除重複
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '🔻 可惜，再低一點！' : '🔺 可惜，再高一點！');
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.check').textContent = '沒手沒腳了啦';
            displayMessage('💥 你已經輸了......');
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }


    //     // 猜測數字太高
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🔻 可惜，再低一點！'
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.check').textContent = '沒手沒腳了啦';
    //         document.querySelector('.message').textContent = '💥 你已經輸了......'
    //         document.querySelector('body').style.backgroundColor = 'red'
    //     }

    //     // 猜測數字太低
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🔺 可惜，再高一點！'
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.check').textContent = '沒手沒腳了啦';
    //         document.querySelector('.message').textContent = '💥 你已經輸了......'
    //         document.querySelector('body').style.backgroundColor = 'red'
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1

    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('🛎 開始遊戲...')
    document.querySelector('h1').textContent = '猜 猜 我 是 誰'
    document.querySelector('.check').textContent = '下好離手';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222'

})