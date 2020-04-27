import React, { Fragment } from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <Fragment>
        <input  type='search' 
                placeholder='search robots'
                className="pa3 ba b--green bg-lightest-blue"
                onChange={searchChange} />
    </Fragment>
  );
}

export default SearchBox;