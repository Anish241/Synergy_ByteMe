import React from 'react';

import {Paper,TableRow,TableHead, TableContainer, TableCell, TableBody, Table, Box } from '@mui/material';


export default function UserTable(props) {
    const tableStyle = { 
        color:"white" ,
        minWidth: "50rem",
        background:"rgba(255, 255, 255, 255)",
        borderRadius:"16px",
        backdropFilter:"blur(5px)",
        WebkitBackdropFilter:"blur(5px)", 
        // border:"1px solid rgba(255, 255, 255, 0.3)",
              
            
    }

    return (
        <TableContainer component={Paper} className='centerflex'>
        <Table sx={tableStyle} className='white-glassmorphism' aria-label="simple table"  elevation={4}>
            <TableHead>
            <TableRow>
                <TableCell>To</TableCell>
                <TableCell align="right">From</TableCell>
                <TableCell align="right">Amount</TableCell>
            </TableRow>
            </TableHead>

            <TableBody>
            {props.transactions.map((transaction) => (
                <TableRow
                key={transaction.id}
                >
                <TableCell>
                    {transaction.to}
                </TableCell>
                <TableCell align="right">{transaction.from}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}