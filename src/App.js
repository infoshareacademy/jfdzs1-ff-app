import Dashboard from './routes/dashboard/Dashboard';
import FavouriteCars from './routes/favouriteCars/FavouriteCars';
import SearchResults from './routes/searchResults/SearchResults';
import {BrowserRouter, Route} from 'react-router-dom';
import SignInForm from "./routes/signInForm/SignInForm";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from "./components/appBar/AppBar"
import Seba from './img/Seba.jpg';

import React, {PureComponent} from 'react';
import {
    blueGrey500, blueGrey700,
    blueGrey100, blueGrey300, blueGrey400,
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
        primary1Color: blueGrey500,
        primary2Color: blueGrey700,
        primary3Color: blueGrey400,
        accent1Color: red,
        accent2Color: blueGrey100,
        accent3Color: blueGrey500,
        textColor: white,
        alternateTextColor: darkBlack,
        canvasColor: white,
        borderColor: blueGrey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blueGrey500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
});

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'Sebastian Maria Drzewiecki',
            userPhotoURL: Seba
        };
    }

    handleClick = () => {
        alert('onClick triggered on the title component');
    };


    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <AppBar
                            userName={this.state.userName}
                            userPhotoURL={this.state.userPhotoURL}
                            handleClick={this.handleClick}
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
