import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    height: height,
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '85%',
    height: '21%',
  },
  titre: {
    marginTop: 15,
    color: '#504E63',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Obviously-Black',
  },

  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 10,
  },
  textButton2: {
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
  textButton1: {
    color: 'white',
    fontFamily: 'Inter-Black',
    fontSize: 17,
    textTransform: 'uppercase',
  },

  boutton1: {
    overflow: 'hidden',
    borderRadius: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
});

export default styles;
