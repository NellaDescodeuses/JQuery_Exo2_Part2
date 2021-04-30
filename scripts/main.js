// $(document).ready(function() {
//     //Au clic sur le bouton,
//     $('#image').dblclick(function () { 
//         $('#image').css({'width':'500px'});
//     })
// })
//ou avec une animation
$(document).ready(function() {
    //Au doubleclic,
    $('#image').dblclick(function () { 
        $(this).animate({
            width:'500px'});
    })
})