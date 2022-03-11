import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.band}>
      <TouchableOpacity
        style={styles.bandFlex}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.arrow}
          source={require('../../../assets/left-chevron.png')}
        />
        <Text style={styles.textConnexion}>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  band: {
    backgroundColor: '#FF3538',
    position: 'absolute',
    top: 0,
    height: 80,
    width: '100%',
  },
  bandFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  textConnexion: {
    color: 'white',
    fontFamily: 'Obviously-Black',
    fontSize: 20,
    bottom: 5,
  },
  arrow: {
    width: 30,
    height: 40,
    position: 'absolute',
    left: 10,
    bottom: 5,
  },
});

export default Header;
