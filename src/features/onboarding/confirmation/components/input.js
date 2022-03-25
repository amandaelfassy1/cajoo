import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Code from './code';

export default function Input({code, setCode, position, ...props}) {
  return (
    <View style={styles.container}>
      <Code code={code[0]} isFocus />
      <Code code={code[1]} />
      <Code code={code[2]} />
      <Code code={code[3]} />
      <Code code={code[4]} />
      <Code code={code[5]} />
      <TextInput
        keyboardType="numeric"
        {...props}
        style={styles.input}
        value={code}
        onChangeText={setCode}
        autoFocus={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    position: 'absolute',
    height: 50,
    width: '100%',
    opacity: 0,
    textAlign: 'center',
  },
});
