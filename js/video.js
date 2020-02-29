var video;


function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	vol = document.querySelector("#volume");
	vol.innerHTML = video.volume *100+"%";

	console.log(video.volume);
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	Video.playbackRate *=1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if(video.currentTime > video.duration) {
		console.log("Video ended")
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Video playing")
	}
	else {
		video.currentTime +=60;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	let mute = document.querySelector("#mute");
  	if (video.muted){
		  video.muted = false;
		  console.log("change to unmuted");
		  mute.innerHTML = "Mute";
	  }

	else{
		video.muted = true;
	
  		console.log("change to muted");
		mute,innerHTML = "Unmute"
		}
}

function changeVolume() {
	slider = document.querySelector("#volumeSlider");
	vol = document.querySelector("#volume")
	video.volume = slider.value/100.0;
	vol.innerHTML = slider.value *100+"%";

	console.log("Volume is " + slider.value);
}
       

function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}
