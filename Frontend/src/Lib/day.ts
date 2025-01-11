import dayjs, { Dayjs } from "dayjs";

const getHourlyIntervals = (startHour: number, endHour: number) => {
  const intervals: string[] = [];
  for (; startHour <= endHour; startHour++) {
    const time = dayjs().hour(startHour).minute(0).second(0); // Set hour, minute, and second
    intervals.push(time.format("h:mm A")); // Format the time as "1 AM", "2 AM", etc.
  }
  return intervals;
};

const getTodaysDate = (currentDay: Dayjs = dayjs()) => {
  const date = currentDay.format("YYYY-MM-DD");
  return date;
};

const getWeekDays = (
  currentDay: string = getTodaysDate(),
  day: Dayjs = dayjs(currentDay).day(0)
) => {
  const weekDays: Dayjs[] = [];
  for (let i: number = 0; i < 7; i++) {
    day = dayjs(currentDay).day(i);
    weekDays.push(day);
  }
  return weekDays;
};
export { getHourlyIntervals, getTodaysDate, getWeekDays };
