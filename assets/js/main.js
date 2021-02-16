// $(window).on("load", function() {

//         console.log('loaded');
//     })
//     // $(window).load(function() {
//     //     // console.log('sefsdf');
//     // });

$("#book").click(function() {
    // Handler for .load() called.
});
// // $(document).ready(() => {


// //     // console.log($('.tab button').not('[cityName="Paris"]'))
// //     console.log($('.tabcontent').last())
// // })

$(".tab").on("click", function() {
    alert($(this).text());
});


$(".tab").trigger("click");