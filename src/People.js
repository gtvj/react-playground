import React, {Component} from 'react';
import {Consumer} from './Context'

class People extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return (
                        <ul>
                            {
                                contacts.map(contact => <li>{contact}</li>)
                            }
                        </ul>
                    )
                }}
            </Consumer>
        )
    }
}

export default People;