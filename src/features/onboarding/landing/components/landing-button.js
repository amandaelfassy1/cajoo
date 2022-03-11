import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LandingButton2 from '../components/landing-button2';

class LandingButton extends React.Component {
  render() {
    return (
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.boutton1}>
          <Text style={styles.textButton1}>Me connecter</Text>
        </TouchableOpacity>
        <LandingButton2 />
      </View>
    );
  }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  boutton1: {
    overflow: 'hidden',
    borderRadius: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton1: {
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
});

export default LandingButton;
