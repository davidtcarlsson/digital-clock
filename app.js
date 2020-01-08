const showTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  const format = `${hour}:${min}:${sec}`;
  const clock = document.querySelector(".clock");

  clock.innerHTML = format;

  setTimeout(showTime, 1000);
};

showTime();
