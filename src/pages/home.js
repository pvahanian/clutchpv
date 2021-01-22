import React, { Component } from 'react'
import Stats from '../components/stats';

export class home extends Component {
    render() {
        return (
            <div>
                <h1>Athlete Page</h1> 
                <Stats />
            </div>
        )
    }
}

export default home
