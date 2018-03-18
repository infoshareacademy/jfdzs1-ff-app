import React, { PureComponent } from 'react';
import Header from '../../components/header/Header'

class Dashboard extends PureComponent {
    render() {
        return (
            <div className="dashboard">
              <Header/>
            </div>
        );
    }
}

export default Dashboard;
