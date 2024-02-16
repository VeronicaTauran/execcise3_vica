import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Lakukan proses autentikasi di sini, misalnya dengan mengirimkan data ke backend
    console.log('Username:', username);
    console.log('Password:', password);
    // Implementasi autentikasi lebih lanjut di sini
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan username anda"
          onChangeText={text => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan password anda"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 45,
    paddingTop: 30,
    backgroundColor: '#FFF3CF',
  },
  titleContainer: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#2A2F4F',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: '#2A2F4F',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#474F7A',
    borderWidth: 4,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#2A2F4F',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignInScreen;