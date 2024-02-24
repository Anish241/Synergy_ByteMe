import React, { useState } from "react";
import { UserTable, UserModal, UserCard } from "../components";
import { Navbar, Footer } from "../components";
import { Button } from "@mui/material";
import DetailCard from "../components/user/UserDetailCard";

export default function User() {
  const sampleTransactions = [
    {
      id: 1,
      to: "Anish",
      from: "Bodhi",
      amount: 5000,
    },
    {
      id: 2,
      to: "Shubham",
      from: "Anish",
      amount: 2500,
    },
    {
      id: 3,
      to: "Bodhi",
      from: "Shubham",
      amount: 100,
    },
  ];

  // Modal open and close state handling
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <div className=" centerflex flex-col gradient-bg-transactions">
        <h1 className="text-4xl text-white pt-4 font-bold">User Dashboard</h1>
        <div
          id="usercards"
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <div>
            <UserCard />
          </div>
          <div>
            <DetailCard />
          </div>
        </div>
        <div id="usertable" className=" pt-24 ">
          <Button variant="text" onClick={handleOpen}>
            Add transaction
          </Button>
          </div>
          <UserModal open={open} handleClose={handleClose} />
          <div>
          <UserTable transactions={sampleTransactions} />
        </div>
      </div>
      <Footer />
    </>
  );
}

