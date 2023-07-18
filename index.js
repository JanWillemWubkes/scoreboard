let scoreHome = 0
let scoreGuest = 0
let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")


function addOneHome() {
    scoreHome += 1
    countHome.textContent = scoreHome
}

function addTwoHome() {
    scoreHome += 2
    countHome.textContent = scoreHome
}

function addThreeHome() {
    scoreHome += 3
    countHome.textContent = scoreHome
}
function addOneGuest() {
    scoreGuest += 1
    countGuest.textContent = scoreGuest
}

function addTwoGuest() {
    scoreGuest += 2
    countGuest.textContent = scoreGuest
}

function addThreeGuest() {
    scoreGuest += 3
    countGuest.textContent = scoreGuest
}