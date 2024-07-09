import './style.css';

let slider = document.getElementById('mySlider');
let slider1 = document.getElementById('mySlider2');
let output = document.getElementById("output");
let output1 = document.getElementById("output1");

slider.addEventListener('input', updateRotation);
slider1.addEventListener('input', updateRotation1);

function updateRotation() {
  output.innerText = slider.value;
  updateHourHandRotation();
}

function updateRotation1() {
  output1.innerText = slider1.value;
  updateMinuteHandRotation();
}

function updateHourHandRotation() {
  const rotationValue = slider.value;
  hourHand.style.transform = `translateX(-50%) rotate(${rotationValue}deg)`;
}

function updateMinuteHandRotation() {
  const rotationValue1 = slider1.value;
  minuteHand.style.transform = `translateX(-50%) rotate(${rotationValue1}deg)`;
}

const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function updateClock() {
  const now = new Date();
  const timeZoneOffset = now.getTimezoneOffset();
  const localTime = new Date(now.getTime() - timeZoneOffset * 60000);

  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();

  const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteRotation = minutes * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;

  console.log("hour degree: " + hourRotation + ", minute degree: " + minuteRotation);
}

// Initial update
updateClock();

// Update every minute
setInterval(updateClock, 60000);
