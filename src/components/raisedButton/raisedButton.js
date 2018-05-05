import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { buttonStyle } from "../../styles"

const RaisedButtonExampleComplex = (props) => (
    <div>
        <RaisedButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label={props.label}
            secondary={true}
            style={buttonStyle.button}
            icon={props.icon}
            onClick={props.openGoogleSignIn()}
            labelStyle={{textTransform: 'lowercase', fontWeight: 'normal'}}
        />
    </div>
);

export default RaisedButtonExampleComplex;
