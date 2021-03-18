import React from 'react'
import { View } from 'react-native'
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';
import Navigation from './navegacao'


export default props => {
    return (
        <View style={{flex:1}}>
            <Navigation />
        </View>
    )
}

