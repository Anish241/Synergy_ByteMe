import React from 'react';

import {Paper,TableRow,TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material';


export default function UserTable(props) {

    return (
        <TableContainer component={Paper} className='centerflex'>
        <Table sx={{ minWidth: "20rem" }} aria-label="simple table"  elevation={4}>
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