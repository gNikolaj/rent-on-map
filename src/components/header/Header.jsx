import React from 'react';
import './Header.css';
import SearchInput from "../search-input/SearchInput";

const Header = ({isLoaded}) => {
    return (
        <header className='header'>
            <SearchInput isLoaded={isLoaded}/>
        </header>
    );
};

export default Header;
