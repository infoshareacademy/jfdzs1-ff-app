import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from "./components/appBar/AppBar";
import Menu from './components/menu/Menu';

import Dashboard from './routes/dashboard/Dashboard';
import FavouriteCars from './routes/favouriteCars/FavouriteCars';
import SearchResults from './routes/searchResults/SearchResults';
import SignInForm from "./routes/signInForm/signInForm.container";

import {muiTheme} from "./styles";
import Seba from './img/Seba.jpg';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userName: '', //Sebastian Maria Drzewiecki
            userPhotoURL: Seba,
            open: false
        };
    }
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
                        </div> : <SignInForm/>}

                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
