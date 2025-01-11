import { getHourlyIntervals, getWeekDays } from "../Lib/day";
import { Box } from "@mui/material";
import dayjs from "dayjs";
const CalendarWeek = ({ date }: { date: string }) => {
  const week = getWeekDays(date);
  const selectedDay = dayjs(date).format("ddd D");
  const selectedMonth = dayjs(date).format("MMMM");
  console.log(week);

  return (
    <>
      {week.map((day, index) => {
        return (
          <>
            <Box
              key={index}
              data-column={index}
              className="w-full h-full flex flex-col flex-1 justify-between"
            >
              <div className="flex flex-col border-l border-r">
                {day.format("MMMM") == selectedMonth ? (
                  <div className="flex h-20 border-b items-center justify-center">
                    {selectedDay == day.format("ddd D") ? (
                      <p className="rounded-full bg-blue-400 p-2">
                        {day.format("ddd D")}
                      </p>
                    ) : (
                      <p>{day.format("ddd D")}</p>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col h-20 border-b items-center justify-center">
                    <p>{day.format("MMM")}</p>
                    {selectedDay == day.format("ddd D") ? (
                      <p className="rounded-full bg-blue-400 p-2">
                        {day.format("ddd D")}
                      </p>
                    ) : (
                      <p>{day.format("ddd D")}</p>
                    )}
                  </div>
                )}

                {getHourlyIntervals(1, 23).map((time, index) => {
                  return (
                    <div
                      data-time={time}
                      data-row={index}
                      className="bg-cyan-50 h-20 border-b"
                    ></div>
                  );
                })}
              </div>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default CalendarWeek;
