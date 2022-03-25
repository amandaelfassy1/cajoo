import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from './connexion.styles';
import Header from '../header/header.screen';
import {Auth} from 'aws-amplify';

class Connexion extends React.Component {
  openConfirmation = () => {
    this.props.navigation.navigate('confirmation');
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isDisabled: true,
    };
  }

  onChangeButton(username) {
    let isDisabled = true;
    this.setState({
      username,
    });
    if (username.length === 9) {
      isDisabled = false;
    }
    this.setState({
      isDisabled,
    });
  }

  Logout = async () => {
    try {
      const response = await Auth.signOut();
      console.log('response logout:', JSON.stringify(response));
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  seConnecter = async () => {
    try {
      console.log('test');
      const {user} = await Auth.signUp({
        username: '+33651689573',
        password: 'Amanda30',
      });
      console.log('utilisateur créé:', user);
      this.props.navigation.navigate('confirmation');
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  render() {
    const {isDisabled} = this.state;
    return (
      <View style={styles.main}>
        <Header />
        <View>
          <Text style={styles.text}>Quel est votre numéro ?</Text>
          <Text style={styles.subtitle}>
            Pour que notre livreur puisse vous contacter 😄
          </Text>
          <View>
            <TextInput
              style={styles.inputContainer}
              keyboardType="numeric"
              maxLength={9}
              onChangeText={newValue => this.onChangeButton(newValue)}
              value={this.state.username}
            />
            <TouchableOpacity>
              <Image
                source={require('../../../assets/france.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.subtitle}>
            En cliquant sur "CONTINUER", vous acceptez la
            <Text style={styles.link}> Politique de Confidentialité</Text>, les
            <Text style={styles.link}>CGU</Text>et les
            <Text style={styles.link}>CGV</Text> de Cajoo
          </Text>
          <TouchableOpacity
            onPress={isDisabled ? null : this.seConnecter}
            style={isDisabled ? styles.passif : styles.actif}>
            <Text style={styles.textButton}>CONTINUER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Connexion;
