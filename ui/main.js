//Counter Code
var button=document.getElementById("counter");

button.onclick =function(){
    //make a request to counter endpoint
    var request= new XMLHttpRequest();
    
    //Create a Request object
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //Take some Action
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
        //Not done
    };
    //Make a Request
    request.open("GET","http://mohammedirfan2012india.imad.hasura-app.io/counter",true);
    request.send(null);
};
   
    var submit=document.getElementById("submit_btn");
    var namelist=document.getElementById("namelist");
    submit.onclick= function(){
   //make a request to counter endpoint
    var request= new XMLHttpRequest();
    
    //Create a Request object
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //Take some Action
            if(request.status===200)
            {
                var names=JSON.parse(request.responseText);
                list=' '
                for(var i=0;i<names.length;i++)
                {       
                 list+='<li>'+names[i]+'</li>';
                 namelist.innerHTML=list;
        
            }
            }
        }
    }
        //Not done
     var nameinput=document.getElementById("name");
     var name=nameinput.value;
    request.open("GET","http://mohammedirfan2012india.imad.hasura-app.io/submit-name?name="+name,true);
    request.send(null);
    } ;
