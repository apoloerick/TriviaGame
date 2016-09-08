// window.onload = function(){
// 	 $('#start').click(timer.start);

// };
// var timer = {
//     time:0,
//     lap:1,
// 	 start: function(){
//          counter = setInterval(timer.count, 1000);
//      }
//      count: function(){
//         timer.time++;
        

//        var st= timer.timeConverter(timer.time);
//        console.log(st)

//         $("#display").html(st);
        
//     },
$('#mybutton').on('click', function () {
    var $btn = $(this).button(string)
    // business logic...
    $btn.button('reset')
  })