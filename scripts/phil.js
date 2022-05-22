function init() {
  document.getElementById('🎶').currentTime = 15;

  document.getElementsByTagName('body')[0].addEventListener('click', () => {
    document.getElementById('🎶').play();
  }, false);

  document.querySelectorAll('.🌀').forEach((circlegraph)=>{
    let circles = circlegraph.querySelectorAll('div')
    let angle = 360-90, dangle = 360 / circles.length;
    for(let i = 0; i < circles.length; i++){
      let circle = circles[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${circlegraph.clientWidth / 2}px)`
    }
  })

  document.getElementById("📀").addEventListener('click', function kill() {
    this.removeEventListener('click', kill);
    document.querySelector("#📀 img").src = "assets/adrien_slash.png";
    document.getElementById("🔪").style.visibility = "visible";
    let jukebox = document.getElementById("🎶")
    jukebox.loop = false;
    jukebox.src = "assets/slash.mp3";
    jukebox.play();
    jukebox.addEventListener('ended', () => {
      jukebox.src = "assets/sus.mp3";
      jukebox.loop = true;
      jukebox.play();
    });
    console.log("slash !");
  });

  console.log("\
            .:::----::.\n\
          .:-----========-.\n\
        :------------======-::\n\
     ::---------------=======*#-\n\
   .+::----------------=======*%-\n\
  .*-:------------------===++=-*#.\n\
  =*:--------------------==+++==%+\n\
 .*---:::::---------------=+*+++#*.\n\
 =*---=++++++=--=+*****#******++##:\n\
 =*===*###**#+==+*##**#%%#*****+##.\n\
 :*====+***++*-=+*++#***+===+*++#*\n\
 -#------====---==--===-----=+++#*\n\
 :%=------------------------=+++%=\n\
  :=======+++*+++**+++=----=+*+**\n\
   .+++*##*##%%#%###%%##****##**-\n\
    =++#%%%*++********%@@#**##**=\n\
    :*=+=-+-:::::::--=+=+*+##**#+.\n\
    .**==-=+++++++**#*==+**#####+:\n\
    .-#*++=:+**##*++**+**#####%%*-\n\
      :##**: :-..-: -######%%%#+-:\n\
     . :**#*.-#:.#+:-#%%%%@%+-::.\n\
      :  :##=+#*+*#++#%%@#=..:.\n\
      ..--....-=+*##%#.:=.:-.\n\
      :*+.          ... .+*:\n\
        .--::-==.   ..-===+.\n\
         .::-::. .:--=+*%+=-\n\
         .:::-==-==+**::%*==.\n\
          :=---=***#*:  ##+=-\n\
           .+###***+:   *#+=+=\n\
            -+=+*.      +#*+=*.\n\
            --:-+=      +#*+=*=\n\
          :-+*++*@=    .##*+++#.\n\
        -++**#%@@@+    :#+=+**%*\n\
    .:=++**##%%%%@*    =#***###@=\n\
  .++**###%%%%@@@@+    :#****###%-\n\
  #%####%%@@@@#+-.     .##*+++*##%:\n\
  -*%%%%%%%*=.          ##*****##%#\n\
      ..                =%%%%%%@@@@.\n\
                         :-=+***+:");
}