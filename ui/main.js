console.log('Loaded!');
//change the tect of main-text div.
var elemnt=document.getElementById("main-text");
element.innerHTML="New Value";
//move the image
var img = document.getElementById("madi");
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function() {
    var interval=setInterval(moveRight,100);
    
}