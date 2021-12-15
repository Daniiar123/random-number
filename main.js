const minInput = document.querySelector('#lowLimit')
const maxInput = document.querySelector('#upLimit')
const generateBtn = document.querySelector('#generateBtn')
const clearBtn = document.querySelector('#clearBtn')
const randomNumSpan = document.querySelector('#randomNum')


function generateRandomNum(){
    const minNum = Number(minInput.value)
    const maxNum = Number(maxInput.value)
    const randomNum = Math.floor((maxNum - minNum + 1) * Math.random()) + minNum;

    randomNumSpan.innerHTML = randomNum
}