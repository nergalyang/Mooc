  window.onload = function(){

    var todel = document.getElementsByTagName('a');
    for (var i=0;i<todel.length;i++){
        // todel[i].onclick = function(){
        //     del(this);
        // };
        todel[i].onclick = function(e){
            del(e.target);
        };
    };
    var willadd = document.getElementById("add");
    willadd.onclick = function(){
        add();
    };
              
    var table = document.getElementById("table");
    table.onmouseover = function(e){
        var tr = e.target;
        while(true){
            if (tr.nodeName=="TR" || tr.nodeName =="TABLE"){
                break;
            }else{
                tr = tr.parentNode;
            }
        }
        if (tr.nodeName =="TR"){
            tr.style.background = "#f2f2f2";
        }
    };
    table.onmouseout = function(e){
        var tr = e.target;
        while(true){
            if (tr.nodeName=="TR" || tr.nodeName =="TABLE"){
            	break;
            }else{
                tr = tr.parentNode;
            }
        }
        if (tr.nodeName =="TR"){
            tr.style.background = "#fff";
        }
    };
     
 
 };
function del(obj){
    var x = obj.parentNode.parentNode;
    x.parentNode.removeChild(x);
}
var count = 3;
function add(){
    var toadd = document.getElementById("table");
    var x = document.createElement("tr");
    var x1 = document.createElement("td");
    x1.innerHTML = "xh00"+String(count);
    var x2 = document.createElement("td");
    x2.innerHTML = "Andy";
    var x3 = document.createElement("td");
    x3.innerHTML = '<a href="#">Delete</a>';
    x.appendChild(x1);
    x.appendChild(x2);
    x.appendChild(x3);
    toadd.appendChild(x);
    count ++;
};















 