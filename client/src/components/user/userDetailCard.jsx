import React from 'react';
import UserCard from './userDetail';

const userDetailCard = () => {
  return (
    <div className="flex justify-center ">
      <UserCard
        userName="John Doe"
        bankName="Sample Bank"
        bankBranch="Main Branch"
        walletAddress="0x1a2b3c4d5e6f7g8h9i0j"
      />
    </div>
  );
};

export default userDetailCard;
