import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './login.styles';

import LandingSocialButton from './components/social-button';
import ButtonTel from './components/button-tel';
import Header from '../header/header.screen';

class Login extends React.Component {
  openConnexion = () => {
    this.props.navigation.navigate('connexion');
  };
  render() {
    return (
      <View style={styles.main}>
        <Header />
        <Text style={styles.simple}>Connectez vous simplement !</Text>
        <LandingSocialButton />
        <LandingSocialButton type="google" />
        <ButtonTel onPress={this.openConnexion} />
      </View>
    );
  }
}

export default Login;
