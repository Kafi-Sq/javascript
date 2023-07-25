const firstBtn = document.querySelector('.first')
const secondBtn = document.querySelector('.second')
const thirdBtn = document.querySelector('.third')
const fourthBtn = document.querySelector('.fourth')
const fifthBtn = document.querySelector('.fifth')
const sixthBtn = document.querySelector('.sixth')
const seventhBtn = document.querySelector('.seventh')
const eighthBtn = document.querySelector('.eighth')
const ninthBtn = document.querySelector('.ninth')

firstBtn.addEventListener('click', () => { play(1, firstBtn) })
secondBtn.addEventListener('click', () => { play(2, secondBtn) })
thirdBtn.addEventListener('click', () => { play(3, thirdBtn) })
fourthBtn.addEventListener('click', () => { play(4, fourthBtn) })
fifthBtn.addEventListener('click', () => { play(5, fifthBtn) })
sixthBtn.addEventListener('click', () => { play(6, sixthBtn) })
seventhBtn.addEventListener('click', () => { play(7, seventhBtn) })
eighthBtn.addEventListener('click', () => { play(8, eighthBtn) })
ninthBtn.addEventListener('click', () => { play(9, ninthBtn) })

const bigArr = [[], [], []]
let player = 'X'
let lastEntry

function play(num, btnEl) {
    btnEl.innerText = player
    lastEntry = player
    if (num <= 3) {
        if (num === 1) {
            bigArr[0][0] = player
        } else if (num === 2) {
            bigArr[0][1] = player
        } else {
            bigArr[0][2] = player
        }
    } else if(num <= 6) {
        if(num === 4) {
            bigArr[1][0] = player
        } else if(num === 5) {
            bigArr[1][1] = player
        } else {
            bigArr[1][2] = player
        }
    } else {
        if(num === 7) {
            bigArr[2][0] = player
        } else if(num === 8) {
            bigArr[2][1] = player
        } else {
            bigArr[2][2] = player
        }
    }

    if(lastEntry === 'X') {
        player = 'O'
    }else {
        player = 'X'
    }
    
    console.log(bigArr)
}