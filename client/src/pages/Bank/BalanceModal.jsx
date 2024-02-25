import React from "react";
import { Box, Modal,Button, TextField } from "@mui/material";

export default function BalanceModal(props){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display:"flex",
        justifyContent:"center"
    };

    return(
        <Modal 
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="centerflex flex-col"
        >
            <Box sx={style}>
                <TextField
                required
                label="Balance"
                />
                <Button>Submit</Button>
            </Box>
        </Modal>
    )

}