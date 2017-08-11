//Counter Code
var button=document.getElementById("counter");
var counter=0;
button.onclick =function(){
    //make a request to counter endpoint
    var request= new XMLHttpRequest();
    
    //Create a Request object
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE)
        {
            //Take some Action
            if(request.status==200)
            {
                counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
        //Not done
    }
    //Make a Request
    request.open("GET","http://mohammedirfan2012india.imad.hasura-app.io/",true);
    request.send(null);
}