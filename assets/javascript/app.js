
	// right & wrong answers
	var rightans = 0;
	var wrongans = 0;
	// timer
 	var flagclock = 0;
    var flagstop = 1;
    var stoptime = 0;
    var currenttime;
    var splitdate = '';
    var output;
    var clock;
    // questions
    var q1=false;
    var q2=false;
    var q3=false;
    var q4=false;
    var q5=false;
    var q6=false;
    var q7=false;
    var q8=false;
    var q9=false;
    var q11=false;



    // function startstop()
    //     {
    //     var startstop = document.getElementById('startstoptimer');
    //     var startdate = new Date();
    //     var starttime = startdate.getTime();
    //     if(flagclock==0)
    //         {
    //         startstop.value = 'Stop';
    //         flagclock = 1;
    //         counter(starttime);
    //         }
    //     else
    //         {
    //         startstop.value = 'Start';
    //         flagclock = 0;
    //         flagstop = 1;
    //         splitdate = '';
    //         }
    //     }

    // function counter(starttime)
    //     {
    //     output = document.getElementById('output');
    //     clock = document.getElementById('clock');
    //     currenttime = new Date();
    //     var timediff = currenttime.getTime() - starttime;
    //     if(flagstop == 1)
    //         {
    //         timediff = timediff + stoptime
    //         }
    //     if(flagclock == 1)
    //         {
    //         clock.value = formattime(timediff,'');
    //         refresh = setTimeout('counter(' + starttime + ');',10);
    //         }
    //     else
    //         {
    //         window.clearTimeout(refresh);
    //         stoptime = timediff;
    //         }
    //     }

    // function formattime(rawtime,roundtype)
    //     {
    //     if(roundtype == 'round'){

    //         var ds = Math.round(rawtime/100) + '';
    //         }
    //     else
    //         {
    //         var ds = Math.floor(rawtime/100) + '';      
    //         }
    //     var sec = Math.floor(rawtime/1000);
    //     var min = Math.floor(rawtime/60000);
    //     ds = ds.charAt(ds.length - 1);
    //     if(min >= 60)
    //         {
    //         startstop();
    //         }
    //     sec = sec - 60 * min + '';
    //     if(sec.charAt(sec.length - 2) != '')
    //         {
    //         sec = sec.charAt(sec.length - 2) + sec.charAt(sec.length - 1);
    //         }
    //     else
    //         {
    //         sec = 0 + sec.charAt(sec.length - 1);
    //         }   
    //     min = min + '';
    //     if(min.charAt(min.length - 2) != '')
    //         {
    //         min = min.charAt(min.length - 2)+min.charAt(min.length - 1);
    //         }
    //     else
    //         {
    //         min = 0 + min.charAt(min.length - 1);
    //         }
    //     return min + ':' + sec;
    //     }
    //     function reset(starttime) {


    //     }
        // click function
        $(".mybutton").on('click',function(){

        	console.log($(this).attr("data-answer"));

        	if ($(this).attr("data-answer") == "right1"){
        		rightans++;
     			$(".botones1").css("display", "none");
     			q1=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong1") {
        		wrongans++;
        		$(".botones1").css("display", "none");
        		q1=true;
        	}
        	
        	if ($(this).attr("data-answer") == "right2"){
        		rightans++;
     			$(".botones2").css("display", "none");
     			q2=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong2") {
        		wrongans++;
        		$(".botones2").css("display", "none");
        		q2=true;
        	}

        		if ($(this).attr("data-answer") == "right3"){
        		rightans++;
     			$(".botones3").css("display", "none");
     			q3=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong3") {
        		wrongans++;
        		$(".botones3").css("display", "none");
        		q3=true;
        	}
        		if ($(this).attr("data-answer") == "right4"){
        		rightans++;
     			$(".botones4").css("display", "none");
     			q4=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong4") {
        		wrongans++;
        		$(".botones4").css("display", "none");
        		q4=true;
        	}
        		if ($(this).attr("data-answer") == "right5"){
        		rightans++;
     			$(".botones5").css("display", "none");
     			q5=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong5") {
        		wrongans++;
        		$(".botones5").css("display", "none");
        		q5=true;
        	}
        		if ($(this).attr("data-answer") == "right6"){
        		rightans++;
     			$(".botones6").css("display", "none");
     			q6=true
        	}

        	else if ($(this).attr("data-answer") == "wrong6") {
        		wrongans++;
        		$(".botones6").css("display", "none");
        		q6=true;
        	}
        		if ($(this).attr("data-answer") == "right7"){
        		rightans++;
     			$(".botones7").css("display", "none");
     			q7=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong7") {
        		wrongans++;
        		$(".botones7").css("display", "none");
        		q7=true;
        	}
        		if ($(this).attr("data-answer") == "right8"){
        		rightans++;
     			$(".botones8").css("display", "none");
     			q8=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong8") {
        		wrongans++;
        		$(".botones8").css("display", "none");
        		q8=true;
        	}
        		if ($(this).attr("data-answer") == "right9"){
        		rightans++;
     			$(".botones9").css("display", "none");
     			q9=true;
        	}

        	else if ($(this).attr("data-answer") == "wrong9") {
        		wrongans++;
        		$(".botones9").css("display", "none");
        		q9=true;
        	}
        		if ($(this).attr("data-answer") == "right11"){
        		rightans++;
     			$(".botones11").css("display", "none");
     			q11=true;
     			
        	}

        	else if ($(this).attr("data-answer") == "wrong11") {
        		wrongans++;
        		$(".botones11").css("display", "none");
        		q11=true;

        	}
        	check();

        })

        function check(){
        	if (q1==true & q2==true & q3==true & q4==true & q5==true & q6==true & q7==true
        		& q8==true & q9==true & q11==true) {
        	$(".text-center").css("display", "none");
        	$(".right").append(rightans);
        	$(".wrong").append(wrongans);
        	$(".lol").css("display", 'block');
        	}

        	
        }
		var seconds = 5;
		var timer; //DECLARE GLOBAL VARIABLE

		function startstop(){

			timer = setInterval(decrement, 1000); //ASSIGN THE STATEMENT TO A VARIABLE.
			$(".text-center").css('display', 'block');
		}

		function decrement(){
			seconds--;
			if (seconds === 0){
				stop();
			}
			$("#clock").html(seconds);
			console.log(seconds);
		}

		function stop() {
			clearInterval(timer);
			$(".text-center").css("display", "none");
        	$(".right").append(rightans);
        	$(".wrong").append(wrongans);
        	$(".lol").css("display", 'block');
        	alert("TIMES UP!!!!");
        	
		}
		

	