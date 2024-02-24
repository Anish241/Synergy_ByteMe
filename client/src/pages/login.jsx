import React, { useState } from "react";

import {Box, Card, CardContent, CardActions, TextField, Typography, Button} from '@mui/material';

export default function Login(){

    const boxStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          minWidth: "20vw",
          height: "40vh",
        },
    }

    const[pass,setPass] = useState("default");

    const handleChange = (event) => setPass(event.target.value);

    console.log(pass)

    //NOTE TO ANISH : typing the paassword automatically changes it in "pass" variable defined above
    //Clicking the button will reload the page, hence reset the password

    return(
        <div className="centerflex coverfullscreen backgroundcol-black">
            <Box sx={boxStyle}>
                <Card elevation={5} className="centerflex flex-col">
                    <CardContent>
                        <Typography variant="h3" className="centerflex">
                        Login
                        </Typography>
                    </CardContent>

                    <CardContent className="centerflex">
                        <TextField
                        required
                        label={"Admin password"} onChange={handleChange}/>
                    </CardContent>   

                    <CardActions>
                        <Button size="small" href="/login">Submit</Button>
                    </CardActions> 
                </Card>
            </Box>
        </div>
    )
}