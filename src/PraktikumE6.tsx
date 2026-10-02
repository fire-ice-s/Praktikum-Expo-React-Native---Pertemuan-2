import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

// Praktikum E6: Tombol yang Bisa Ditekan
// Coba sendiri: tambahkan tombol kedua berjudul "Tentang" yang menampilkan Alert berisi nama Anda.
export default function PraktikumE6() {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Halo, Expo!</Text>
      <Text style={styles.subjudul}>Ini aplikasi pertama saya.</Text>
      
      <View style={styles.buttonSpacing}>
        <Button
          title="Tekan Saya"
          onPress={() => Alert.alert('Halo!', 'Tombol berhasil ditekan')}
        />
      </View>

      {/* Coba Sendiri E6: Tombol Kedua 'Tentang' */}
      <View style={styles.buttonSpacing}>
        <Button
          title="Tentang"
          color="#10B981"
          onPress={() => Alert.alert('Tentang', 'Nama: Fariz Muhammad Fadilah\nNIM: 2441063\nKelas: SI')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  judul: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subjudul: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  buttonSpacing: {
    width: '80%',
    marginVertical: 6,
  },
});
