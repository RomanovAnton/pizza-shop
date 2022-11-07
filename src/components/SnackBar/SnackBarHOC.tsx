import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export const withSnackbar = (Component: any) => {
  return function (otherProps: any) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (
      event: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    return (
      <div>
        <Component handleClick={handleClick} {...otherProps} />
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          message="Пицца добавлена!"
        />
      </div>
    );
  };
};
