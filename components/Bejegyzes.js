import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View>
      <Text>{cim}</Text>
      <Text>Helyszín: {hely}</Text>
      {leiras ? <Text>{leiras}</Text> : null}
    </View>
  );
}
