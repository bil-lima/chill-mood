// play and pause
var mscRain = document.getElementById('rain')
var mscGames = document.getElementById('games')
var mscBook = document.getElementById('book')
var pauseLofi = document.getElementById('future-pause')
// visual edit
var rain = document.getElementById('extendRain')
var games = document.getElementById('extendGames')
var book = document.getElementById('extendBook')

function playRain() {
    // play the music
    mscRain.play();
    // changes "SELECT YOUR MODE" to a pause button
    pauseLofi.innerHTML = "<strong>PAUSE</strong>"
    // changes the size of the chosen option to the entire screen and omits the other options
    rain.style.width = "76%"
    games.style.display = "none"
    book.style.display = "none"
}

function playGames() {
    // play the music
    mscGames.play();
    // changes "SELECT YOUR MODE" to a pause button
    pauseLofi.innerHTML = "<strong>PAUSE</strong>"
    // changes the size of the chosen option to the entire screen and omits the other options
    games.style.width = "76%"
    rain.style.display = "none"
    book.style.display = "none"
}

function playBook() {
    // play the music
    mscBook.play();
    // changes "SELECT YOUR MODE" to a pause button
    pauseLofi.innerHTML = "<strong>PAUSE</strong>"
    // changes the size of the chosen option to the entire screen and omits the other options
    book.style.width = "76%"
    rain.style.display = "none"
    games.style.display = "none"
}

function pauseAudio() {
    // returns the text from "PAUSE" to "SELECT YOUR MODE"
    pauseLofi.innerHTML = "<strong>SELECT YOUR MODE</strong>"
    // pause the music
    mscRain.pause();
    mscGames.pause();
    mscBook.pause();
    // returns the size of the options to default
    rain.style.width = "8.85%"
    games.style.width = "11%"
    book.style.width = "7.736%"
    // returns to showing all options on the screen
    rain.style.display = "block"
    games.style.display = "block"
    book.style.display = "block"
}