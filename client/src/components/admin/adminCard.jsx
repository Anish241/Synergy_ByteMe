import React from 'react';

const CustomerCard = ({ totalCustomers }) => (
  <div className="max-w-md white-glassmorphism rounded-md overflow-hidden shadow-md">
    <div className="p-6">
      <h6 className="text-lg font-semibold text-white mb-2">Total Customers Registered</h6>
      <h4 className="text-4xl text-primary">{totalCustomers}</h4>
    </div>
  </div>
);

const PendingRequestsCard = ({ pendingRequests }) => (
  <div className="max-w-md white-glassmorphism rounded-md overflow-hidden shadow-md">
    <div className="p-6">
      <h6 className="text-lg font-semibold text-white mb-2">Pending Requests</h6>
      <h4 className="text-4xl text-warning">{pendingRequests}</h4>
    </div>
  </div>
);

const Dashboard = ({ totalCustoms, pendingReq }) => {
  const totalCustomers = totalCustoms; // Replace with actual data
  const pendingRequests = pendingReq; // Replace with actual data

  return (
    <div className="flex gap-8 justify-around">
      <CustomerCard totalCustomers={totalCustomers} />
      <PendingRequestsCard pendingRequests={pendingRequests} />
    </div>
  );
};

export default Dashboard;
