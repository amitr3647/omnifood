let sticky=document.querySelector(".main-nav");
window.addEventListener("scroll",myFunction);
function myFunction(){
if (window.pageYOffset>sticky.offsetTop) {
    sticky.classList.add("sticky-nav");
} else {
    sticky.classList.remove("sticky-nav");
}
}
