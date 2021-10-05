import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const CustomSnackBar = (props) => {
    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <Snackbar
          autoHideDuration={props.duration}
          open={props.isOpened}
          onClose={handleClose}
          message={props.message}
          anchorOrigin={{
            vertical: props.yPosition,
            horizontal: props.xPosition,
          }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
            {props.children}
        </Snackbar>   
    )
};

export default CustomSnackBar;
