import Dashboard from './routes/dashboard/Dashboard';
import FavouriteCars from './routes/favouriteCars/FavouriteCars';
import SearchResults from './routes/searchResults/SearchResults';
import {BrowserRouter, Route} from 'react-router-dom';
import SignInForm from "./routes/signInForm/SignInForm";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React, {PureComponent} from 'react';

const login = true;

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <div>
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
