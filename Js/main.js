document.addEventListener('keydown',jump)

function jump(){
    
    const mario = document.querySelector("#mario");

    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump")
    },610);
}

var count = 0;

const loop = setInterval(()=>{

    const pipe = document.querySelector("#pipe");

    var mario = document.querySelector("#mario");

    var clouds =  document.querySelector(".clouds");

    var pipePositon = pipe.offsetLeft;

    var marioPosition = +window.getComputedStyle(document.querySelector("#mario")).bottom.replace('px','');

    if(pipePositon <= 120 && pipePositon > 0 && marioPosition < 80){
        pipe.style.animation  = 'none';

        pipe.style.left = `${pipePositon}px`;
        
        mario.style.animation = 'none';
        
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        
        mario.style.width = '75px';
    
        mario.style.marginLeft = '40px';
        
        clouds.style.left = `${clouds.offsetLeft}px`;

        clouds.style.animation = 'none'

        

        clearInterval(loop);
    }

    else{
        count++;
        document.querySelector("#Count").innerHTML = count;
    }
},10);