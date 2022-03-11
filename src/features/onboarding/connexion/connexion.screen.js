import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from './connexion.styles';
import Header from '../header/header.screen';

class Connexion extends React.Component {
  openConfirmation = () => {
    this.props.navigation.navigate('confirmation');
  };

  constructor(props) {
    super(props);
    this.state = {
      number: '',
      isDisabled: true,
    };
  }

  onChangeButton(number) {
    let isDisabled = true;
    this.setState({
      number,
    });
    if (number.length === 10) {
      isDisabled = false;
    }
    this.setState({
      isDisabled,
    });
  }

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
              maxLength={10}
              onChangeText={newValue => this.onChangeButton(newValue)}
              value={this.state.number}
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
            En cliquant sur "CONTINUER", vous acceptez la Politique
            Confidentialité, les CGU et les CGV de Cajoo.
          </Text>
          <TouchableOpacity
            onPress={isDisabled ? null : this.openConfirmation}
            style={isDisabled ? styles.passif : styles.actif}>
            <Text style={styles.textButton}>CONTINUER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Connexion;
