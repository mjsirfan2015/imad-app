//Counter Code
var button=document.getElementById("counter");
button.onclick =function(){
    //make a request to counter endpoint
    //Capture the Request and store it in avariable
    //Render the variable in the correct span
    
    counter+=1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
}