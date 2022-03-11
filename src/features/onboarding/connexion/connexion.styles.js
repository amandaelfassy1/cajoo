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
  text: {
    color: '#504E63',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Obviously-Black',
  },
  subtitle: {
    color: '#504E63',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Inter-Black',
  },

  icon: {
    width: 30,
    bottom: 8,
    height: 30,
    position: 'absolute',
    left: 10,
  },

  inputContainer: {
    backgroundColor: '#dddddd',
    width: width * 0.9,
    height: 45,
    paddingLeft: 60,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  buttonContinuer: {
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
  buttonContinuerDisable: {
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
  textButton: {
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
  textButton1: (myValue1, myvalue2) => {
    return {
      color: myValue1,
      fontSize: myvalue2,
    };
  },
  actif: {
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
  passif: {
    overflow: 'hidden',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    width: 400,
    backgroundColor: 'pink',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
