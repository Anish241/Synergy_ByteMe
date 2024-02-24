import React, { useState } from "react";
import { Box,TextField, Button,Paper,Stack, Typography } from "@mui/material";

export default function CustomerRegistration(){

    const[formJson,setFormJson] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormJson(
            {
                name:e.target[0].value,
                email:e.target[2].value,
                password:e.target[4].value,
                file:e.target[6].files,
                aadhar:e.target[7].value,
                pan:e.target[9].value,
                age:e.target[11].value,
                gender:e.target[13].value,
                pincode:e.target[15].value,
                city:e.target[17].value,
                state:e.target[19].value,
                creditScore:e.target[21].value,
            }
        )
        // console.log(formJson)
    }

    const style = {
        minWidth:"40rem",
        minHeight:"40rem",
    }
    console.log(formJson)
    return(
        <div className="coverfullscreen centerflex backgroundcol-black">
            <form onSubmit={handleSubmit} method="post">
                <Box sx={style} className="centerflex flex-col" component={Paper} >
                    <Typography variant={"h3"} sx={{margin:"1rem"}}>Customer sign-Up</Typography>
                    <Stack direction={"row"} className="child-margin">
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
                    </Stack>
                    

                    <input type="file" />
                    
                    <Stack direction={"row"} className="child-margin">
                        <TextField
                        required
                        label="Aadhar number"
                        />

                        <TextField
                        required
                        label="Pan card number"
                        />
                    </Stack>
                        
                    <Stack direction={"row"} className="child-margin">
                        <TextField
                        required
                        type="number"
                        label="Age"
                        />

                        <TextField
                        required
                        label="Gender"
                        />
                    </Stack>
                    
                    <Stack direction={"row"} className="child-margin">    
                        <TextField
                        required
                        type="number"
                        label="Pincode"
                        />

                        <TextField
                        required
                        label="City"
                        />

                        <TextField
                        required
                        label="State"
                        />
                    </Stack>

                    <TextField
                    required
                    type="number"
                    label="Credit score"
                    />
                    <Button type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    )
};