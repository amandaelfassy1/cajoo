import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Code({code = '', isFocus = false}) {
  return (
    <View
      style={[styles.content, styles.focusCode(code.length === 1 || isFocus)]}>
      <Text style={styles.textCode}>{code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#DDDDDD',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    height: 50,
  },
  textCode: {
    fontFamily: 'Inter-Black',
    textAlign: 'center',
  },
  focusCode: focused => {
    return {
      borderColor: focused ? 'red' : 'transparent',
      borderWidth: 2,
    };
  },
});
