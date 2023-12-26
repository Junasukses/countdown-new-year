const currentyear = new Date().getFullYear();
const currentdate = new Date().getDate();

const audio = document.getElementById("audio");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countDown = document.getElementById("countdown");
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
document.getElementById("year").innerHTML = `Countdown to New Year ${
	currentYear + 1
}`;
document.getElementById("currentyear").innerHTML = currentYear + 1;

function play() {
	audio.play();
	audio.loop = true;
}

function updateCountDown() {
	const currentTime = new Date();
	diff = newYearTime - currentTime;
	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;
	days.innerHTML = d + "D";
	hours.innerHTML = h < 10 ? h + "H" : h + "H";
	minutes.innerHTML = m < 10 ? m + "M" : m + "M";
	seconds.innerHTML = s < 10 ? s + "S" : s + "S";
}
setInterval(updateCountDown, 1000);
