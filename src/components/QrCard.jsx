import React from "react";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import theme from "../styles";
import qrc from "../images/image-qr-code.png";

const QrCard = ({ onFin }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.backWhite",
          borderRadius: "1rem",
          p: "1.25rem",
          width: "18.125rem",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          width="250px"
          borderRadius={onFin === qrc ? "1rem" : 0}
          src={onFin}
          alt="qrCode-result"
        ></Box>
        <Box component="h2" fontSize="1.3rem">
          {onFin === qrc
            ? "Improve your front-end skills by building projects"
            : "This is the resulting QR Code"}
        </Box>
        <Box component="p" sx={{ color: "text.pColor" }}>
          {onFin === qrc
            ? "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
            : "Scan the QR Code to use what you entered!"}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default QrCard;
