import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Counter from '../actions/counter';


export class Home extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to the bLing React Redux boilerplate</h1>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.counterActions.increment}>increment</button> 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        counterActions: bindActionCreators(Counter, dispatch)
    };
}

function mapStateToProps(state){
    return{
        value: state.counter.value
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps    
) (Home)
