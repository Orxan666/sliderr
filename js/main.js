// var , let , const
var mySlider = [
    "photo/3.jpg",
    "photo/two.jpg",
    "photo/three.jpg",
    "photo/four.jpg",
    "photo/2.jpg"
]
var img = document.querySelector("#slider img")
img.src = mySlider[0];
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
var currentSlide = 0;


// next.onclick = ireli
// prev.onclick = geri

// function ireli() {
//     currentSlide++;
//     if (currentSlide >= mySlider.length) {
//         currentSlide = 0
//     }
//     img.src = mySlider[currentSlide]

// }
// function geri() {
// currentSlide--;
// if(currentSlide==-1){
//     currentSlide=mySlider.length-1;
// }
// img.src=mySlider[currentSlide]
// }

next.onclick=nextSlider
function nextSlider(){
    currentSlide=(currentSlide+1+mySlider.length)%mySlider.length;
    img.src=mySlider[currentSlide]
}
prev.onclick=prevSlider
function prevSlider(){
    currentSlide=(currentSlide-1+mySlider.length)%mySlider.length;
    img.src=mySlider[currentSlide]
}

// function topla(a,b){
//     return a+b
// }
// console.log(elton(3,5));
// function vurma(a,b){
// console.log(a*b);
// }
// vurma(3,5)
// function bolme(a=15,b=5){
//     return a/b
// }
// console.log(bolme());






// var text= document.querySelector("#text");
// var text=document.getElementById("text")
// var basliq=document.querySelectorAll(".text")

// for (let i = 0; i < basliq.length; i++) {
//     basliq[i].onclick=function(){
//         this.style.color="red"
//     }

// }

