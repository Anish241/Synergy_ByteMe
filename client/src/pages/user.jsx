import React, { useState } from "react";
import { UserTable,UserModal } from "../components";

import { Button} from "@mui/material";

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

    


    //Modal open and close state handling
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
        <div className="backgroundcol-black coverfullscreen centerflex flex-col">
            <div id="usercards">

            </div>
            <div id="usertable" className="centerflex flex-col">
                <Button variant="text" onClick={handleOpen}>Add transaction</Button>
                
                    <UserModal
                    open={open}
                    handleClose={handleClose}
                    />

                <UserTable transactions={sampleTransactions}/>
            </div>
        </div>
  );
}
