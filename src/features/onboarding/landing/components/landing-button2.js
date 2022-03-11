import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const LandingButton2 = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.textButton2}>Découvrir l'app</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  textButton2: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'red',
    fontFamily: 'Inter-Bold',
  },
});

export default LandingButton2;
