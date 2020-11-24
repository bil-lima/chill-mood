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
    mscRain.volume = 0.1
    // play the music
    mscRain.play();
    // changes "SELECT YOUR MODE" to a slider input
    pauseLofi.innerHTML = `<div class="slidecontainer">
    <input type="range" min="1" max="100" value="50" class="slider" id="slidervolume" oninput="volumeAudio(this.value)">
  </div>`
    // changes the size of the chosen option to the entire screen and omits the other options
    rain.style.width = "76%"
    games.style.display = "none"
    book.style.display = "none"
    
}
    
function playGames() {
    mscRain.volume = 0.1
    // play the music
    mscGames.play();
    // changes "SELECT YOUR MODE" to a slider input
    pauseLofi.innerHTML = `<div class="slidecontainer">
    <input type="range" min="1" max="100" value="50" class="slider" id="slidervolume" oninput="volumeAudio(this.value)">
  </div>`
    // changes the size of the chosen option to the entire screen and omits the other options
    games.style.width = "76%"
    rain.style.display = "none"
    book.style.display = "none"
}

function playBook() {
    mscRain.volume = 0.1
    // play the music
    mscBook.play();
    // changes "SELECT YOUR MODE" to a slider input
    pauseLofi.innerHTML = `<div class="slidecontainer">
    <input type="range" min="1" max="100" value="50" class="slider" id="slidervolume" oninput="volumeAudio(this.value)">
    </div>`
    // changes the size of the chosen option to the entire screen and omits the other options
    book.style.width = "76%"
    rain.style.display = "none"
    games.style.display = "none"
}

function pauseAudio() {
    // returns the HTML from a slide bar to "SELECT YOUR MODE"
    pauseLofi.innerHTML = `"<strong>SELECT YOUR MODE</strong>"`
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
//VAR VOLUME FROM THE SLIDER.
/*var slider = document.getElementById('slidervolume').volume // GET THE SLIDER ID
    Number(slider)
function volumeAudio(){ 
    //FUNCTION THAT ACTIVES WHEN RECEIVES INPUT FROM SLIDER 
    valorVolume = slider.value
    mscRain.volume = valorVolume
    mscGames.volume = valorVolume
    mscBook.volume = valorVolume
} */