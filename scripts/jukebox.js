window.addEventListener('load', () => {
    let jukebox = document.getElementById("🎶");

    jukebox.src = "assets/nicetraditionaljapanesesongawesomewow.mp3";
    jukebox.load();
    jukebox.currentTime = 15;
    this.addEventListener('click', () => {
        jukebox.play();
    });
    console.info("loaded");
});