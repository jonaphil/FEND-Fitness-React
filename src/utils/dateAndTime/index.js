export default function isYesterday(today, otherDay = 0) {
  const todayObj = new Date(today);
  const otherDayObj = new Date(otherDay);
  const day = { today: todayObj.getDate(), otherDay: otherDayObj.getDate() };
  const month = {
    today: todayObj.getMonth(),
    otherDay: otherDayObj.getMonth(),
  };
  const year = { today: todayObj.getYear(), otherDay: otherDayObj.getYear() };

  if (
    year.today === year.otherDay &&
    month.today === month.otherDay &&
    day.today === day.otherDay + 1
  ) {
    return true;
  }
  if (
    year.today === year.otherDay &&
    month.today === month.otherDay + 1 &&
    day.today === 1
  ) {
    return true;
  }
  if (
    year.today === year.otherDay + 1 &&
    month.today === 1 &&
    day.today === 1
  ) {
    return true;
  }
  return false;
}
