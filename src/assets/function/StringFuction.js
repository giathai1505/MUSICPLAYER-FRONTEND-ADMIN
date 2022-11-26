export const ConvertSecondToMinute = (number) => {
  let minute = Math.floor(number / 60);
  let second = Math.floor(number) % 60;

  return minute + ":" + ("0" + second).slice(-2);
};
