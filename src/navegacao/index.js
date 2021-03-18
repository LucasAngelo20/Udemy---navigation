import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Stack from './Stack';
import Tab from './Tab';

export default props => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab />
        {/* <Stack /> */}
      </NavigationContainer>
    </View>
  );
}

