let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);
  return `${hrs.toString().padStart(2, '0')}:${mins
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 1000);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = timeToString(elapsedTime);
  const li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}