import React from 'react';

import AppBar from 'material-ui/AppBar';
import motogol_logo from '../../img/motogol_logo.png';
import './AppBar.css'
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import ActionAccountCircle from 'react-material-icons/icons/action/account-circle';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

const NavigationBar = (props) => (
    <AppBar
        className="AppBar"
        onLeftIconButtonClick={props.handleOnLeftIconButtonClick}
        title=
            {<Link className="menuItemLink" to="/">
                {<img src={motogol_logo} alt="logo motogol" className="logo"/>}
            </Link>}
        iconElementRight={
            <div className="user-area" >
                {props.userPhotoURL ? <Avatar size={24} src={props.userPhotoURL}/> : <ActionAccountCircle/>}
                <div className="user-name">{props.userName}</div>
                <FlatButton type="button" className="sign-out" label="Wyloguj" onClick={props.signOut}/>
            </div>
        }
    >
    </AppBar>
);

NavigationBar.propTypes = {
    openGoogleSignIn: PropTypes.func,
    userPhotoURL: PropTypes.string,
    userName: PropTypes.string,
    signOut: PropTypes.func,
    handleOnLeftIconButtonClick: PropTypes.func
};

export default NavigationBar;
