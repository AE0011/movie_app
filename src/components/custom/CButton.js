import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CText from './CText';
import Sizes from '../../res/Sizes';

const CButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.cButtonStyle, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <CText style={styles.cButtonTitle}>{title}</CText>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  cButtonStyle: {},
  cButtonTitle: {
    fontSize: Sizes.font14,
  },
});
