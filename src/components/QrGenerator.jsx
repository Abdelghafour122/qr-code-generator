import React, { useState } from "react";
import theme from "../styles";
import { Box } from "@mui/system";
import { ThemeProvider, TextField, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import QrCard from "./QrCard";
import qrc from "../images/image-qr-code.png";

const QrGenerator = () => {
  const [textTogen, setTextTogen] = useState("");
  const [result, setResult] = useState(qrc);
  const generateQr = (data) => {
    const qr = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=250x250`;
    setResult(qr);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box component="div" className="generator">
          <Box
            component="div"
            sx={{
              color: "primary.main",
              bgcolor: "background.backWhite",
              p: "30px",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "400px",
              marginBottom: { xs: "50px", lg: "0" },
            }}
          >
            <Box
              component="h1"
              sx={{
                fontSize: "18px",
                margin: "0 0 20px",
                color: "text.main",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Generate a QR Code from a text or a link
            </Box>
            <TextField
              label="Write something or drop a link"
              role="search"
              required
              variant="filled"
              onChange={(e) => {
                setTextTogen(e.target.value);
              }}
            ></TextField>

            <Button
              endIcon={<ArrowForward />}
              variant="contained"
              disableElevation
              role="button"
              sx={{
                marginTop: "30px",
                width: "fit-content",
              }}
              onClick={() => {
                textTogen.trim()
                  ? generateQr(textTogen)
                  : alert("Please write something");
              }}
            >
              Generate QR Code
            </Button>
          </Box>
        </Box>
        <QrCard onFin={result} />
      </Box>
    </ThemeProvider>
  );
};

export default QrGenerator;
