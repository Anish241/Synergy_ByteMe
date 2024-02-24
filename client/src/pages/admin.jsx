import React from "react";
import { AdminTable } from "../components";

//Expected bank data to be passed to table
const sample = [
    {
        bankName: "ICICI",
        bankRegNum:"123",
        bankWallet:"cwebcwkes"
    },
    {
        bankName: "SBI",
        bankRegNum:"123",
        bankWallet:"cwebcwkes"
    },
]

export default function Admin(){

    return(
        <div className="centerflex coverfullscreen">
            <AdminTable banks={sample}/>
        </div>
    );
    
}