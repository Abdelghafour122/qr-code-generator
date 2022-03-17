import "./App.css";
import QrGenerator from "./components/QrGenerator";
import { Box } from "@mui/material";

function App() {
  return (
    <Box component="main" className="App" sx={{ width: "100%" }}>
      <QrGenerator />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Abdelghafour122</a>.
      </div>
    </Box>
  );
}

export default App;
