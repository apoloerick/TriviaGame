var seconds;
var timer;

function start(){
	seconds = 10;
	timer = setInterval(decrement, 1000);
}

function decrement(){
	seconds--;
	if (secons === 0){
		stop();
	}
}

function stop() {
	clearInterval(timer);
}

start();
console.log(seconds);