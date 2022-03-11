import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './confirmation.styles';
import Header from '../header/header.screen';
import Input from './components/input';

export default function Confirmation() {
  const [code, setCode] = useState('');
  const activeChange = payload => {
    setCode(payload);
  };

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Confirmez votre numéro !</Text>
        <Text style={styles.subtitle}>Entrez le code envoyé au +33</Text>
        <View style={styles.inputContainer}>
          <Input position={1} code={code} setCode={activeChange} />
        </View>
        <Text style={styles.subtitle}>
          Vous n'avez pas reçu le code ?{' '}
          <Text style={styles.link}>Renvoyer</Text>
        </Text>
      </View>
    </View>
  );
}
