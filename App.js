/**
 * @module App
 * @description If any user its logged in this component renders a welcome text,
 * the 'AntRace' component and a button to log out. Otherwise it renders the LogIn Page
 */
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {AntRace} from './src/views/AntRace';
import {Login} from './src/views/Login';
import {styles} from './_app';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://guarded-shore-81814.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogIn(userName) {
    setIsLoggedIn(userName);
  }

  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        {isLoggedIn ? (
          <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome {isLoggedIn}</Text>
            <AntRace />
            <Button title={'Log Out'} onPress={() => setIsLoggedIn(false)} />
          </View>
        ) : (
          <Login onLoggedIn={handleLogIn} />
        )}
      </SafeAreaView>
    </ApolloProvider>
  );
}
