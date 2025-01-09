import { Box, Typography } from "@mui/material";
import { AccessTime, Event, Dashboard, AddBox } from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-10 w-[15%] h-full h-screen border-r-2 pl-16 py-8">
      <Box className="flex gap-3">
        <AccessTime />
        <Typography variant="body1">Schedule</Typography>
      </Box>
      <Box className="flex gap-3">
        <AddBox />
        <Typography variant="body1">Create Appointment</Typography>
      </Box>
      <Box className="flex gap-3">
        <Event />
        <Typography variant="body1">View Appointments</Typography>
      </Box>
      <Box className="flex gap-3">
        <Dashboard />
        <Typography variant="body1">Dashboard</Typography>
      </Box>
    </aside>
  );
};

export default Sidebar;
