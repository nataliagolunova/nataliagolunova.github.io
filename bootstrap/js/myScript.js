//"use strict"

$(document).ready(function(){        
    
     //анимация. блоки начинают появляться, когда до них доходит скролл
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });
    
    let observer_rigth = new IntersectionObserver(onEntry_rigth, options);
    let elements_rigth = $('.element-animation_rigth');
    elements_rigth.each((i,el) => {
        observer_rigth.observe(el);
    });
    
    let observer_left = new IntersectionObserver(onEntry_left, options);
    let elements_left = $('.element-animation_left');
    elements_left.each((i,el) => {
        observer_left.observe(el);
    });
    
    
    //скролл, добавляется action для пункта меню
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $('.nav_section').each((i, el) => {
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            };
        });
    });
    
    
    //анимация для цифр
    $('.count_statistic').each(function () {
       $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
         duration: 4000,
         easing: 'linear',
         step: function (now) {
            $(this).text(Math.ceil(now));
         }
        });
    });    
    
    
    
});

//модальное окно для стоимости и сообщения
$('.submit_messange').click(function() {
    if(($('.mess_name').val() == '') || ($('.mess_email').val() == '')){
        $('.modal-body').find("p").text('Пожалуйста, заполните данные для отправки сообщения!');
    }
    else if($('.mess_mess').val() == ''){
        $('.modal-body').find("p").text('Пожалуйста, введите текст сообщения!');
    }
    else {
        console.log($('.mess_name').val());
        console.log($('.mess_mess').val());
        console.log($('.mess_email').val());
        $('.modal-body').find("p").text('Ваше сообщение отправлено! ');
    };
});

//модальное окно для кейсов
$('.carousel-item, .active').click(function() {
    let case_img = $(this).find('.img_modal').attr('src');
    let case_p = $(this).find('.project_cases_conteiner').find('p').text();
    let case_name = $(this).find('.project_cases_conteiner').find('h4').text();
    
    $('.modal-body').find("img").attr('src', case_img);
    $('.modal-body').find("p").text(case_p);
    $('.modal-title').text(case_name);    
});

//калькулятор
$('.form-select').change(function() {
    let typewebsite = $( ".selectwebsite" ).val();
    let typedesign = $( ".selectdesign" ).val();
    let typeadapt = $( ".selectadapt" ).val();
    message(typewebsite,typedesign,typeadapt); 
});


$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
    
});

$('button[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

function onEntry (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
};

function onEntry_rigth (entry)  {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation_rigth');
        }
    });
};


function onEntry_left (entry)  {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation_left');
        }
    });
};


let MassTypeWebsite = [
    ["","визитка","корпоративный сайт","лендинг","интернет-магазин"],
    [0,3000,10000,5000,50000],
    [0,10,30,15,60],
];


let MassTypeDesign = [
    ["","текстовый","полиграфический","интерфейсный","динамический смешанный", "смешанный"],
    [0,3000,1000,1000,5000,6000],
    [0,3,2,2,5,5],
];

let MassTypeAdapt = [
    ["","резиновый","перенос блоков","переключение макетов"],
    [0,2000,1000,5000],
    [0,2,1,3],
];

function summcost(website,design,adapt) { 
    return MassTypeWebsite[1][website] + MassTypeDesign[1][design] + MassTypeAdapt[1][adapt];
};

function summterm(website,design,adapt) {
    return MassTypeWebsite[2][website] + MassTypeDesign[2][design] + MassTypeAdapt[2][adapt];
};

function message(website,design,adapt) {
        $(".summterm").text(summterm(website,design,adapt));
        $(".summcost").text(summcost(website,design,adapt));
    
}

