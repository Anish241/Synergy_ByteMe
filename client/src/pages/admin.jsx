import React,{useState} from "react";
// import { Navbar, Footer } from "../components";
import { AdminTable,Dashboard, AdminTableNavbar } from "../components";
import { useEffect } from "react";
import {getRequestedBanks,getNoofRegisteredBanks,getBankRequestCount,getRegisteredBanks} from "../api/Admin.js"

//Expected bank data to be passed to table




export default function Admin(){

    const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

    const [requestedBanks,setRequestedBanks] = useState([]);
    const [registeredBanks,setRegisteredBanks] = useState([]);

    useEffect(() => {
        const fetchRequestedBanks = async () => {
            const data = await getRequestedBanks();
            console.log(data);
            setRequestedBanks(data);
        }


        const fetchRegisteredBanks = async () => {
            const data = await getRegisteredBanks();
            setRegisteredBanks(data);
        }

        fetchRequestedBanks();
        fetchRegisteredBanks();

    },[]);

    var registereds  = registeredBanks.map((bank) => {
        return {
            bankName: bank[1],
            bankRegNum: bank[2],
            bankWallet: bank[0]
        }
    })

    var pendings = requestedBanks.map((bank) => {
        return {
            bankName: bank[1],
            bankRegNum: bank[2],
            bankWallet: bank[0]
        }
    
    })

    var registered = []
    for (var i = 0; i < registereds.length; i++) {
       if (registereds[i] !== undefined && registereds[i].bankName!=='') {
           registered.push(registereds[i]);
       }
    }

    var pending = []
    for (var i = 0; i < pendings.length; i++) {
        if (pendings[i] !== undefined && pendings[i].bankName!=='') {
            pending.push(pendings[i]);
        }
    }



    const[tableData,setTableData] = useState([]);
    const[isVerified,setIsVerified] = useState(null);

    console.log(isVerified)
    console.log("Pending",pending)

    return(
        <>
            <Dashboard
            totalCustoms={registered[0] === undefined?0:registered.length}
            pendingReq={pending[0] === undefined?0:pending.length}
            />
            <div className="centerflex coverfullscreen backgroundcol-black flex-col">
                <div>
                    <AdminTableNavbar 
                    setIsVerified={setIsVerified}
                    setTableData={setTableData}
                    pending={pending}
                    registered={registered}
                    />

                    <AdminTable banks={tableData} isVerified={isVerified}
                    />
                </div>
            </div>
        </>
        
    );
    
}