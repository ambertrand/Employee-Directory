import React from 'react';
import Container from '../Components/Container';
import Header from '../Components/Header';
import TableData from '../Components/Table';




function Employees() {
    return (
        <div>
            <Header />
            <Container>
                <TableData />
            </Container>
        </div>
    )
}

export default Employees;