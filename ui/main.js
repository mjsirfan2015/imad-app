console.log('Loaded!');
//gets element by their id
var element=document.getElementById("main-text");
element.innerHTML="New Value";
var img=document.getElementById("madi");
img.onclick=function(){
    img.style.leftMargin="100px";
};