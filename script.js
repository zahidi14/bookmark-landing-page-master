

function selector(evt, selectTab){
   var i, x, tablinks;
   x= document.getElementsByClassName("select");
   for (i=0; i<x.length;i++){
       x[i].style.display="none";
   }
   tablinks = document.getElementsByClassName("tablink");
   for(i=0;i<x.length;i++){
       tablinks[i].className = tablinks[i].className.replace(" active","");
       console.log("cok");
   }
   if(window.matchMedia("(max-width: 800px)")){
    document.getElementById(selectTab).style.display = "block";
    console.log("flex");
   }else{
    document.getElementById(selectTab).style.display = "flex";
    console.log("block");
   }
   
   evt.currentTarget.className +=" active";
}

function collap(){
  var coll = document.getElementsByClassName("colapse-quest");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.log(this);
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
