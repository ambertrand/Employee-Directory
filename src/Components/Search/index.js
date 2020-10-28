import React from 'react';

function Search(prop) {
    return (
        <div>
            <h2>Search for Employees</h2>
            <form className="search d-flex align-items-center">
                <div>
                    <label>Search:</label>
                    <input 
                        value={prop.search}
                        onChange={prop.handleInputChange} 
                        type="text"
                        className="form-control"
                        placeholder="Filter"
                    />
                    <button type="submit" onClick={prop.handleFormSubmit} className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    );
}

export default Search;