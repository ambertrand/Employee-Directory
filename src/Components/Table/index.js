import React from 'react';
// import Table from '@material-ui/core/Table';
import { API } from '../../utils/API';

class TableData extends React.Component {
    state = {
        employees: []
    };

    // get employee data
    componentDidMount() {
        API.getEmployees()
        .then(response => {
            console.log(response);
        //     // this.setState({ employees: response.data.results });
        })
    }

    // render table component with current state
    render() {
        return (
            <div>
                <p>TableData component</p>
            </div>
        );
    }
}

export default TableData;