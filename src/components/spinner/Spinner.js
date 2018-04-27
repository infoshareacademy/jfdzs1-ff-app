import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './spinner.css';
import { red } from '../../styles'

const Spinner = () => (
    <div className="spinner">
        <CircularProgress color={red} size={50} thickness={3} />
    </div>
);

export default Spinner;