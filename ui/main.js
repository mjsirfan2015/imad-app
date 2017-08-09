console.log('Loaded!');
//gets element by their id
var element=document.getElementById("main-text");
element.innerHTML="New Value";
var img=document.getElementById("madi");
var marginLeft=100
function movRight()
{
    marginLeft+=1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    movinterval= setInterval(movRight,100);
};