import React from 'react';

import { Box,Paper,TableRow,TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material';


export default function AdminTable(props) {

    return (
        <TableContainer component={Box} className='centerflex'>
        <Table sx={{ maxWidth: "50rem" }} aria-label="simple table" component={Paper} elevation={4}>
            <TableHead>
            <TableRow>
                <TableCell>Bank Rg Num</TableCell>
                <TableCell align="right">Bank Name</TableCell>
                <TableCell align="right">Wallet</TableCell>
            </TableRow>
            </TableHead>

            <TableBody>
            {props.banks.map((bank) => (
                <TableRow
                key={bank.bankRegNum}
                >
                <TableCell component="th" scope="row">
                    {bank.bankRegNum}
                </TableCell>
                <TableCell align="right">{bank.bankName}</TableCell>
                <TableCell align="right">{bank.bankWallet}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}