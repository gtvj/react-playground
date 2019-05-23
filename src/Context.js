import React, {Component} from 'react';

const Context = React.createContext();

// Notice: Provider is being exported

export class Provider extends Component {
    state = {
        contacts: ['Peter', 'Paul', 'Mary']
    };

    // Notice: Context.Provider is returned by Provider

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

// Notice: Consumer is being exported

export const Consumer = Context.Consumer;