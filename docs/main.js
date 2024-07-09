//Joyce Zheng

let slider = document.getElementById("mySlider")
let slider1 = document.getElementById("mySlider2")

let output = document.getElementById("output")
let output1 = document.getElementById("output1")

slider.addEventListener("input", updateRotation)
slider1.addEventListener("input", updateRotation1)

function updateRotation() {
  output.innerText = slider.value
}
function updateRotation1() {
  output1.innerText = slider1.value
}

slider.addEventListener("input", function () {
  const rotationValue = slider.value
  hourHand.style.transform = `translateX(-50%) rotate(${rotationValue}deg)`
})

slider1.addEventListener("input", function () {
  const rotationValue1 = slider1.value
  minuteHand.style.transform = `translateX(-50%) rotate(${rotationValue1}deg)`
})

const minuteHand = document.getElementById("minute-hand")
const hourHand = document.getElementById("hour-hand")

function updateClock() {
  const now = new Date()

  console.log(now.getTime())
  const hours = now.getHours()
  const minutes = now.getMinutes()
  console.log(hours, minutes)

  const hourRotation = 30 * hours + minutes / 2
  const minuteRotation = 6 * minutes

  hourHand.style.transform = ` rotate(${hourRotation}deg)`
  minuteHand.style.transform = ` rotate(${minuteRotation}deg)`

  console.log("hour degree" + hourRotation + ",min degree" + minuteRotation)
}

updateClock()

setInterval(updateClock, 60000)
