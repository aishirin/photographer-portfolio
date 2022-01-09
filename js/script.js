const img=document.getElementById("img-block__item");
const bigImg=document.getElementById("img-block__click");
const wrapper=document.getElementById("wrapper")
function openBigImg(){
    bigImg.style.display="block";
    wrapper.style.filter="brightness(40%)"
}
img.addEventListener("click",openBigImg);
const form=document.getElementById("form");
const contactMe=document.getElementById("profile-info__btn");
function openContactMe(){
    form.style.display="block"
}
contactMe.addEventListener("click",openContactMe)
