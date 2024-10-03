const time = 244830;

function calculateTime(time) {
  let seconds = time % 60;
  let totalMinutes = (time - seconds) / 60;
  let minutes = totalMinutes % 60;
  let hours = (totalMinutes - minutes) / 60;

  console.log(
    `the time is ${hours} hours ${minutes} minutes ${seconds} seconds`,
  );
  console.log(`${hours}h ${minutes}m ${seconds}s`);
  console.log(`${hours}:${minutes}:${seconds}`);
}

calculateTime(time);
