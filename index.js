function move(){
    var randomWidth= Math.random()*250 ;
    var randomHeight= Math.random()*250 ;
    console.log(randomHeight);
    const hell=document.querySelector(".no");
    hell.style.top= randomHeight +'px';
    hell.style.left= randomWidth + 'px';
    


    
}