import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../res/Colors';
import Sizes from '../../res/Sizes';
import Fonts from '../../res/Fonts';

const CText = ({style, bold, children, ...props}) => {
  return (
    <Text
      style={[styles.textNormalStyle, bold && styles.textBoldStyle, style]}
      {...props}>
      {children}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({
  textNormalStyle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.font12,
    color: Colors.text1,
    textAlign: 'left',
  },
  textBoldStyle: {
    fontFamily: Fonts.bold,
  },
});
