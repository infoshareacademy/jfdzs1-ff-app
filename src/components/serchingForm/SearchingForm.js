import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';

const API_URL = "https://moto-gol-mocks.firebaseio.com/.json";

class SearchingForm extends PureComponent {

    state = {
        fetchedData: []
    }

    fetchData = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    fetchedData: json
                });
            });
    }

    render() {
        return (
            <div>
                <TextField
                hintText="np. Audi"
                floatingLabelText="Wyszukaj auto"
                />
                <button onClick={this.fetchData}>Szukaj</button>
                <div>{this.state.fetchedData}</div>
            </div>
        );
    }
}

export default SearchingForm;
