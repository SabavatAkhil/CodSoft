import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Please login or signup to continue using our app.</Text>
      <Button title="Sign up with Facebook" onPress={() => {}} />
      <Button title="Sign up with Twitter" onPress={() => {}} />
      <Button title="Sign up with Email" onPress={() => navigation.navigate('Signup')} />
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        You already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginVertical: 20, textAlign: 'center' },
  loginLink: { color: 'blue', marginTop: 20 }
});

export default WelcomeScreen;

