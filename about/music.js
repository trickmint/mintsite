window.onload = chooseMusic;

var music = new Array(
                    "music/music_i_dont_even_know.mp3","music/music_azure_shallow_depths.mp3","music/music_always_too_late_to_start_over.mp3", 
                    "music/music_mark_rober.mp3", "music/music_shimeji_bgm.mp3", "music/music_smg_filesel.mp3", "music/music_the_tommyinnit.mp3",
                    "music/music_bombs_over_brooklyn.mp3", "music/music_circles!.mp3", "music/music_ratio.mp3", "music/music_nyan.mp3", "music/music_butterfly_DDR_GB.mp3",
                    "music/music_two_trucks.mp3", "music/music_triple_trouble_tails.mp3", "music/music_reaganomics.mp3", "music/music_amalgam.mp3"
                    );

//Song names go here. They have to be in the same order as the MP3 files and both the arrays have to have the exact same number of items or it breaks horribly
var songtitles = new Array(
                         "What Does Anybody Know About Anything - Chris Zabriskie", "Shallow Depths from Azure Mines - Evanbear1", "Its Always Too Late To Start Over - Chris Zabriskie", 
                         "Cereal Killa - Blue Wednesday", "Welcome! - RoccoW", "File Select from Super Mario Galaxy - Nintendo", "Able Sisters from Animal Crossing - Nintendo",
                         "Bombs Over Brooklyn - Big Data", "circles! - nekodex", "The Ratio and Fraction song - The Singing History Teachers", "Nyan Cat - daniwell-p", "Butterfly DDR GB - SMiLE.dk",
                         "Two Trucks - Lemon Demon", "Triple Trouble (Tails Part) - Mike Geno", "Reaganomics - Lemon Demon", "Amalgam - Toby Fox"
                         );

function chooseMusic() {
     var randomNum = Math.floor(Math.random() * music.length);
     document.getElementById("song").src = music[randomNum];
     var chosensong=songtitles[randomNum];
     let span = document.getElementById('nowPlaying');
     span.textContent = chosensong; 

}
     