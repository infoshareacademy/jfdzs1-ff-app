import React from 'react';
import AppBar from 'material-ui/AppBar';
import motogol_logo from '../../img/motogol_logo_white.png';
import './AppBar.css'
import FlatButton from 'material-ui/FlatButton';


import Avatar from 'material-ui/Avatar';

const NavigationBar = ({userPhotoURL, userName, handleClick, ...props}) => (
    <AppBar
        className="AppBar"
        title={<img src={motogol_logo} alt="logo motogol" className="logo"/>}
        onTitleClick={handleClick}
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