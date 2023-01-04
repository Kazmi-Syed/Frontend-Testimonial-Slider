var index = 0;
var x = document.getElementsByClassName("dlex");

function updateslide(a){
    index = index + a;
    if (index >= x.length) {
        index = 0;
    }

    else if(index < 0 ){
        index = x.length - 1 ;
    }
    else{
    }

    for (var i=0 ; i<x.length ; i++){
        x[i].style.display = "none";
    }

    x[index].style.display = "initial";
    x[index].style.display = "flex";
    
}


// $(document).ready(function(){
//     var index = -1 ; 
//     var x = document.getElementsByClassName("upper");
//     alert(x.length);
    
//     $("#lefty").click(function(){
//         console.log("Previous clicked");
//         alert(x.length);
//     })
//     $("#righty").click(function(){
//         console.log("Nect is clicked");
//         x[index].style.display = "none" ; 
//         x[index + 1 ].style.display = "initial" ;
//     })

//     $(".chips").click(function(){
//         $("nav").css("background","red");
//         $("#logo").css("display","none");
//         $("ul li a").css("color","black");
//         $(".chips").css("display","none");
//         console.log("Menu is clicked");
//     })
//     $("#closee").click(function(){
//         $("nav").css("background","initial");
//         $("nav").css("background","black");
//         $("#logo").css("display","initial");
//         $("ul li a").css("color","white");
//         $(".chips").css("display","initial");})
        
// }
// )
