import "./App.css";
import QrGenerator from "./components/QrGenerator";
import { Box } from "@mui/material";

function App() {
  return (
    <Box component="div" className="App" sx={{}}>
      <QrGenerator />
    </Box>
  );
}

export default App;
