const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const lom = getTimeWithOffset(0);
console.log(getTimeWithOffset(2));
console.log(lom);
