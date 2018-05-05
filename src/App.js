import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

import AppBar from "./components/appBar/AppBar";
import Menu from './components/menu/Menu';
import Spinner from './components/spinner/Spinner';

import Dashboard from './routes/dashboard/Dashboard'
import FavouriteCars from './routes/favouriteCars/FavouriteCars'
import SearchResults from './routes/searchResults/SearchResults'
import SignInForm from "./routes/signInForm/SignInForm"

import {muiTheme} from "./styles"
import {provider, auth} from './firebase'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands);

const URL = 'https://motogol-isa.firebaseio.com/';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPhotoURL: '',
            open: false,
            isLoaded: false
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    userName: user.displayName,
                    userPhotoURL: user.photoURL,
                    isLoaded: true
                })
            } else {
                this.setState({
                    userName: '',
                    userPhotoURL: '',
                    userMail: '',
                    isLoaded: true
                })
            }
        });
    }

    signOut = () => {
        auth.signOut()
            .catch(error => {
                console.error('Signout Failed')
            });
    };

    openGoogleSignIn = () => {
        return () => {
            auth.signInWithPopup(provider)
                .then(result => {
                    fetch(URL + result.user.displayName + '.json', {
                        method: 'put',
                        headers: {
                            'Accept': 'application/json, text/plain',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userName: result.user.displayName,
                            userPhotoURL: result.user.photoURL,
                            userMail: result.user.email
                        })
                    });
                })
                .catch(error => alert('Unable to authorize with Google'));
        }
    };

    handleClose = () => this.setState({open: false});

    handleOnLeftIconButtonClick = () => this.setState({open: !this.state.open});

    onRequestChange = (open) => this.setState({open});

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={muiTheme}>
                    {this.state.isLoaded ? (this.state.userName ?
                        <div>
                            <AppBar
                                userName={this.state.userName}
                                userPhotoURL={this.state.userPhotoURL}
                                handleClick={this.handleClick}
                                handleOnLeftIconButtonClick={this.handleOnLeftIconButtonClick}
                                signOut={this.signOut}
                            />
                            <Menu
                                handleClose={this.handleClose}
                                handleToggle={this.handleToggle}
                                open={this.state.open}
                                onRequestChange={this.onRequestChange}
                            />
                            <Route exact path='/' component={Dashboard}/>
                            <Route path='/favourite' component={FavouriteCars}/>
                            <Route path='/result' component={SearchResults}/>
                        </div> : <SignInForm
                            openGoogleSignIn={this.openGoogleSignIn}
                        />) : <Spinner/>}

                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    userName: PropTypes.string,
    userPhotoURL: PropTypes.string,
    open: PropTypes.bool,
    isLoaded: PropTypes.bool,
    userMail: PropTypes.string
};

export default App;
