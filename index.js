var button = document.querySelectorAll("button");


for(var i=0;i< button.length ;i++) {
    button[i].addEventListener("click",z);
    function z(){
        alert("i got clicked");
    }
};

var i=0
while (i< button.length){
     button[i].addEventListener("click",z);
    function z(){
        alert("i got clicked");
    }

    i++
};