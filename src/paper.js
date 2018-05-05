import React from 'react';
import Paper from 'material-ui/Paper';
import { paperStyle } from './styles'

const PaperExampleRounded = (props) => (
    <div className="sign_in_paper">
        <Paper style={paperStyle} zDepth={3} rounded={false}>{props.children}</Paper>
    </div>
);

export default PaperExampleRounded;
