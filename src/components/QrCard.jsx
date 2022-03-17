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
          borderRadius: "15px",
          p: "20px",
          width: "290px",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          width="250px"
          borderRadius={onFin === qrc ? "15px" : 0}
          src={onFin}
        ></Box>
        <Box component="h3">
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
