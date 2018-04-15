import { connect } from 'react-redux';

import { openGoogleSignIn } from './signIn.actions/signIn.actions';

import SignInForm from './SignInForm'

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    openGoogleSignIn: () => dispatch(openGoogleSignIn())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);
