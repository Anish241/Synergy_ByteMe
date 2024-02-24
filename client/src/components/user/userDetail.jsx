import React from "react";
import PropTypes from "prop-types";

const UserCard = ({ userName, bankName, bankBranch, walletAddress, image }) => {
  return (
    <div className=" rounded-md p-6 shadow-md white-glassmorphism">
      {image && <img src={image} alt="User" className="rounded-full mx-auto mb-4 w-32 h-32" />}
      <div className="text-white">
        <div className="mb-2">
          <strong className="mr-2">User Name:</strong> {userName}
        </div>
        <div className="mb-2">
          <strong className="mr-2">Bank Name:</strong> {bankName}
        </div>
        <div className="mb-2">
          <strong className="mr-2">Bank Branch:</strong> {bankBranch}
        </div>
        <div>
          <strong className="mr-2">Wallet Address:</strong> {walletAddress}
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  bankBranch: PropTypes.string.isRequired,
  walletAddress: PropTypes.string.isRequired,
  image: PropTypes.string, // Image URL or path
};

export default UserCard;
