import React from 'react';
import { StatusBar, View } from 'react-native';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';
import Navigation from './navegacao';

export default props => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </>
  );
};
