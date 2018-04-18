import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from "./components/appBar/AppBar";
import Menu from './components/menu/Menu';

import Dashboard from './routes/dashboard/Dashboard';
import FavouriteCars from './routes/favouriteCars/FavouriteCars';
import SearchResults from './routes/searchResults/SearchResults';
import SignInForm from "./routes/signInForm/SignInForm";

import {muiTheme} from "./styles";
import {googleProvider, auth} from './firebase'

const URL = 'https://motogol-isa.firebaseio.com/';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPhotoURL: '',
            open: false
        };
    }

    signOut = () => {
        fetch(URL + this.state.userName + '.json', {
            method: 'delete',
        })
            .then(response => response.json())
            .then(this.setState({
                    userName: '',
                    userPhotoURL: '',
                    userMail: ''
                })
            );
    };

    openGoogleSignIn = () => {
        return () => {
            auth.signInWithPopup(googleProvider)
                .then(result => {
                    this.setState({
                        userName: result.user.displayName,
                        userPhotoURL: result.user.photoURL
                    }, () => {
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
                    {this.state.userName ?
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
                        />}

                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
