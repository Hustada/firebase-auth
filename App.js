import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';


export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "apikeygoeshere",
      authDomain: "one-time-password-700f2.firebaseapp.com",
      databaseURL: "https://one-time-password-700f2.firebaseio.com",
      projectId: "one-time-password-700f2",
      storageBucket: "one-time-password-700f2.appspot.com",
      messagingSenderId: "idgoeshere"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
