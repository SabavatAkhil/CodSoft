import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignup = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    if (!agree) {
      Alert.alert('Error', 'You must agree with the privacy policy');
      return;
    }
    // Implement the signup logic here (e.g., API call)
    Alert.alert('Success', 'Signup Successful');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setAgree(!agree)}>
          <Text style={{ marginRight: 10 }}>{agree ? '[X]' : '[ ]'}</Text>
        </TouchableOpacity>
        <Text>I agree with the privacy policy</Text>
      </View>
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        You already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  loginLink: { color: 'blue', marginTop: 20 }
});

export default SignupScreen;

