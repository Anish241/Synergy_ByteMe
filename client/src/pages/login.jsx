import React from "react";

import {Box,Card,CardContent,TextField, Typography,Stack} from '@mui/material';

export default function Login(){

    const boxStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "20vw",
          height: "40vh",
        },
    }

    return(
        <div className="centerflex coverfullscreen backgroundcol-black">
            <Box sx={boxStyle}>
                <Card elevation={5} className="centerflex flex-col">
                    <CardContent>
                        <Typography variant="h3" className="centerflex">
                        Admin
                        </Typography>
                    </CardContent>

                    <CardContent className="centerflex">
                        <TextField
                        required
                        label={"Admin password"}/>
                    </CardContent>    
                </Card>
            </Box>
        </div>
    )
}