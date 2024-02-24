import React from "react";
import { Navbar, Footer } from "../components";
import { AdminTable,Dashboard } from "../components";

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
        <>
            <Dashboard/>
            <div className="centerflex coverfullscreen backgroundcol-black">
                <AdminTable banks={sample}/>
            </div>
        </>
        
    );
    
}