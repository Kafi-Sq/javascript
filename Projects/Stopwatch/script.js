// STOPWATCH
let time = 0
let startBtn = document.querySelector('.startBtn')
let stopBtn = document.querySelector('.stopBtn')
let intervalID

startBtn.addEventListener('click', () => {
    start()
})

stopBtn.addEventListener('click', () => {
    stop()
})

document.querySelector('.timer').innerText = time

function start() {
    intervalID = setInterval(() => {
        time++
        document.querySelector('.timer').innerText = time
    }, 1000)
}

function stop() {
    clearInterval(intervalID)
}

function reset() {
    clearInterval(intervalID)
    time = 0
    document.querySelector('.timer').innerText = time
}

// COUNTDOWN

let hours = 0
let mins = 0
let secs = 0
let interID

let hoursInput = document.querySelector('.hours')
let minsInput = document.querySelector('.mins')
let secsInput = document.querySelector('.secs')
let beginBtn = document.querySelector('.beginBtn')
let displayCount = document.querySelector('.displayCount')
let isPaused = false

displayCount.innerText = `0${mins}:0${secs}`

beginBtn.addEventListener('click', () => {
    determine()
})


function determine() {
    if (beginBtn.innerText === 'Start') {
        startCount()
        beginBtn.classList.add('yellow')
    } else if (beginBtn.innerText === 'Pause') {
        pauseCount()
        beginBtn.classList.remove('yellow')
    }
}

function displayTime() {
    if (hours === 0) {
        if (mins < 10) {
            if (secs < 10) {
                displayCount.innerText = `0${mins}:0${secs}`
            } else {
                displayCount.innerText = `0${mins}:${secs}`
            }
        } else {
            displayCount.innerText = `${mins}:${secs}`
        }
    } else {
        if (hours < 10) {
            if (mins < 10) {
                if (secs < 10) {
                    displayCount.innerText = `0${hours}:0${mins}:0${secs}`
                } else {
                    displayCount.innerText = `0${hours}:0${mins}:${secs}`
                }
            } else {
                displayCount.innerText = `0${hours}:${mins}:${secs}`
            }
        } else {
            displayCount.innerText = `${hours}:${mins}:${secs}`
        }
    }
}


function startCount() {
    beginBtn.innerText = 'Pause'

    if (isPaused === true) {
        hours = hours
        mins = mins
        secs = secs
        isPaused = false
    } else {
        hours = Number(hoursInput.value)
        mins = Number(minsInput.value)
        secs = Number(secsInput.value)
    }

    displayTime()

    interID = setInterval(() => {
        secs--

        if (secs < 1 && mins === 0 && hours === 0) {
            console.log('Stop')
            clearInterval(interID)
        } else if (mins >= 1 && secs < 1) {
            mins = mins - 1
            secs = 59
        } else if (hours >= 1 && secs < 1) {
            hours = hours - 1
            mins = 59
            secs = 59
        }

        displayTime()
    }, 1000)
}

function pauseCount() {
    isPaused = true
    clearInterval(interID)
    beginBtn.innerText = 'Start'
}

function cancelCount() {
    clearInterval(interID)
    beginBtn.innerText = 'Start'
    hours = 0
    mins = 0
    secs = 0
    hoursInput.value = 0
    minsInput.value = 0
    secsInput.value = 0
    beginBtn.classList.remove('yellow')
    displayTime()
}