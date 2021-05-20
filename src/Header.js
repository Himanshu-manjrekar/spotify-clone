import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artist,Songs,Albums..." type="text" />
            </div>
            <div className="header__right">
                <Avatar src="" alt="HIMA" />
                <h4>Himanshu Manjrekar</h4>
            </div>
        </div>
    )
}

export default Header
