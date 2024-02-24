import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function AdminTable(props) {

    return (
        <TableContainer component={Paper} className='centerflex'>
        <Table sx={{ maxWidth: "50rem" }} aria-label="simple table">
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