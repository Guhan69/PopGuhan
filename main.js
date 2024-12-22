var img = document.getElementById('sleep');
var audio = new Audio("media_pop.mp3");
var chugyugam = document.getElementById('chug');
var count = document.getElementById("score");
var score = 0;

function change() {
        img.src = "GSmile.png";
        
        audio.play();
        increaseScore();
      /*  setTimeout(function() {
                img.src = "GSleep.png";
            }, 400);*/
        if (score % 20 == 0){
                alert("Ada Mwone Mathi. ")
        }
        if (score == 50){
                alert("Mathi enn alle Funde oaranj")
                chugyugam.src="Chugyugam.jpg"
        }
}

function reset() {
        img.src = "GSleep.png";
        audio.play();
}

function imgreset() {
        img.src = "GSmile.png";
}

function increaseScore() {
        score++;
        count.innerHTML = score;

       
}
