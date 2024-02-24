import React from "react";
import PropTypes from "prop-types";

const UserCard = ({ userName, bankName, bankBranch, walletAddress }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">User Information</h3>
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
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  bankBranch: PropTypes.string.isRequired,
  walletAddress: PropTypes.string.isRequired,
};

export default UserCard;
