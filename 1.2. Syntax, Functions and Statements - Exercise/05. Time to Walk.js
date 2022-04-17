function timeToWalk(arg1, arg2, arg3) {

  let numberSteps = Number(arg1);
  let lengthFoot = Number(arg2);
  let speed = Number(arg3);

  let distanceInMeters = numberSteps * lengthFoot;
  let speedMetersSec = speed / 3.60;
  let time = distanceInMeters / speedMetersSec;
  let rest = Math.floor(distanceInMeters / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - (timeMin * 60));
  let timeHr = Math.floor(time / 3600);

  console.log(
    (timeHr < 10 ? "0" : "") + timeHr + ":"
    + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":"
    + (timeSec < 10 ? "0" : "") + timeSec);
}
