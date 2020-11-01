import React from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css';

function SearchForm(props) {
    return (
        <TextField className="searchBox" color="secondary" variant="outlined" label="Search Here" type="search" name="search" onChange={props.handleInputChange} />
    )
}

export default SearchForm;