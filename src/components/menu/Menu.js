import React from 'react';

import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './Menu.css'
import motogol_logo from '../../img/motogol_logo.png';
import PropTypes from 'prop-types';

const Menu = ({handleClose, open, onRequestChange, ...props}) => (
    <div>
        <Drawer
            docked={false}
            width={300}
            open={open}
            onRequestChange={onRequestChange}
        >
            <MenuItem onClick={handleClose}>
                <Link className="menuItemLink" to="/">
                    <div className="logoWrapper">
                        {<img src={motogol_logo} alt="logo motogol" className="logo"/>}
                    </div>
                </Link>
            </MenuItem>
            <div className="allMenuLinks">
                <MenuItem onClick={handleClose}>
                    <Link className="menuItemLink" to="/">DASHBOARD</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className="menuItemLink" to="/result">WYSZUKIWARKA</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className="menuItemLink" to="/favourite">ULUBIONE</Link>
                </MenuItem>
            </div>
        </Drawer>
    </div>
);

Menu.propTypes = {
    handleClose: PropTypes.func,
    onRequestChangeL: PropTypes.func,
    open: PropTypes.func,
};

export default Menu;