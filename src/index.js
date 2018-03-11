import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './routes/dashboard/Dashboard';
import FavouriteCars from './routes/favouriteCars/FavouriteCars';
import SearchResults from './routes/searchResults/SearchResults';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import SignInForm from "./routes/signInForm/SignInForm";

const login = true;


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={login ? Dashboard : SignInForm}/>
            <Route path='/favourite' component={FavouriteCars}/>
            <Route path='/result' component={SearchResults}/>
        </div>


    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
