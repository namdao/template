import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const PhoneSignIn = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [number, setNumber] = useState();
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(number);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      alert('success');
    } catch (error) {
      alert(JSON.stringify(error));
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={(text) => setNumber(text)} />
        <Button title="Phone Number Sign In" onPress={signInWithPhoneNumber} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput value={code} style={styles.input} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
};
export default PhoneSignIn;
