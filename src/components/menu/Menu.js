import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = (props) => (
    <div>

        <Drawer
            docked={false}
            width={300}
            open={props.open}
            onRequestChange={props.onRequestChange}
        >
            <MenuItem onClick={props.handleClose}><Link className="menuItemLink" to="/">DASHBOARD</Link></MenuItem>
            <MenuItem onClick={props.handleClose}><Link className="menuItemLink" to="/result">WYSZUKIWARKA</Link></MenuItem>
            <MenuItem onClick={props.handleClose}><Link className="menuItemLink" to="/favourite">ULUBIONE</Link></MenuItem>
        </Drawer>
    </div>
);

export default Menu;