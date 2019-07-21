var todos=[];

var j=0;
function additem()
{  
    var todo=document.getElementById("task").value;
    var div1=document.getElementById("list");
  var nodetoadd=document.createElement("li");
  j++;
  nodetoadd.setAttribute("class","todoitems");
  todos.push({todovalue: todo,
complete:false
});
for(var task of todos)
{
    console.log(task);
}

 
 var t=document.createElement("todo");
 t.innerText=todo;
 t.setAttribute("id","todotext");
 nodetoadd.appendChild(t);
 var delbutton=document.createElement("button");
 delbutton.innerHTML="Delete";
 delbutton.setAttribute("class","delbutton");
 t.appendChild(delbutton);
  
 //delbutton.setAttribute("onclick","delete todos");
 delbutton.setAttribute("onclick","del(event)");
 div1.appendChild(nodetoadd);
 document.getElementById("task").value="";
 var checkbutton=document.createElement("button");
  checkbutton.setAttribute("class","checkbutton");
  checkbutton.innerHtml="Done";
 t.appendChild(checkbutton);
  checkbutton.setAttribute("onclick",'complete(event)');
 /*if(checkbutton.hasAttribute("onclick","this.parentElement.style.textDecoration='line-through'"))
 {
    todos.complete=true;
 }*/

}
function complete(e)
{
 e.target.parentElement.style.textDecoration='line-through';
td=e.target.parentElement.childNodes[0].nodeValue;
    for(var i = 0; i < todos.length; i++){
        if(todos[i].todovalue === td){
            todos[i].complete=true;
        }
    }
}
function del(e)
{
     e.target.parentElement.remove(e.target);
     td=e.target.parentElement.childNodes[0].nodeValue;
    for(var i = 0; i < todos.length; i++){
        if(todos[i].todovalue === td){
            todos.splice(i, 1)
        }
    }
    // todos.splice(e.target.parentElement,1);
     }

  
     
     

   
