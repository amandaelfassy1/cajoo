import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

class ButtonTel extends React.Component {
  render() {
    return (
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.boutton1} onPress={this.props.onPress}>
          <Image
            style={styles.imgButton}
            source={require('../../../../assets/call.png')}
          />
          <Text style={styles.textButton1}>Avec votre numéro !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imgButton: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  boutton1: {
    overflow: 'hidden',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    width: 400,
    backgroundColor: '#FF3538',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton1: {
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
});

export default ButtonTel;
