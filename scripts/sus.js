window.addEventListener('load', () => {
    let jukebox = document.getElementById("ðķ");

    document.getElementById("ð").addEventListener('click', function kill() {
        this.removeEventListener('click', kill);
        this.classList.toggle("ðĶī");
        jukebox.loop = false;
        jukebox.src = "assets/slash.mp3";
        jukebox.play();
        jukebox.addEventListener('ended', function party() {
            this.removeEventListener('ended', party);
            document.getElementById("ðĩâðŦ").classList.toggle("ð");
            document.getElementById("ðŠ").classList.toggle("hidden");
            document.querySelector('body').classList.toggle("ðĻ");
            jukebox.loop = true;
            jukebox.src = "assets/sus.mp3";
            jukebox.play();
            document.getElementById("ð").addEventListener('click', function revive() {
                this.removeEventListener('click', revive);
                this.classList.toggle("ðĶī");
                document.getElementById("ðĩâðŦ").classList.toggle("ð");
                document.getElementById("ðŠ").classList.toggle("hidden");
                document.querySelector('body').classList.toggle("ðĻ");
                jukebox.src = "assets/nicetraditionaljapanesesongawesomewow.mp3";
                jukebox.play();
                this.addEventListener('click', kill);
            });
        });
    });
    console.info("ð");
});