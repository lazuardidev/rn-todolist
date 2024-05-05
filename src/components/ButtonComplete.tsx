import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ButtonComplete = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="button-complete"
        style={styles.button}
        onPress={onPress}>
        <Ionicons name="checkmark-done" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 120,
    right: 20,
  },
  button: {
    backgroundColor: 'purple',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
