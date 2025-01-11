import { Box } from "@mui/material";
import Calendar from "./Components/Calendar";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Box className="flex flex-col h-screen justify-between">
        <Header />
        <div className="flex flex-col flex-1">
          <Box className="flex flex-1">
            <Sidebar />
            <Calendar />
          </Box>
        </div>
      </Box>
    </>
  );
}

export default App;
