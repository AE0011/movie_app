import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Sizes from '../../../res/Sizes';
import Colors from '../../../res/Colors';
import CText from '../../../components/custom/CText';
import Lang from '../../../res/Lang';
import CIcon from '../../../components/custom/CIcon';

const HomeHeaderView = ({onSearchPress}) => {
  return (
    <View style={styles.homeHeaderContainer}>
      <CText style={styles.homeHeaderTitle}>{Lang.homeTitle}</CText>
      <TouchableOpacity
        style={styles.homeHeaderSearchBtn}
        activeOpacity={0.7}
        onPress={onSearchPress}>
        <CIcon name={'search'} color={Colors.text1} size={22} />
        <CText style={styles.homeHeaderSearchTxt}>{Lang.searchHere}</CText>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeaderView;

const styles = StyleSheet.create({
  homeHeaderContainer: {
    width: '100%',
    backgroundColor: Colors.primary1,
    paddingVertical: Sizes.space16,
    paddingBottom: Sizes.space16 + Sizes.homeTopMargin,
  },
  homeHeaderTitle: {
    fontSize: Sizes.font16,
    textAlign: 'center',
  },
  homeHeaderSearchBtn: {
    flexDirection: 'row',
    minHeight: Sizes.buttonH1,
    margin: Sizes.space16,
    marginBottom: 0,
    padding: Sizes.space8,
    alignItems: 'center',
    backgroundColor: Colors.primary3,
    borderRadius: Sizes.borderR,
    borderColor: Colors.borderC2,
    borderWidth: 1,
  },
  homeHeaderSearchTxt: {
    fontSize: Sizes.font13,
    color: Colors.text2,
    textAlign: 'left',
    marginHorizontal: Sizes.space12,
  },
});
