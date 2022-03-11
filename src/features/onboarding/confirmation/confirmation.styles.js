import React from 'react';

import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: '#504E63',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Obviously-Black',
  },
  main: {
    height: height,
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: 5,
    color: '#504E63',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  },
  inputContainer: {
    flexDirection: 'row',
    width: width - 40,
    marginTop: 25,
  },
  subText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'red',
  },
});

export default styles;
