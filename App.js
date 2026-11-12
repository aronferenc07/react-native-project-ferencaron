import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bejegyzes from './components/Bejegyzes';

const KEZDO_BEJEGYZESEK = [
  {
    id: '1',
    cim: 'Hétvégi kirándulás',
    hely: 'Dobogókő',
    leiras: 'Gyönyörű kilátás a Dunakanyarra, tiszta időben a Tátra is látszik.',
  },
  {
    id: '2',
    cim: 'Városnézés és kávézás',
    hely: 'Szentendre',
  },
  {
    id: '3',
    cim: 'Naplemente a parton',
    hely: 'Balatonfüred',
    leiras: 'Séta a Tagore sétányon, majd lángosozás a parton.',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Útinapló</Text>
      <View>
        {KEZDO_BEJEGYZESEK.map((elem) => (
          <Bejegyzes
            key={elem.id}
            cim={elem.cim}
            hely={elem.hely}
            leiras={elem.leiras}
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
