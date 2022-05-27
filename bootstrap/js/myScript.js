//"use strict"

$(document).ready(function(){        
    new WOW().init();
    
     //анимация. блоки начинают появляться, когда до них доходит скролл
//    let options = {threshold: [0.5]};
//    let observer = new IntersectionObserver(onEntry, options);
//    let elements = $('.element-animation');
//    elements.each((i,el) => {
//        observer.observe(el);
//    });
    
    //обавляет цвет навбару при скролле
    var topNav = $('nav');
    if (topNav.length) {
        $(window).scroll(() => {
          if ($(this).scrollTop()) {			
           	topNav.css('background', '#4f3e34');			
          } else {
            topNav.css('background', '');			
          }
        });
      };
        
   //маска 
    $("#inputTel").mask("+7(999) 999-9999");
    //при нажатии на кнопку, передача данных
    
    $('form').submit( function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST", 
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert('Успешно отправлено!');
            $('form').trigger("reset");
        });
        return false;    
    });
    
    
    $(".mess_nav").click(() => {
        alert('Lorem');
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
    

    //анимация для цифр по скроллу
    var target_block = $(".count_statistic"); // Ищем блок 
    var blockStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if(scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $('.count_statistic').each(function () {
               $(this).prop('Counter',0).animate({
                Counter: $(this).text()
                }, {
                 duration: 5000,
                 easing: 'linear',
                 step: function (now) {
                    $(this).text(Math.ceil(now));
                 }
                });
            });
        }
    });

});



//модальное окно для стоимости и сообщения
$('.submit_messange').click(function() {
    if(($('.mess_name').val() == '') || ($('.mess_email').val() == '')){
        alert('Пожалуйста, заполните данные для отправки сообщения!');          
//        $('#exampleModal3').find('.modal-body').find("p").text('Пожалуйста, заполните данные для отправки сообщения!');
    }
    else if($('.mess_mess').val() == ''){
        alert('Пожалуйста, введите текст сообщения!'); 
//        $('#exampleModal3').find('.modal-body').find("p").text('Пожалуйста, введите текст сообщения!');
    }
//    else {
//        $('#exampleModal3').find(".ui-dialog-titlebar-close").click();;    
//        $('form').submit();
//        
//        console.log($('.mess_name').val());
//        console.log($('.mess_mess').val());
//        console.log($('.mess_email').val());
//        $('.modal-body').find("p").text('Ваше сообщение отправлено! ');
//    };
});

//модальное окно для кейсов
$('.carousel-item, .active').click(function() {
    let case_img = $(this).find('.img_modal').attr('src');
    let case_p = $(this).find('.project_cases_conteiner').find('p').text();
    let case_name = $(this).find('.project_cases_conteiner').find('h4').text();
    
    $('#exampleModal1').find('.modal-body').find("img").attr('src', case_img);
    $('#exampleModal1').find('.modal-body').find("p").text(case_p);
    $('#exampleModal1').find('.modal-title').text(case_name);    
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

//function onEntry (entry) {
//    entry.forEach(change => {
//        if (change.isIntersecting) {
//            change.target.classList.add('show-animation');
//        }
//    });
//};


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
    
};

