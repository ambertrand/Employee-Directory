import React from 'react';
import Header from '../Header';
import { API } from '../../utils/API';
import EmployeeTable from '../TableContainer';
import { Grid } from '@material-ui/core';
import SearchForm from '../Search';
import { util } from "../../utils/Utility";
// import Grid from '@material-ui/core/Grid';

class Directory extends React.Component {
    state = {
        employees: [],
        renderedEmployees: [],
        search: "",
        orderBy: "",
        order: "asc"
    }

    // get employee data
    componentDidMount() {
        API.getEmployees()
            .then((response) => {
                console.log(response);
                
                let employeeData = response.data.results.map(emp => {
                    return {
                        id: emp.id.value,
                        image: emp.picture.medium,
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        phone: emp.cell,
                        email: emp.email,
                    }
                })
                console.log(employeeData);
                this.setState({
                    employees: employeeData,
                    renderedEmployees: employeeData
                })
            })
            .catch(err => console.log(err));
    }

    // Function to allow user to search the employee directory
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        // Set the state to that of input
        this.setState({
            [name]: value
        }, () => {
            if (this.state.search) {
                let searchedEmps = util.searchEmployees(this.state.search, this.state.renderedEmployees);
                this.setState({
                    employees: searchedEmps,
                    orderBy: ""
                })
            } else {
                this.setState({
                    employees: this.state.renderedEmployees,
                    orderBy: ""
                })
            }
        });
    };

    // Function to allow user to sort directory
    // handleSort = (col, order) => {
    //     let sortedList = [...this.state.employees].sort(util.compareValues(col, order));
    //     let list = order === "asc" ? "desc" : "asc"
    //     this.setState({
    //         employees: sortedList,
    //         order: list,
    //         orderBy: col
    //     });
    // }


    // Render table component with current state
    render() {
        return (
            <div>
                <Header />
                <Grid container justify="center">
                    <SearchForm employees={this.state.employees} handleInputChange={this.handleInputChange} />
                </Grid>
                <EmployeeTable employees={this.state.employees} />
            </div>
        );
    }
}

export default Directory;