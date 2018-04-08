import React, { PureComponent } from 'react';
import SearchingForm from '../../components/serchingForm/SearchingForm';

class SearchResults extends PureComponent {
    render() {
        return (
            <div>
                <SearchingForm/>

                <p>search result</p>

            </div>
        );
    }
}

export default SearchResults;
