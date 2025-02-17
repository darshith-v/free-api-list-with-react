import React, { useState } from "react";
import { Typography, Box, Button, Snackbar, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";

const BoxApiInfo = ({ baseEndpoint }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(baseEndpoint)
      .then(() => {
        console.log("Copied to clipboard:", baseEndpoint);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.error("Failed to copy to clipboard:", error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box
      sx={{
        padding: 2,
        margin: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #bbb",
        borderRadius: 4,
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="subtitle1">Base URL:</Typography>
      <Typography variant="body2" sx={{ marginRight: 2 }}>
        {baseEndpoint}
      </Typography>
      <Button
        variant="outlined"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopyClick}
        sx={{ marginLeft: 2}}
      >
        Copy
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="URL copied to clipboard"
        action={action}
      />
    </Box>
  );
};

export default BoxApiInfo;
