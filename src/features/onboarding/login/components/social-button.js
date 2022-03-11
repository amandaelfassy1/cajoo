import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const LandingSocialButton = ({type = 'facebook'}) => {
  const socialName = type === 'facebook' ? 'Facebook' : 'Google';
  const socialLogo =
    type === 'facebook'
      ? require('../../../../assets/facebook.png')
      : require('../../../../assets/google.png');

  return (
    <TouchableOpacity
      style={socialName === 'Facebook' ? styles.button : styles.buttonGoogle}>
      <Image source={socialLogo} style={styles.icon} />
      <Text
        style={
          socialName === 'Facebook'
            ? styles.textButton
            : styles.textButtonGoogle
        }>
        Continuer avec {socialName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: '#1878F3',
    height: 50,
    width: 400,
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonGoogle: {
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 15,
    BorderColor: 'black',
    height: 50,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textButton: {
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
  textButtonGoogle: {
    color: 'black',
    fontFamily: 'Inter-Bold',
  },
});

export default LandingSocialButton;
