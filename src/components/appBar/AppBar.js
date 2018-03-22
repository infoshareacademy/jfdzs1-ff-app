import React from 'react';
import AppBar from 'material-ui/AppBar';
import motogol_logo from '../../img/motogol_logo_white.png';
import './AppBar.css'
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom'


import Avatar from 'material-ui/Avatar';

const NavigationBar = ({userPhotoURL, userName, handleClick, handleOnLeftIconButtonClick, ...props}) => (
    <AppBar
        className="AppBar"
        onLeftIconButtonClick={handleOnLeftIconButtonClick}
        title=
            {<Link className="menuItemLink" to="/">
                {<img src={motogol_logo} alt="logo motogol" className="logo"/>}
            </Link>}
        // onTitleClick={handleClick}
        iconElementRight={
            <div className="user-area">
                <Avatar src={userPhotoURL}/>
                <div className="user-name">{userName}</div>
                <FlatButton label="Wyloguj"/>
            </div>
        }
    >
    </AppBar>
);

export default NavigationBar;