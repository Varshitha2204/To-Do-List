const ib=document.getElementById("inputbox");
const lc=document.getElementById("listcontainer");
function addTask(){
    if(ib.value==''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ib.value;
        lc.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ib.value="";
    saveData();
}

lc.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",lc.innerHTML);
}
function displayTasks(){
    lc.innerHTML=localStorage.getItem("data");
}
displayTasks();