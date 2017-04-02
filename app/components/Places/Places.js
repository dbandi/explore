import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Basicinfo extends Component {

    constructor (){
        super();
    }
    
    componentWillMount() {
        this.props.fetchPlaces(1);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    
    render() {
        return (
            <View>
                
            </View>
        )
    }
}