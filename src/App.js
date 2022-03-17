import "./App.css";
import QrGenerator from "./components/QrGenerator";
import { Box } from "@mui/material";

function App() {
  return (
    <Box component="main" className="App" sx={{ width: "100%" }}>
      <QrGenerator />
    </Box>
  );
}

export default App;
