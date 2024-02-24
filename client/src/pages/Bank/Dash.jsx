// Dash.js
import React, { useState } from 'react';
import { Navbar, Footer } from '../../components';
import illustration from '../../assets/illustration-intro.png';
import { Fragment } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Switch, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import './glassmorphicStyle.css';

const Dash = () => {
    const [showRequests, setShowRequests] = useState(true);
    const [selectedUserData, setSelectedUserData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleViewClick = (userData) => {
      setSelectedUserData(userData);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleAcceptRequest = () => {
      // Implement your logic for accepting the request
      handleCloseModal();
    };
  
    const handleRejectRequest = () => {
      // Implement your logic for rejecting the request
      handleCloseModal();
    };

  return (
    <Fragment>
      <div className="min-h-screen">
        <Navbar />
        <main className="p-8 relative gradient-bg-services ">
          <section className="flex mb-8 ">
            {/* KYC Requests Card */}
            <div className={`white-glassmorphism p-6 flex-1 mr-4`}>
              <h2 className="text-xl font-bold mb-4 text-white">KYC Requests</h2>
              <p className="text-white mb-2">Number of KYC Requests: 100</p>
              {/* Add more details or data as needed */}
            </div>

            {/* Registered Users Card */}
            <div className={`eth-card p-6 flex-1 ml-4`}>
              <h2 className="text-xl font-bold mb-4 text-white">Registered Users</h2>
              <p className="text-white mb-2">Number of Registered Users: 500</p>
              {/* Add more details or data as needed */}
            </div>
          </section>

          {/* Table Section */}
          <section className={`white-glassmorphism p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Data Table</h2>
              {/* Material-UI Switch */}
              <FormControlLabel
               className='text-white'
                control={
                  <Switch
                    checked={showRequests}
                    onChange={() => setShowRequests(!showRequests)}
                  />
                }
                label={showRequests ? 'View KYC Requests' : 'View Registered Users'}
                labelPlacement="start"
              />
            </div>

            {/* Table */}
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-500">
                  <th className="py-2 px-4 border text-white">User ID</th>
                  <th className="py-2 px-4 border text-white">Name</th>
                  <th className="py-2 px-4 border text-white">Actions</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {/* Add table data based on showRequests state */}
                {showRequests ? (
                  <tr>
                    <td className="py-2 px-4 border text-white">1</td>
                    <td className="py-2 px-4 border text-white">John Doe</td>
                    <td className="py-2 px-4 border text-white">
                      <Button variant="contained" color="primary" onClick={()=>handleViewClick({id:1,name:"John Doe"})} >
                        View
                      </Button>
                    </td>
                    {/* Add more table data as needed */}
                  </tr>
                ) : (
                  <tr>
                    <td className="py-2 px-4 border text-white ">101</td>
                    <td className="py-2 px-4 border text-white ">Jane Smith</td>
                    <td className="py-2 px-4 border text-white ">
                      <Button variant="contained" color="primary" onClick={() => handleViewClick({ id: 101, name: 'Jane Smith' })}>
                        View
                      </Button>
                    </td>
                    {/* Add more table data as needed */}
                  </tr>
                )}
              </tbody>
            </table>
          </section>

          <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="md" fullWidth>
          <DialogTitle className="modal-title">User Data</DialogTitle>
          <DialogContent className="modal-content">
            {selectedUserData && (
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="modal-label">User ID:</TableCell>
                      <TableCell>{selectedUserData.id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="modal-label">Name:</TableCell>
                      <TableCell>{selectedUserData.name}</TableCell>
                    </TableRow>
                    {/* Add more user data fields as needed */}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </DialogContent>
          <DialogActions className="modal-actions">
            {showRequests && (
              <div>
                <Button onClick={handleRejectRequest} color="secondary">
                  Reject
                </Button>
                <Button onClick={handleAcceptRequest} color="primary">
                  Accept
                </Button>
              </div>
            )}
            <Button onClick={handleCloseModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Dash;
