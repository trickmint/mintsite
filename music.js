// Config
var sources = new Array(
                    "azure_shallow_depths", "always_too_late_to_start_over", "mark_rober", "shimeji_bgm", "smg_filesel", "the_tommyinnit", "bombs_over_brooklyn", "circles!", 
                    "nyan", "butterfly_ddr", "two_trucks", "triple_trouble_tails", "reaganomics", "amalgam", "japanese_goblin", "atrocity_fnf", "6trillion_years_and_a_night", 
                    "rainbow_tylenol", "7pm_animalcrossing", "ivanushka", "depths_of_the_mine", "ice_cavern", "mystery_mines", "still_alive_chiptune", "closing_in", "breakout", 
                    "chaoz_fantasy", "wocky", "nyaw", "scratch_post", "common_sense", "bad_citizen", "peak_picnic", "barf_city"
);
// Song names go here. They have to be in the same order as the MP3 files and both the arrays have to have the exact same number of items or it breaks horribly
var titles = new Array(
                    "Shallow Depths from Azure Mines - Evanbear1", "Its Always Too Late To Start Over - Chris Zabriskie", "Cereal Killa - Blue Wednesday", "Welcome! - RoccoW", 
                    "File Select from Super Mario Galaxy - Nintendo", "Able Sisters from Animal Crossing - Nintendo", "Bombs Over Brooklyn - Big Data", "circles! - nekodex", 
                    "Nyan Cat - daniwell-p", "Butterfly - SMiLE.dk", "Two Trucks - Lemon Demon", "Triple Trouble (Tails Part) - MarStarBro",  "Reaganomics - Lemon Demon", 
                    "Amalgam - Toby Fox", "WE ARE JAPANESE GOBLIN - Astral Trip", "Atrocity - Saster", "6 Trillion Years and One Night - kemu",  "Rainbow Tylenol - Kitsune^2", 
                    "7 PM from Animal Crossing - Nintendo", "Ivanushka - Lemon Demon", "Depths of the Mine - Evanbear1", "Ice Cavern - Evanbear1", "Mystery Mines - Evanbear1", 
                    "Still Alive from Portal Chiptune Remix - Chiptuverse", "Closing in - Garrett Williamson", "Breakout from 3D Dot Game Heroes - SuperSweep", "Chaoz Fantasy - ParagonX9", "Wocky - Paperkitty", 
                    "Nyaw - Paperkitty", "Scratch Post - Paperkitty", "The Chattering Lack of Common Sense - Ghost and Pals", "Bad Citizen - Hey Geronimo", "Peak Picnic - Renard", "Barf City - BANDETTO"
);

// Create the variables that we want to keep outside of functions
var audioSrc;  // This will store the audio element on the website.
var titleTxt;  // This will store the "Now Playing" text element.
var prev = -1; // This will store the id of the previous song. We set it as -1 to start since no songs will ever have this ID.

function chooseMusic() {
    let rand; // Create a variable where we'll store the next ID for the song.
    do {
        // Pick a random number:
        rand = Math.floor(Math.random() * sources.length);
        
    } while (rand == prev); // Repeat if the random number is the same as the previous song.
    prev = rand; // Set the previous song ID the new ID we just chose so the next time this script is run it will avoid this new ID.

    // Sets audio source to item "randomNum" of list "sources".
    // The string is put in (Wattson) graves because it lets you put variables in between the strings by doing ${VARNAME}.
    audioSrc.src = `about/music/music_${sources[rand]}.mp3`;
    titleTxt.textContent = titles[rand]; // Sets "Now Playing" text to the item "randomNum" of list "titles".
    audioSrc.play();
}
function onLoad() {
    // Store pointers to the two elements we need by searching for their IDs.
    audioSrc = document.getElementById("song");
    titleTxt = document.getElementById("nowPlaying");
    chooseMusic ();                 // Run chooseMusic to start the first song. 
    audioSrc.addEventListener ("ended", chooseMusic); // Add "chooseMusic" as a callback for once the current song ends.
}

window.addEventListener ("load", onLoad) // Add the "onLoad" function as a callback for when the window loads.

//? trucos de las mentas