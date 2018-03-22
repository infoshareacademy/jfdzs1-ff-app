import Dashboard from './routes/dashboard/Dashboard';
import FavouriteCars from './routes/favouriteCars/FavouriteCars';
import SearchResults from './routes/searchResults/SearchResults';
import {BrowserRouter, Route} from 'react-router-dom';
import SignInForm from "./routes/signInForm/SignInForm";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from "./components/appBar/AppBar"
import Seba from './img/Seba.jpg';
import Menu from './components/menu/Menu'

import React, {PureComponent} from 'react';
import {
    grey500, grey700,
    grey100, grey300, grey400,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';

const login = true;
const red = "#c30000";
const muiTheme = getMuiTheme({
    spacing: spacing,
    typography: typography,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: white,
        primary2Color: grey700,
        primary3Color: grey400,
        accent1Color: red,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: darkBlack,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: grey500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
});

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'Sebastian Maria Drzewiecki',
            userPhotoURL: Seba,
            open: false
        };
    }

    handleClick = () => {
        alert('onClick triggered on the title component');
    };

    handleClose = () => this.setState({open: false});

    handleOnLeftIconButtonClick = () => this.setState({open: !this.state.open});

    onRequestChange = (open) => this.setState({open});

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={muiTheme}>
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
                        <Route exact path='/' component={login ? Dashboard : SignInForm}/>
                        <Route path='/favourite' component={FavouriteCars}/>
                        <Route path='/result' component={SearchResults}/>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
