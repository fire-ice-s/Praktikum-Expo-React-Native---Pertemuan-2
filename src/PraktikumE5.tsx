import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Praktikum E5: Mengubah Tampilan, Fast Refresh
// Coba sendiri: ubah backgroundColor menjadi '#FFF3E0', ubah teks judul menjadi nama Anda, fontSize 36.
export default function PraktikumE5() {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Fariz Muhammad Fadilah</Text>
      <Text style={styles.subjudul}>Ini aplikasi pertama saya di Expo React Native.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0', // Coba sendiri: #FFF3E0
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  judul: {
    fontSize: 36, // Coba sendiri: fontSize 36
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  subjudul: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
