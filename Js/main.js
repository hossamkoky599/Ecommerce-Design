var header =document.getElementById("header")
window.onscroll=function(){
    if(scrollY >= 300){
        header.classList.add("header2")
    }else{
        header.classList.remove("header2")
    }
}
$('#carousel1').owlCarousel({
    loop:true,
    dots:false,
    arrows:false,
    fade:false,
    autoplay:true,
    autoplaySpeed:1000,
    infinite:true,
    slidesToScroll:1,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$("#drop ,#drop1").click(function(){
    $(".menu_language").css("visibility","visible")
    $(".menu_language").toggle();
})
$('#carousel2').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplaySpeed:2000,
    infinite:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{  
            items:1
        }
    }
})
$('#carousel3').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`], 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(".teas, .teaw , .lose , .bags , .book").hover(function(){
    $("#overlay").animate({opacity:1})
    $("#overlay").css("z-index","2")
},
    function(){
        $("#overlay").animate({opacity:0})
        $("#overlay").css("z-index","-1")
})
$("#user").click(function(){
    $("#user_menu").css("visibility","visible")
    $("#user_menu").css("opacity","1")
    $("#overlay").animate({opacity:1})
    $("#overlay").css("z-index","3")
    $("#user_menu").animate({
        visibility:'toggle',
        opacity:'toggle'
    })
    $("#overlay").animate({
        opacity:'toggle'
    })
}
)
$("#shopping").click(function(){
    $("#user_menu2").css("visibility","visible")
    $("#user_menu2").css("opacity","1")
    $("#overlay").animate({opacity:1})
    $("#overlay").css("z-index","3")
    $("#user_menu2").animate({
        visibility:'toggle',
        opacity:'toggle'
    })
    $("#overlay").animate({
        opacity:'toggle'
    })
}
)
$("#move").click(function(){ 
        if($(".sidebar").css("right") == "40px"){
          $(".sidebar").animate({right:`-150px`},1000)
          $(".minibar").animate({right:`0px`},1000)
        }        
})
$("#slide").click(function(){
    if($(".minibar").css("right") == "0px"){
        $(".minibar").animate({right:`-40px`},1000)
        $(".sidebar").animate({right:`40px`},1000)
    }
})
$('#carousel4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#carousel5').owlCarousel({
    loop:true,
    dots:false,
    margin:25,
    nav:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$("#heart").hover(function(){
    $("#add").css("visibility","visible")
    $("#add").css("opacity","1")
},
    function(){
        $("#add").css("visibility","hidden")
        $("#add").css("opacity","0")
    }
)
$("#eye").hover(function(){
    $("#view").css("visibility","visible")
    $("#view").css("opacity","1")
},
    function(){
        $("#view").css("visibility","hidden")
        $("#view").css("opacity","0")
    }
)
$('#carousel6').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$("#heart2").hover(function(){
    $("#add2").css("visibility","visible")
    $("#add2").css("opacity","1")
},
    function(){
        $("#add2").css("visibility","hidden")
        $("#add2").css("opacity","0")
    }
)
$("#eye2").hover(function(){
    $("#view2").css("visibility","visible")
    $("#view2").css("opacity","1")
},
    function(){
        $("#view2").css("visibility","hidden")
        $("#view2").css("opacity","0")
    }
)
$("#green").click(function(){   
    $(".tea-19").hide()
    $(".tea-30").hide()
    $(".tea-18_view").hide()
    $(".tea-26").show()
})
$("#gray").click(function(){   
    $(".tea-19").hide()
    $(".tea-30").hide()
    $(".tea-26").hide()
    $(".tea-18_view").show()
})
$("#baige").click(function(){   
    $(".tea-26").hide()
    $(".tea-30").hide()
    $(".tea-18_view").hide()
    $(".tea-19").show()
})
$("#heart3").hover(function(){
    $("#add3").css("visibility","visible")
    $("#add3").css("opacity","1")
},
    function(){
        $("#add3").css("visibility","hidden")
        $("#add3").css("opacity","0")
    }
)
$("#eye3").hover(function(){
    $("#view3").css("visibility","visible")
    $("#view3").css("opacity","1")
},
    function(){
        $("#view3").css("visibility","hidden")
        $("#view3").css("opacity","0")
    }
)
$("#green3").click(function(){   
    $(".tea-119").hide()
    $(".tea-5").hide()
    $(".tea-55").hide()
    $(".tea-17_view").show()
})
$("#gray3").click(function(){   
    $(".tea-119").hide()
    $(".tea-17_view").hide()
    $(".tea-5").show()
    $(".tea-55").hide()

})
$("#baige3").click(function(){   
    $(".tea-17_view").hide()
    $(".tea-5").hide()
    $(".tea-55").hide()
    $(".tea-119").show()
})
$("#heart4").hover(function(){
    $("#add4").css("visibility","visible")
    $("#add4").css("opacity","1")
},
    function(){
        $("#add4").css("visibility","hidden")
        $("#add4").css("opacity","0")
    }
)
$("#eye4").hover(function(){
    $("#view4").css("visibility","visible")
    $("#view4").css("opacity","1")
},
    function(){
        $("#view4").css("visibility","hidden")
        $("#view4").css("opacity","0")
    }
)
$("#green4").click(function(){   
    $(".tea-111").hide()
    $(".tea-23").hide()
    $(".tea-23_view").show()
})
$("#gray4").click(function(){   
    $(".tea-111").show()
    $(".tea-23").hide()
    $(".tea-23_view").hide()
})
$("#eye5").hover(function(){
    $("#view5").css("visibility","visible")
    $("#view5").css("opacity","1")
},
    function(){
        $("#view5").css("visibility","hidden")
        $("#view5").css("opacity","0")
    }
)
$("#heart5").hover(function(){
    $("#add5").css("visibility","visible")
    $("#add5").css("opacity","1")
},
    function(){
        $("#add5").css("visibility","hidden")
        $("#add5").css("opacity","0")
    }
)
$("#green5").click(function(){   
    $(".tea-110").hide()
    $(".tea-10").hide()
    $(".tea-99_view").show()
})
$("#gray5").click(function(){   
    $(".tea-110").hide()
    $(".tea-10").show()
    $(".tea-99_view").hide()
})
var video =document.getElementById("video")
var play = document.getElementById("play")
var clos =document.getElementById("close")
video.addEventListener("click",playvideo)
function playvideo (){
    // play.style.visibility="visible"
    $("#play").css("visibility","visible")
}
clos.addEventListener("click",function(){
    // play.style.visibility="hidden"
    $("#play").css("visibility","hidden")
})
$("#play").click(function(){
    $("#play").css("visibility","hidden")
})

 

$('#carousel7').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$("#eye6").hover(function(){
    $("#view6").css("visibility","visible")
    $("#view6").css("opacity","1")
},
    function(){
        $("#view6").css("visibility","hidden")
        $("#view6").css("opacity","0")
    }
)
$("#heart6").hover(function(){
    $("#add6").css("visibility","visible")
    $("#add6").css("opacity","1")
},
    function(){
        $("#add6").css("visibility","hidden")
        $("#add6").css("opacity","0")
    }
)
$("#eye7").hover(function(){
    $("#view7").css("visibility","visible")
    $("#view7").css("opacity","1")
},
    function(){
        $("#view7").css("visibility","hidden")
        $("#view7").css("opacity","0")
    }
)
$("#heart7").hover(function(){
    $("#add7").css("visibility","visible")
    $("#add7").css("opacity","1")
},
    function(){
        $("#add7").css("visibility","hidden")
        $("#add7").css("opacity","0")
    }
)
$("#blue").click(function(){   
    $(".tea-5").hide()
    $(".tea-3").hide()
    $(".tea-6").hide()
    $(".tea-4").hide()
    $(".tea-2").hide()
    $(".tea-1_view").show()
})
$("#green6").click(function(){   
    $(".tea-5").hide()
    $(".tea-3").show()
    $(".tea-6").hide()
    $(".tea-4").hide()
    $(".tea-2").hide()
    $(".tea-1_view").hide()
})
$("#pink").click(function(){   
    $(".tea-5").hide()
    $(".tea-3").hide()
    $(".tea-6").show()
    $(".tea-4").hide()
    $(".tea-2").hide()
    $(".tea-1_view").hide()
})
$("#gray6").click(function(){   
    $(".tea-5").hide()
    $(".tea-3").hide()
    $(".tea-6").hide()
    $(".tea-4").show()
    $(".tea-2").hide()
    $(".tea-1_view").hide()
})
$("#eye8").hover(function(){
    $("#view8").css("visibility","visible")
    $("#view8").css("opacity","1")
},
    function(){
        $("#view8").css("visibility","hidden")
        $("#view8").css("opacity","0")
    }
)
$("#heart8").hover(function(){
    $("#add8").css("visibility","visible")
    $("#add8").css("opacity","1")
},
    function(){
        $("#add8").css("visibility","hidden")
        $("#add8").css("opacity","0")
    }
)
$("#pink2 ,#blue2, #green7, #gray7").click(function(){   
    $(".tea-5").hide()
    $(".tea-3").hide()
    $(".tea-6").hide()
    $(".tea-4").hide()
    $(".tea-2").hide()
    $(".tea-1_view").show()
})
$("#eye9").hover(function(){
    $("#view9").css("visibility","visible")
    $("#view9").css("opacity","1")
},
    function(){
        $("#view9").css("visibility","hidden")
        $("#view9").css("opacity","0")
    }
)
$("#heart9").hover(function(){
    $("#add9").css("visibility","visible")
    $("#add9").css("opacity","1")
},
    function(){
        $("#add9").css("visibility","hidden")
        $("#add9").css("opacity","0")
    }
)
$("#green8").click(function(){   
    $(".tea-19").hide()
    $(".tea-30").hide()
    $(".tea-18_view").hide()
    $(".tea-26").show()
})
$("#gray8").click(function(){   
    $(".tea-19").hide()
    $(".tea-30").hide()
    $(".tea-26").hide()
    $(".tea-18_view").show()
})
$("#baige8").click(function(){   
    $(".tea-26").hide()
    $(".tea-30").hide()
    $(".tea-18_view").hide()
    $(".tea-19").show()
})
$("#eye10").hover(function(){
    $("#view10").css("visibility","visible")
    $("#view10").css("opacity","1")
},
    function(){
        $("#view10").css("visibility","hidden")
        $("#view10").css("opacity","0")
    }
)
$("#heart10").hover(function(){
    $("#add10").css("visibility","visible")
    $("#add10").css("opacity","1")
},
    function(){
        $("#add10").css("visibility","hidden")
        $("#add10").css("opacity","0")
    }
)
$("#green9").click(function(){   
    $(".tea-119").hide()
    $(".tea-5").hide()
    $(".tea-55").hide()
    $(".tea-17_view").show()
})
$("#gray9").click(function(){   
    $(".tea-119").hide()
    $(".tea-17_view").hide()
    $(".tea-5").show()
    $(".tea-55").hide()

})
$("#baige9").click(function(){   
    $(".tea-17_view").hide()
    $(".tea-5").hide()
    $(".tea-55").hide()
    $(".tea-119").show()
})


$('#carousel8').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})