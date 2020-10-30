import React from 'react';
// import Table from '@material-ui/core/Table';
import { APIURL } from '../../utils/API';

class TableData extends React.Component {
    state = {
        employees: [],
        
    };

    componentDidMount() {
        APIURL.getDummyEmployees()
        .then(response => {
            console.log(response);
            this.setState({ employees: response.data.results });
        })
    }

    render() {
        return (
            <div>
                <TableData employees={this.state.employees} />
            </div>
        );
    }
}

export default TableData;