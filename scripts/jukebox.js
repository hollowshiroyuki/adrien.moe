window.addEventListener('load', () => {
    let jukebox = document.getElementById("🎶");

    jukebox.src = "assets/nicetraditionaljapanesesongawesomewow.mp3";
    jukebox.load();
    jukebox.currentTime = 15;
    this.addEventListener('click', function play() {
        this.removeEventListener('click', play);
        jukebox.play();
    });
    console.info("👌");
});