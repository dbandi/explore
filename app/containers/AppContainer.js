import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import PlacesConnector from '../components/Places/PlacesConnector';

export default class AppContainer extends Component {
    render() {
        let Scene = PlacesConnector;

        console.log('AppContainer');
        return (
        <View>
            <Text>
                <Scene />
            </Text>
        </View>
        )
    }
}