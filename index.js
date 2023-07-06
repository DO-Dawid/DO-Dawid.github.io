

// window.onscroll = function() {stickyMenu()};
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++
    if (counter>4){
        counter = 1;
    }
}, 8500)
function change(x){
    x.classList.add('checked')
}
function extendMenu(x,y){
    x.classList.toggle("change");
    y.classList.toggle("change");
}

// window.addEventListener("load", function() {
//     const loader = this.document.querySelector(".loader");
//     loader.className += " hidden2";
// })

// var slider = document.getElementById("slider")
// var navbar = document.getElementById("navbar");

// var sticky = slider.offsetHeight;

// function stickyMenu() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//         navbar.style.width = "100%";
//     }
//     else {
//         navbar.classList.remove("sticky");
//         navbar.style.removeProperty('width')
//     }
// }




