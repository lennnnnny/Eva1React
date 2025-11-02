import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen() {
  const { userEmail } = useAuth();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la App!</Text>
      <Text style={styles.subtitle}>Usuario: {userEmail}</Text>
      <Text style={styles.subtitle}>Navega usando las pestañas de abajo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});