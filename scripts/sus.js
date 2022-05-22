window.addEventListener('load', () => {
    let jukebox = document.getElementById("🎶");

    document.getElementById("📀").addEventListener('click', function kill() {
        this.removeEventListener('click', kill);
        this.classList.toggle("🦴");
        jukebox.loop = false;
        jukebox.src = "assets/slash.mp3";
        jukebox.play();
        jukebox.addEventListener('ended', function party() {
            this.removeEventListener('ended', party);
            document.getElementById("😵‍💫").classList.toggle("😁");
            document.getElementById("🔪").classList.toggle("hidden");
            document.querySelector('body').classList.toggle("🚨");
            jukebox.loop = true;
            jukebox.src = "assets/sus.mp3";
            jukebox.play();
            document.getElementById("📀").addEventListener('click', function revive() {
                this.removeEventListener('click', revive);
                this.classList.toggle("🦴");
                document.getElementById("😵‍💫").classList.toggle("😁");
                document.getElementById("🔪").classList.toggle("hidden");
                document.querySelector('body').classList.toggle("🚨");
                jukebox.src = "assets/nicetraditionaljapanesesongawesomewow.mp3";
                jukebox.play();
                this.addEventListener('click', kill);
            });
        });
    });
    console.info("👌");
});