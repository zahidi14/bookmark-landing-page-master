function selector(evt, selectTab){
   var i, x, tablinks;
   x= document.getElementsByClassName("select");
   for (i=0; i<x.length;i++){
       x[i].style.display="none";
   }
   tablinks = document.getElementsByClassName("tablink");
   for(i=0;i<x.length;i++){
       tablinks[i].className = tablinks[i].className.replace(" ","");
   }
   document.getElementById(selectTab).style.display = "block";
   evt.currentTarget.firstElementChild.className +=" ";
}