let degree = 90
let rotate = function() {
    $("#t").css({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
        '-moz-transform': 'rotate(' + degree + 'deg)',
        'transform': 'rotate(' + degree + 'deg)'
    })
    degree += 90
}

$('#animate').click(function() {
    for (let i = 0; i < 1; i++) {
        $("#t").animate({ marginLeft: '+=450' }, 1000, rotate)
            .animate({ marginTop: '+=200' }, 1000, rotate)
            .animate({ marginLeft: '0' }, 1000, rotate)
            .animate({ marginTop: '0' }, 1000, rotate)
    }

})


$("#fadeIn").click(function() {
    $("#home").fadeIn(3000);
})
$("#fadeOut").click(function() {
    $("#home").fadeOut(2000);
})

$("#slideToggle").click(function() {
    $("#navbar").slideToggle(2000);
})

$("a").mouseover(function() {
    $(this).animate({ backgroundColor: '#00b894', width: "200px", height: "+=10px" }, 300)
});
$("a").mouseout(function() {
    $(this).animate({ backgroundColor: "#949494", width: "100px", height: "-=10px" }, 300)
});
$("a").click(function() {
    $(this).animate({ backgroundColor: "#d63031" }, 500)
});
$("i").mouseover(function() {
    $(this).animate({ color: '#d63031' }, 300)
});
$("i").mouseout(function() {
    $(this).animate({ color: "#2d3436" }, 300)
});


$("button").mouseover(function() {
    $(this).animate({
        backgroundColor: '##eb4d4b',

    }, 600)
});
$("button").mouseout(function() {
    $(this).animate({ backgroundColor: '#6ab04c' }, 600)
});