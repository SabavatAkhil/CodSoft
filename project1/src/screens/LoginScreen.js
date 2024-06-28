import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    // Implement the login logic here (e.g., API call)
    Alert.alert('Success', 'Login Successful');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Now</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Text style={styles.forgotPassword} onPress={() => {}}>
        Forgot Password?
      </Text>
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10 },
  forgotPassword: { color: 'blue', marginBottom: 20 },
  signupLink: { color: 'blue', marginTop: 20 }
});

export default LoginScreen;
