import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';

const navigate = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </View>
  );
}

export default navigate;
