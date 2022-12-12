var myAudio = document.getElementById("song");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

function skipSong() {
	myAudio.currentTime=9999999;
}

function thisVolume(volume_value) {
    var myvideo = document.getElementById("song");
    document.getElementById("vol").innerHTML=volume_value;
    myvideo.volume = volume_value / 100;   
}