import React from 'react'
import { Navbar,Footer } from '../../components'
import { useState,useEffect } from "react";
import illustration from "../../assets/illustration-intro.png";
import { AiFillPlayCircle } from "react-icons/ai";


const Login_Bank = () => {


    useEffect(() => {
      // connect to metamask wallet give user option to connect
      if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' });
      }
  
    }, []);


    
  return (
    <>
         <div className="min-h-screen">
        <Navbar />
        <main className="p-8 relative gradient-bg-services ">
        <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">

       
      
      </div>
      </div>
      </div>
            
        </main>
        <Footer />
         </div>
    </>
  )
}

export default Login_Bank