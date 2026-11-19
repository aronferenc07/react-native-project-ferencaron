import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View style={styles.kartya}>
      <Text style={styles.cim}>{cim}</Text>
      <Text>Helyszín: <Text style={styles.helyszin}>{hely}</Text></Text>
      {leiras ? <Text numberOfLines={2}>{leiras}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    padding: 10,
    margin: 10,
    borderWidth: 10,
    borderRadius: 10,
  },
  cim: {
    fontWeight: 'bold'
  },
  helyszin: {
    color: '#8c8c8c'
  }
});
