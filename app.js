function menuOpen () {                                                         
    let hamburger = document.querySelector('#hamburger');                                               
    let menu = document.querySelector('#nav__elements');                                                         
    let body = document.querySelector('#body');                                                         
    hamburger.onclick = function () {                                                         
        hamburger.classList.toggle('hamburger_active');                                                         
        menu.classList.toggle('nav__elements_active');                                                         
        body.classList.toggle('scroll_none');                                                         
    }
    let navElementLinks = document.querySelectorAll('#nav__elements');
    navElementLinks.forEach(function (navElementLink) {
        navElementLink.onclick = function () {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('nav__elements_active');
            body.classList.remove('scroll_none');
        }
    })
}                                                       
                                                          
menuOpen ();                                                         
                                                         

function hamburgerShow () {
    let screen = window.pageYOffset;
    hamburger.style.top = "30px";
    window.onscroll = function () { // функция которая начинает работать в момент scroll-а
        let screenScroll = window.pageYOffset; // переменная в которую попадает высота на которой ты находишься
        if (screen > screenScroll) {   // если scroolим в верх
            hamburger.style.top = "30px"; // hamburger появляеться
        } else {     //если скролим вниз
            hamburger.style.top = "-130px"; // hamberger прячеться
        }
        screen = screenScroll;   // обновляет scroll. в переменную "scroll" попадает высота на которой мы находимся.
    }
}

hamburgerShow ();


new Swiper ('.swiper-container',{                                                         
    effect:'coverflow',                                                         
    autoplay:{                                                         
        delay:2000,                                                         
        stopOnLastSlide:false,                                                         
        disableOnInteraction:false,                                                          
    },                                                         
    speed:1500,                                                         
    loop:true,                                                         
    navigation:{                                                         
        nextEl:'.swiper-button-next',                                                         
        prevEl:'.swiper-button-prev',                                                         
    },                                                         
    pagination:{                                                         
        el:'.swiper-pagination',                                                         
        type:'bullets',                                                         
        dynamicBullets:true,                                                         
        clickable:true,                                                         
    }                                                         
})                                                         