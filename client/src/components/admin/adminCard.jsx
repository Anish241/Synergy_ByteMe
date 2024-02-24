import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CustomerCard = ({ totalCustomers }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" component="div">
        Total Customers Registered
      </Typography>
      <Typography variant="h4" color="primary">
        {totalCustomers}
      </Typography>
    </CardContent>
  </Card>
);

const PendingRequestsCard = ({ pendingRequests }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" component="div">
        Pending Requests
      </Typography>
      <Typography variant="h4" color="warning">
        {pendingRequests}
      </Typography>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const totalCustomers = 1000; // Replace with actual data
  const pendingRequests = 20; // Replace with actual data

  return (
    <div className='backgroundcol-black'>
      <Box display="flex" gap={2} justifyContent={"space-around"} >
        <CustomerCard totalCustomers={totalCustomers} />
        <PendingRequestsCard pendingRequests={pendingRequests} />
      </Box>
    </div>
  );
};

export default Dashboard;