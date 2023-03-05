score=0;
cross=true;

// const audio=new Audio('music.mp3');
// const gameover=new Audio('gameover.mp3');
// setTimeout(()=>{
// audio.play();
// },1000);


window.addEventListener('keydown' , checkkey) ;
function checkkey(e){
if (e.key=='ArrowUp'){
       dino=document.querySelector('.dino');
       dino.classList.add('animateDino');
       setTimeout(function(){
      dino.classList.remove("animateDino");
       },700);
    }else if(e.key=='ArrowRight'){
     dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
     dino.style.left=dinoX+130+"px";
    }else if(e.key=='ArrowLeft'){
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
     dino.style.left=(dinoX-130)+"px";
    }
}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    if(offsetX<113&&offsetY<52){
        gameOver.innerHTML= "Game Over - Reload to start over"
        obstacle.classList.remove('obstacleAni');
        // gameover.play();
        // setTimeout(()=>{
        //    gameover.pause();
        //    audio.pause();
        // },1000);
    }
    else if(offsetX<145&&cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.1;
            obstacle.style.animationDuration= newDur+'s';
            console.log('New animation duration : ' , newDur);
        },500)
    }

}, 10);

function updateScore(score){
    scoreCont.innerHTML= "Your Score : " + score;
}