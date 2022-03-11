import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  simple: {
    marginBottom: 20,
    fontSize: 15,
    color: '#504E63',
    fontFamily: 'Obviously-Black',
  },
  imgButton: {
    width: 20,
    height: 20,
  },
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

export default styles;
