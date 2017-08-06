import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return (
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/bLing1'}>bLing1</Link>
                <Link to={'/bLing2'}>bLing2</Link>
            </nav>        
        )
    }
}
