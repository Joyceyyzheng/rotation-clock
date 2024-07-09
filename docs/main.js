//Joyce Zheng

// import './style.css'

let slider = document.getElementById('mySlider');
let slider1 = document.getElementById('mySlider2');
// console.log(slider)

let output = document.getElementById("output")
let output1 = document.getElementById("output1")

slider.addEventListener('input', updateRotation);
slider1.addEventListener('input', updateRotation1);

function updateRotation() {
  output.innerText = slider.value;

}
function updateRotation1() {
  output1.innerText = slider1.value;
}

slider.addEventListener('input', function() {
  const rotationValue = slider.value;
  // console.log(slider.value + "running");
  hourHand.style.transform = `translateX(-50%) rotate(${rotationValue}deg)`;
});

slider1.addEventListener('input', function() {
  const rotationValue1 = slider1.value;
  minuteHand.style.transform = `translateX(-50%) rotate(${rotationValue1}deg)`;
}
);

const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function updateClock() {
  const now = new Date();
  // Adjust for timezone offset
  // const timeZoneOffset = now.getTimezoneOffset();
  //  const localTime = new Date(now.getTime() - timeZoneOffset * 60000); 
   //const localTime = new Date(now.getTime() );
  console.log(now.getTime())
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(hours, minutes);

  // 30 degrees per hour, additional rotation based on minutes
  //const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30; 
  // const minuteRotation = minutes * 6; // 6 degrees per minute

  //new code for display logic 
  const hourRotation = 30 * hours + minutes / 2;
  const minuteRotation = 6 * minutes;


  hourHand.style.transform = ` rotate(${hourRotation}deg)`;
  minuteHand.style.transform = ` rotate(${minuteRotation}deg)`; 

  console.log("hour degree" + hourRotation + ",min degree" + minuteRotation);
}

// Initial update
updateClock();

// Update every minute
setInterval(updateClock, 60000); // 60,000 milliseconds = 1 minute
