import React, { useState,useEffect } from "react";
import { Box, TextField, Button, Paper, Stack, Typography, Select, MenuItem } from "@mui/material";
import { getBanks,createCustomer } from "../api/Customer.js";
import postToInfura from "../api/postToInfura.js";

export default function CustomerRegistration(){

    const[formJson,setFormJson] = useState({});
    const [banks, setBanks] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchBanks = async () => {
            const banks = await getBanks();
            setBanks(banks);
        };
        fetchBanks();
    }, []);

    const handleImageChange = (e) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setSelectedImage(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);
    console.log("Image Selected");
    console.log(e.target.files);
    };

    const handleSubmit = async (e) => {
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
                bank: e.target[23].value,
            }
        )
        postToInfura(selectedImage).then((imageUri) => {
            console.log(imageUri);
            const data = `${formJson.aadhar},${formJson.pan},${formJson.age},${formJson.gender},${formJson.pincode},${formJson.city},${formJson.state},${formJson.creditScore},${imageUri}`;
            createCustomer(
                formJson.name,
                formJson.email,
                formJson.password,
                data,
                formJson.bank,
                "0"
            ).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });









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
                    

                    <input type="file"
                     onChange={handleImageChange}
                    />
                    
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
                    label="Credit score"
                    />
                    <Select
            required
            label="Bank"
            value={formJson.bank || ""}
            onChange={(e) => setFormJson({ ...formJson, bank: e.target.value })}
          >
            {banks.map((bank) => (
              <MenuItem key={bank[0]} value={bank[0]}>
                {bank.bankName}
              </MenuItem>
            ))}
            </Select>
                    <Button type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    )
};