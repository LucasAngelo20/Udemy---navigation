import React from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        {props.voltar ? (
          <Button
            title="Voltar"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        ) : (
          false
        )}
        {props.avancar ? (
          <Button
            title="Avançar"
            onPress={() => {
              props.navigation.navigate(props.avancar, props.avancarParams);
            }}
          />
        ) : (
          false
        )}
      </View>
      <View style={{ flex: 1 }}>{props.children}</View>
    </View>
  );
};
