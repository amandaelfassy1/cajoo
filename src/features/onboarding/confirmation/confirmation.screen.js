import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import styles from './confirmation.styles';
import Header from '../header/header.screen';
import Input from './components/input';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/core';

export default function Confirmation({route: {params}}) {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const active = async payload => {
    setCode(payload);

    if (payload.length === 6) {
      try {
        if (params.alreadyExist) {
          await Auth.confirmSignUp(params.phone, payload);
        }
      } catch (error) {
        Alert.alert('Code incorrect', 'veuillez réessayer', [
          {
            text: 'Fermer',
            style: 'cancel',
          },
        ]);
      }
    }
  };

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Confirmez votre numéro !</Text>
        <Text style={styles.subtitle}>Entrez le code envoyé au +33</Text>
        <View style={styles.inputContainer}>
          <Input code={code} setCode={active} />
        </View>
        <Text style={styles.subtitle}>
          Vous n'avez pas reçu le code ?{' '}
          <Text style={styles.link}>Renvoyer</Text>
        </Text>
      </View>
    </View>
  );
}
