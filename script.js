let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;

function jump(){
    if(character.classList == "animate"){return}
        character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

let checkHit = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 70 && blockLeft > 50 && characterTop >= 130){
        block.style.animation = "none";
        alert("Game Over! Score: " + Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    }
    else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
},10)