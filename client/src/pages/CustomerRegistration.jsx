import React, { useState } from "react";
import { Box,TextField, Button,Paper,styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



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