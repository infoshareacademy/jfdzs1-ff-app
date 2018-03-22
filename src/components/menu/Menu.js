import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom'
import './Menu.css'
import motogol_logo from '../../img/motogol_logo_white.png';

const Menu = (props) => (
    <div>

        <Drawer
            docked={false}
            width={300}
            open={props.open}
            onRequestChange={props.onRequestChange}
        >
            <MenuItem onClick={props.handleClose}>
                <Link className="menuItemLink" to="/">
                    <div className="logoWrapper">
                        {<img src={motogol_logo} alt="logo motogol" className="logo"/>}
                    </div>
                </Link>
            </MenuItem>
            <div className="allMenuLinks">
                <MenuItem onClick={props.handleClose}><Link className="menuItemLink" to="/">DASHBOARD</Link></MenuItem>
                <MenuItem onClick={props.handleClose}><Link className="menuItemLink" to="/result">WYSZUKIWARKA</Link></MenuItem>
                <MenuItem onClick={props.handleClose}><Link className="menuItemLink" to="/favourite">ULUBIONE</Link></MenuItem>
            </div>
        </Drawer>
    </div>
);

export default Menu;