var sticky=document.querySelector(".navbar");
var navHeight=sticky.offsetHeight;

function myFunction(){
    if(window.scrollY>=654){
        sticky.classList.add("sticky-nav");
    }
    else{
        sticky.classList.remove("sticky-nav");
    }
}
window.addEventListener("scroll",myFunction);