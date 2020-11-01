import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function EmployeeTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="Employee Table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        props.employees.map(emp => {
                            return <TableRow hover key={emp.id}>
                                <TableCell align="center"><img alt={`${emp.firstName} ${emp.lastName}`} src={emp.image} /></TableCell>
                                <TableCell align="center">{emp.firstName}</TableCell>
                                <TableCell align="center">{emp.lastName}</TableCell>
                                <TableCell align="center">{emp.phone}</TableCell>
                                <TableCell align="center">{emp.email}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeeTable;