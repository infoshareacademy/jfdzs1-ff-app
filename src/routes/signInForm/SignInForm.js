import React from 'react';
import './signInForm.css';
import RaisedButtonExampleComplex from '../../components/raisedButton/raisedButton'
import PaperExampleRounded from '../../paper'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

const SignInForm = (props) => {
    return (
        <PaperExampleRounded>
            <section className="sign_in_form">
                <h3>zaloguj się</h3>
                <div className="sign_in_with_google">
                    <RaisedButtonExampleComplex
                        label="Zaloguj się z kontem Google"
                        icon={<FontAwesomeIcon icon={["fab", "google"]}/>}
                        openGoogleSignIn={props.openGoogleSignIn}
                    />
                </div>
            </section>
        </PaperExampleRounded>
    )
};

SignInForm.propTypes = {
    openGoogleSignIn: PropTypes.func
};
export default SignInForm;
