import React from 'react';
import People from './People';
import Employees from './Employees';

import {Provider} from './Context';

import './App.css';

function App() {
    return (
        <Provider>
            <p>
                <People/>
                <Employees/>
            </p>

        </Provider>
    );
}

export default App;
