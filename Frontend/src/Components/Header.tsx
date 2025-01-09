import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box className="px-20">
      <Box className="flex">
        <Typography variant="h6" component={"h1"}>
          Logo
        </Typography>
        <span>+ </span>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Header;
