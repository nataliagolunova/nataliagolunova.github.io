//"use strict"

$(document).ready(function(){
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each(i,el) => {
        observer.observe(el);
    });
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el)) => {
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistane) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });
    
    
});

$('a[$href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
})

function onEntry (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
}

//alert('Расчет стоимости. Введите название или выберите порядковую цифру.');
//let typewebsite = prompt('1.визитка, 2.корпоративный сайт, 3.лендинг, 4.интернет-магазин?');
//let typedesign = prompt('1.текстовый, 2.полиграфический, 3.интерфейсный, 4.динамический 5.смешанный?');
//let typeadapt = prompt('1.резиновый, 2.перенос блоков, 3.переключение макетов?');


let MassTypeWebsite = [
    ["визитка","корпоративный сайт","лендинг","интернет-магазин"],
    [3000,10000,5000,50000],
    [10,30,15,60],
];


let MassTypeDesign = [
    ["текстовый","полиграфический","интерфейсный","динамический смешанный", "смешанный"],
    [3000,1000,1000,5000,6000],
    [3,2,2,5,5],
];

let MassTypeAdapt = [
    ["резиновый","перенос блоков","переключение макетов"],
    [2000,1000,5000],
    [2,1,3],
];


function findnumber(value, mass) {
    for (let i = 0; i < mass[0].length; i++) {
        if ((i == (value - 1)) || (mass[0][i] == value.toLowerCase()))
            return i;
    }
}


function findcost (value, mass){
    return mass[1][value];
}


function findterm (value, mass){
    return mass[2][value];
}

function summ(website,design,adapt) {
    return website + design + adapt;
};

function summcost() {
    return summ(findcost(findnumber(typewebsite, MassTypeWebsite),MassTypeWebsite),
                findcost(findnumber(typedesign, MassTypeDesign),MassTypeDesign),
                findcost(findnumber(typeadapt, MassTypeAdapt),MassTypeAdapt));
};

function summterm() {
    return summ(findterm(findnumber(typewebsite, MassTypeWebsite),MassTypeWebsite),
                findterm(findnumber(typedesign, MassTypeDesign),MassTypeDesign),
                findterm(findnumber(typeadapt, MassTypeAdapt),MassTypeAdapt));
};

function message() {
    if ((isNaN(summcost())) || (isNaN(summterm()))) {
        alert("Ваш сайт требует личной консультации с разработчиком.");
    }
    else {
        alert("Стоимость вашего сайта: " + summcost() + " рублей. Примерное время выполнения: " + summterm() + " дней(дня).");
    }
}

//message(); 
