import React, { useState } from "react";
import { Box,TextField, Button,Paper,styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function InputFileUpload() {

    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });

    return (
    <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        defaultValue={"file"}
        startIcon={<CloudUploadIcon />}
    >
        Upload file
        <VisuallyHiddenInput type="file" />
    </Button>
    );
}


export default function CustomerRegistration(){

    const[formJson,setFormJson] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[6].files)
        setFormJson(
            {
                name:e.target[0].values
            }
        )
    }

    const style = {
        minWidth:"40rem",
        minHeight:"40rem",
    }

    return(
        <div className="coverfullscreen centerflex backgroundcol-black">
            <form onSubmit={handleSubmit} method="post">
                <Box sx={style} className="centerflex flex-col" component={Paper}>
                    <TextField
                    required
                    label="Full name"
                    />

                    <TextField
                    required
                    type="email"
                    label="Email"
                    />

                    <TextField
                    required
                    type="Password"
                    label="Password"
                    />

                    <input type="file" />

                    <Button type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    )
};