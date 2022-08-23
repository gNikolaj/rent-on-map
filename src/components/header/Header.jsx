import React from 'react';
import './Header.css';
import SearchInput from "../search-input/SearchInput";

const Header = ({isLoaded, onSelect}) => {
    return (
        <header className='header'>
            <SearchInput isLoaded={isLoaded} onSelect={onSelect}/>
        </header>
    );
};

export default Header;
