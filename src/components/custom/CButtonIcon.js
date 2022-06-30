import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CIcon from './CIcon';

const CButtonIcon = ({onPress, style, name, color, size}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.touchableContainer, style]}>
      <CIcon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default CButtonIcon;

const styles = StyleSheet.create({
  touchableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
