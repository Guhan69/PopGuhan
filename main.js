var img = document.getElementById('sleep');
// var audio = new Audio("./media/pop.mp3");
var count = document.getElementById("score");
var score = 0;

function change() {
        img.src = "GSmile.png";
        
      //  audio.play();
        increaseScore();
        setTimeout(function() {
                img.src = "GSleep.png";
            }, 400);
        if (score >= 50){
                alert("Ada Mwone Mathi. ")
        }
      
}

function reset() {
        img.src = "GSleep.png";
        // audio.play();
}

function imgreset() {
        img.src = "GSmile.png";
}

function increaseScore() {
        score++;
        count.innerHTML = score;

       
}
