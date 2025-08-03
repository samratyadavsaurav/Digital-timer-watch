let clock = document.getElementById("clock");

const currentTime = () => {
  let curTime = new Date().toLocaleTimeString();
  clock.innerText = curTime;
};
currentTime();

const intervalID = setInterval(() => {
  currentTime();
}, 1000);

setTimeout(() => clearInterval(intervalID), 5000);
