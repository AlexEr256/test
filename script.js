var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var main=document.getElementById("main");
var MyList=document.getElementById("list");
var ul=document.getElementsByTagName("ul");
var story=MyList.getElementsByClassName("item");
var popup=document.getElementsByClassName("popup")[0];
var close= document.querySelector(".close");

function addItem(){
    var newLi=document.createElement("li");
    newLi.innerHTML="Новая задача";
    newLi.className="item";
    MyList.appendChild(newLi);
    popup.style.display='none';
}
function delItem(){
    MyList.removeChild(story[0]);
    if(story.length==0)
    {
        popup.style.display="block";
    }
}
function closePopup(){
popup.style.display="none";
}

btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', closePopup);

