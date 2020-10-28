import React from 'react';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Search from '../Components/Search';
import TableData from '../Components/Table';




function Employees() {
    return (
        <div>
            <Header />
            <Container>
                <Search />
                <TableData />
            </Container>
        </div>
    )
}

export default Employees;