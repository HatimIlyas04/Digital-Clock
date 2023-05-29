function DigitalClick() {
    let date = new Date();
    let hours = date.getHours()
    let munites = date.getMinutes()
    let seconds = date.getSeconds()
    let flag = 'AM'

    if (hours == 0) {
        hours = 12
    }

    if (hours > 12) {
        hours = hours - 12
        flag = 'PM'
    }
    if (seconds<10) {
        seconds = "0" + seconds
    }
    if (munites < 10) {
        munites = `0${munites}`
    }

    let a = document.querySelector('.clock').innerText = ` ${hours}: ${munites}: ${seconds} ${flag}`
    setTimeout(function () {
        DigitalClick()
    },1000)
}

DigitalClick()