import React from 'react';
// import Table from '@material-ui/core/Table';
import { API } from '../../utils/API';

class TableData extends React.Component {
    state = {
        employees: []
    };

    componentDidMount() {
        API.getEmployees()
        // .then(response => {
        //     console.log(response);
        //     // this.setState({ employees: response.data.results });
        // })
    }

    render() {
        return (
            <div>
                <TableData />
            </div>
        );
    }
}

export default TableData;