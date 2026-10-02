import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Definisi tipe data Profil
// Coba sendiri: Tambahkan properti angkatan: number pada type Profil
type Profil = {
  nama: string;
  nim: string;
  prodi: string;
  angkatan: number;
  hobi?: string; // opsional: boleh ada, boleh tidak
};

// Coba sendiri: Ganti data pada object saya dengan data Anda sendiri
const saya: Profil = {
  nama: 'Fariz Muhammad Fadilah',
  nim: '2441063',
  prodi: 'Sistem Informasi',
  angkatan: 2024,
  hobi: 'Ngopi & Belajar Coding Mobile',
};

export default function PraktikumE7() {
  return (
    <View style={styles.container}>
      <View style={styles.kartu}>
        <Text style={styles.nama}>{saya.nama}</Text>
        <Text style={styles.detail}>NIM: {saya.nim}</Text>
        <Text style={styles.detail}>Program Studi: {saya.prodi}</Text>
        <Text style={styles.detail}>Angkatan: {saya.angkatan}</Text>
        {saya.hobi && <Text style={styles.hobi}>Hobi: {saya.hobi}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    padding: 24,
  },
  kartu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1F2937',
  },
  detail: {
    fontSize: 15,
    color: '#4B5563',
    marginBottom: 4,
  },
  hobi: {
    fontSize: 15,
    color: '#059669',
    marginTop: 6,
    fontStyle: 'italic',
  },
});
