import React, { Component } from 'react';

import '../styles/App.css';

// components
import Navbar from './Navbar';
import ToDoApp from './ToDoApp';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="page-wrapper">
                    <ToDoApp />
                </div>

            </React.Fragment>
        );
    }
}

export default App;
