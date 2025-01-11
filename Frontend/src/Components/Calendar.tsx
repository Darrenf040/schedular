import { Box, Container } from "@mui/material";
import { getHourlyIntervals } from "../Lib/day";
import CalendarWeek from "./CalendarWeek";

const Calendar = () => {
  return (
    <Container maxWidth="xl" className="flex overflow-y-scroll h-[90vh]">
      <Box className="flex flex-col w-20">
        <Box className="flex flex-col justify-between">
          <div className="h-20"></div>
          {getHourlyIntervals(1, 23).map((hour) => {
            return (
              <Box className="h-20 w-20 relative">
                <p className="absolute -top-[10px]">{hour}</p>
                <div className="w-2 h-[2px] absolute top-0 right-0 bg-black"></div>
              </Box>
            );
          })}
        </Box>
      </Box>
      <CalendarWeek date={"2025-01-29"} />
    </Container>
  );
};

export default Calendar;
