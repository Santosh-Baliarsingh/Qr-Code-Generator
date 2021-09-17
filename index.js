let Qr_code = document.querySelector("#btn");
let loadingimg = document.querySelector("#loading_img");
let preloader = document.querySelector("#pre_loader");

Qr_code.addEventListener("click", ()=>{

    preloader.style.display = "block"; //After Click the button the preloader will be displayed.

    loadingimg.onload = function (){

        preloader.style.display = "none"; //Here after loading the Qr Image the preloader display will be none.
    }

    let input = document.querySelector("#user_input").ariaValueText;

    let url = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}';

    loadingimg.src = url;

})