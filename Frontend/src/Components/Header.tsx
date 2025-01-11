import { Avatar, Box, Input, OutlinedInput, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import {
  ArrowForward,
  KeyboardDoubleArrowLeft,
  ArrowBack,
  Notifications,
  Search,
} from "@mui/icons-material";

import { getTodaysDate } from "../Lib/day";
import dayjs from "dayjs";

const Header = () => {
  return (
    <Box className="border-b-2">
      <header className="px-16 py-3 flex gap-4 justify-between items-center">
        <Box className="flex items-center gap-2">
          <Typography variant="h6" component={"h1"}>
            Logo
          </Typography>
          <KeyboardDoubleArrowLeft />
        </Box>
        <Box className="flex">
          <Box className="flex items-center gap-2">
            <Box>
              <Button>
                <ArrowBack />
              </Button>
              <Button>
                <ArrowForward />
              </Button>
            </Box>
            <Box className="flex items-center gap-4">
              <Typography variant="h4" component={"h1"}>
                {dayjs(getTodaysDate()).format("MMM YYYY")}
              </Typography>
              <Input
                type="date"
                onChange={(e) => console.log(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box className="relative basis-1/4">
          <OutlinedInput
            sx={{ borderRadius: "20px", width: "100%" }}
            type="search"
          />
          <Search className="absolute right-0 top-1/3" />
        </Box>
        <Box className="flex items-center gap-10">
          <Avatar />
          <Notifications />
        </Box>
      </header>
    </Box>
  );
};

export default Header;
