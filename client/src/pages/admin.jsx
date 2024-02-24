import React,{useState} from "react";
// import { Navbar, Footer } from "../components";
import { AdminTable,Dashboard, AdminTableNavbar } from "../components";

//Expected bank data to be passed to table



export default function Admin(){

    const registered = [
        {
            bankName: "ICICI",
            bankRegNum:"123",
            bankWallet:"cwebcwkes"
        },
        {
            bankName: "SBI",
            bankRegNum:"456",
            bankWallet:"cwebcwkes"
        },
    ]

    const pending = [
        {
            bankName: "RBI",
            bankRegNum:"789",
            bankWallet:"csecvr"
        },
        {
            bankName: "HDFC",
            bankRegNum:"852",
            bankWallet:"nvfnv"
        },
    ]

    const[tableData,setTableData] = useState([]);
    const[isVerified,setIsVerified] = useState(null);

    console.log(isVerified)

    return(
        <>
            <Dashboard/>
            <div className="centerflex coverfullscreen backgroundcol-black flex-col">
                <div>
                    <AdminTableNavbar 
                    setIsVerified={setIsVerified}
                    setTableData={setTableData}
                    pending={pending}
                    registered={registered}/>

                    <AdminTable banks={tableData} isVerified={isVerified}/>
                </div>
            </div>
        </>
        
    );
    
}