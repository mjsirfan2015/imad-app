//Counter Code
var button=document.getElementById("counter");
var counter=0;
button.onclick =function(){
    //make a request to counter endpoint
    //Capture the Request and store it in avariable
    //Render the variable in the correct span
    
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
}