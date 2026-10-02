import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Profil = {
  nama: string;
  nim: string;
  prodi: string;
  angkatan: number;
  hobi?: string;
};

const saya: Profil = {
  nama: 'Fariz Muhammad Fadilah',
  nim: '2441063',
  prodi: 'Sistem Informasi',
  angkatan: 2024,
  hobi: 'Ngopi & Belajar Coding Mobile',
};

export default function App() {
  const [tabAktif, setTabAktif] = useState<'E7' | 'E6' | 'E5'>('E7');
  const [tampilkanHobi, setTampilkanHobi] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, tabAktif === 'E7' && styles.tabButtonActive]}
          onPress={() => setTabAktif('E7')}
        >
          <Text style={[styles.tabText, tabAktif === 'E7' && styles.tabTextActive]}>
            E7 (Card Profil)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, tabAktif === 'E6' && styles.tabButtonActive]}
          onPress={() => setTabAktif('E6')}
        >
          <Text style={[styles.tabText, tabAktif === 'E6' && styles.tabTextActive]}>
            E6 (Tombol & Alert)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, tabAktif === 'E5' && styles.tabButtonActive]}
          onPress={() => setTabAktif('E5')}
        >
          <Text style={[styles.tabText, tabAktif === 'E5' && styles.tabTextActive]}>
            E5 (Fast Refresh)
          </Text>
        </TouchableOpacity>
      </View>

      {tabAktif === 'E7' && (
        <View style={styles.contentArea}>
          <Text style={styles.sectionHeader}>Praktikum E7: Gabungan CardName</Text>
          <View style={styles.kartu}>
            <Text style={styles.nama}>{saya.nama}</Text>
            <Text style={styles.detail}>NIM: {saya.nim}</Text>
            <Text style={styles.detail}>Program Studi: {saya.prodi}</Text>
            <Text style={styles.detail}>Angkatan: {saya.angkatan}</Text>
            
            {tampilkanHobi && saya.hobi && (
              <Text style={styles.hobi}>Hobi: {saya.hobi}</Text>
            )}

            <View style={styles.actionDivider} />

            <View style={styles.buttonRow}>
              <Button
                title={tampilkanHobi ? "Sembunyikan Hobi" : "Tampilkan Hobi"}
                color="#6366F1"
                onPress={() => setTampilkanHobi(!tampilkanHobi)}
              />
            </View>
          </View>
        </View>
      )}

      {tabAktif === 'E6' && (
        <View style={styles.contentArea}>
          <Text style={styles.sectionHeader}>Praktikum E6: Tombol yang Bisa Ditekan</Text>
          <View style={styles.kartu}>
            <Text style={styles.judulE6}>Halo, Expo!</Text>
            <Text style={styles.subjudulE6}>Ini aplikasi pertama saya.</Text>

            <View style={styles.buttonSpacing}>
              <Button
                title="Tekan Saya"
                onPress={() => Alert.alert('Halo!', 'Tombol berhasil ditekan')}
              />
            </View>

            <View style={styles.buttonSpacing}>
              <Button
                title="Tentang"
                color="#10B981"
                onPress={() =>
                  Alert.alert(
                    'Tentang Mahasiswa',
                    `Nama: ${saya.nama}\nNIM: ${saya.nim}\nProdi: ${saya.prodi}\nKelas: SI`
                  )
                }
              />
            </View>
          </View>
        </View>
      )}

      {tabAktif === 'E5' && (
        <View style={[styles.contentArea, { backgroundColor: '#FFF3E0', borderRadius: 12, padding: 16 }]}>
          <Text style={styles.sectionHeader}>Praktikum E5: Tampilan & Style</Text>
          <Text style={styles.judulE5}>{saya.nama}</Text>
          <Text style={styles.subjudulE5}>fontSize: 36, backgroundColor: #FFF3E0</Text>
          <Text style={styles.infoE5}>Ini hasil latihan "Coba Sendiri" Praktikum E5.</Text>
        </View>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Application Mobile Development • Pertemuan 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabButtonActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#111827',
  },
  contentArea: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#6B7280',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 1,
  },
  kartu: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  detail: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 6,
  },
  hobi: {
    fontSize: 15,
    color: '#4F46E5',
    marginTop: 8,
    fontWeight: '500',
  },
  actionDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 18,
  },
  buttonRow: {
    marginTop: 4,
  },
  judulE6: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  subjudulE6: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonSpacing: {
    marginVertical: 8,
  },
  judulE5: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#B45309',
    textAlign: 'center',
    marginBottom: 10,
  },
  subjudulE5: {
    fontSize: 16,
    color: '#78350F',
    textAlign: 'center',
    marginBottom: 8,
  },
  infoE5: {
    fontSize: 14,
    color: '#92400E',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
