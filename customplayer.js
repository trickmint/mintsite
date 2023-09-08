var myAudio = document.getElementById("song");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

function skipSong() {
	myAudio.currentTime=9999999;
}

// Hide volume number if left alone
let timer; // Declare a variable to store the timer
function setTimer() {
    if (timer) {clearTimeout(timer)}  // Clear the previous timer
    // Set a new timer
    timer = setTimeout(function () {
        document.getElementById("vol").innerHTML=""; // Clear volume text
    }, 3000); // after 3 seconds
}

function thisVolume(volume_value) {
    var myvideo = document.getElementById("song");
    document.getElementById("vol").innerHTML=volume_value;
    myvideo.volume = volume_value / 100;
    setTimer();
}