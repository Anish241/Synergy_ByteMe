import React, { useState } from "react";
import { UserTable } from "../components";

import { Button,Modal, Box, TextField} from "@mui/material";

function CustomTextField(props){
    

    return(
        <TextField
        required
        id="outlined-required"
        label={props.label}
        sx={{margin:"1rem"}}
        onChange={(event) => props.setter(event.target.value)}
        />
    );

}


export default function User(){


    const sampleTransactions = [
        {
            id:1,
            to:"Anish",
            from:"Bodhi",
            amount:5000
        },
        {
            id:2,
            to:"Shubham",
            from:"Anish",
            amount:2500
        },
        {
            id:3,
            to:"Bodhi",
            from:"Shubham",
            amount:100
        },
    ]

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


    //Modal open and close state handling
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //On clicking the submit button, thsi function will log the data as an array of the form [to, from, amt]
    const submitTransaction = (event) =>{
        console.log(event.target.value);
        window.location.reload();
    }

    //Handling state change in modal input fields as form control is not possible as of now in modals
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [amt, setAmt] = useState(0);

    return(
        <div className="backgroundcol-black coverfullscreen centerflex flex-col">
            <div id="usercards">

            </div>
            <div id="usertable" className="centerflex flex-col">
                <Button variant="text" onClick={handleOpen}>Add transaction</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="centerflex flex-col"
                    >
                        <Box sx={style}>
        
                            <CustomTextField label={"To"} setter={setTo}/>
                            <CustomTextField label={"From"} setter={setFrom}/>
                            <CustomTextField label={"Amount"} setter={setAmt}/>

                            <Button onClick={submitTransaction} value={[to, from, amt]}>Confirm</Button>
                        </Box>
                    </Modal>
                <UserTable transactions={sampleTransactions}/>
            </div>
        </div>
  );
}
