// html setup for slider
//
// <div class="row">
//     <div class="card-group slideShowContainer">
//         <div class="card" id="div1">
//             <img src="img/card-img - Copy (0).png" alt="" class="cardImgClass card-img-top">
//         </div>
//         <div class="card" id="div2">
//             <img src="img/card-img - Copy (1).png" alt="" class="cardImgClass card-img-top">
//         </div>
//         <div class="card" id="div3">
//             <img src="img/card-img - Copy (2).png" alt="" class="cardImgClass card-img-top">
//         </div>
//         <div class="card" id="div4">
//             <img src="img/card-img - Copy (3).png" alt="" class="cardImgClass card-img-top">
//         </div>
//         <div class="card" id="div5">
//             <img src="img/card-img - Copy (4).png" alt="" class="cardImgClass card-img-top">
//         </div>
//     </div>
// </div>
//
//
// just add new divs with img children and it would work (i think so ;) )


var dimensions = 200;
var paddingRight = 3;

$(document).ready(function() {

        var childCount = $('.slideShowContainer').children().length;

        $('.slideShowContainer').parent().css({
            'overflow': 'hidden'
        });

        $('.slideShowContainer').css({
            'display': 'block',
            'width': (childCount + 2) * dimensions + 'px',
            'height': dimensions + 'px'
        });

        $('.slideShowContainer > div').css({'display':'inline-block'});

        $('.slideShowContainer div >img ').css({
            'padding-right': paddingRight + 'px',
            'width': dimensions + 'px',
            'height': dimensions + 'px'
        });



function moveCards() {
    $('.slideShowContainer div:first-child').animate({
        'margin-left':'-'+dimensions+'px'
    },3000,function () {
        $('.slideShowContainer div:first-child').appendTo($('.slideShowContainer')).css({'margin-left':'0px'});

    });
    setTimeout(function () {
        moveCards()
    }, 3100);//increase this delay if slides start to come over each other
}

moveCards();

});
