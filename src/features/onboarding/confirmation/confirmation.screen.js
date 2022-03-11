import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from './confirmation.styles';
import Header from '../header/header.screen';

class Confirmation extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Header />
        <View>
          <Text style={styles.text}>Quel est votre numéro ?</Text>
          <Text style={styles.subtitle}>
            Pour que notre livreur puisse vous contacter 😄
          </Text>
          <View>
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
        </View>
      </View>
    );
  }
}

export default Confirmation;
