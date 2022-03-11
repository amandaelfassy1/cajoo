import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './landing.styles';
import LandingButton2 from './components/landing-button2';

class Landing extends React.Component {
  openSeConnecter = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <View style={styles.main}>
        <Image
          source={require('../../../assets/cajoo.png')}
          style={styles.logo}
        />
        <Text style={styles.titre}>Vos courses en 3 clics ! </Text>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.boutton1}>
            <Text style={styles.textButton1} onPress={this.openSeConnecter}>
              Me connecter 👋
            </Text>
          </TouchableOpacity>
          <LandingButton2 />
        </View>
      </View>
    );
  }
}

export default Landing;
