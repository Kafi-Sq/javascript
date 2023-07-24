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

let hours, mins, secs = 0
let interID

let hoursInput = document.querySelector('.hours')
let minsInput = document.querySelector('.mins')
let secsInput = document.querySelector('.secs')
let beginBtn = document.querySelector('.beginBtn')
let displayCount = document.querySelector('.displayCount')
let isPaused = false

beginBtn.addEventListener('click', () => {
    determine()
})


function determine() {
    if (beginBtn.innerText === 'Start') {
        startCount()
    }else if(beginBtn.innerText === 'Pause') {
        pauseCount()
    }
}


function startCount() {
    beginBtn.innerText = 'Pause'

    if(isPaused === true){
        hours = hours
        mins = mins
        secs = secs
        isPaused = false
    }else {
        hours = Number(hoursInput.value)
        mins = Number(minsInput.value)
        secs = Number(secsInput.value)
    }
    
    hoursInput.value = ''
    minsInput.value = ''
    secsInput.value = ''

    if (hours === 0) {
        if (mins < 10) {
            displayCount.innerText = `0${mins}:${secs}`
        } else {
            displayCount.innerText = `${mins}:${secs}`
        }
    } else {
        if (hours < 10) {
            if (mins < 10) {
                displayCount.innerText = `0${hours}:0${mins}:${secs}`
            } else {
                displayCount.innerText = `0${hours}:${mins}:${secs}`
            }
        } else {
            displayCount.innerText = `${hours}:${mins}:${secs}`
        }
    }

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

        if (hours === 0) {
            if (mins < 10) {
                displayCount.innerText = `0${mins}:${secs}`
            } else {
                displayCount.innerText = `${mins}:${secs}`
            }
        } else {
            if (hours < 10) {
                if (mins < 10) {
                    displayCount.innerText = `0${hours}:0${mins}:${secs}`
                } else {
                    displayCount.innerText = `0${hours}:${mins}:${secs}`
                }
            } else {
                displayCount.innerText = `${hours}:${mins}:${secs}`
            }
        }
    }, 1000)
}

function pauseCount() {
    isPaused = true
    clearInterval(interID)
    beginBtn.innerText = 'Start'
}

function cancelCount() {
    clearInterval(interID)
    hours = 0
    mins = 0
    secs = 0
    if (hours === 0) {
        if (mins < 10) {
            displayCount.innerText = `0${mins}:${secs}`
        } else {
            displayCount.innerText = `${mins}:${secs}`
        }
    } else {
        if (hours < 10) {
            if (mins < 10) {
                displayCount.innerText = `0${hours}:0${mins}:${secs}`
            } else {
                displayCount.innerText = `0${hours}:${mins}:${secs}`
            }
        } else {
            displayCount.innerText = `${hours}:${mins}:${secs}`
        }
    }
    beginBtn.innerText = 'Start'
}

