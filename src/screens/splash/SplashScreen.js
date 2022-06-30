import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {screenKeys} from '../../res/TypeKeys';
import Colors from '../../res/Colors';
import CText from '../../components/custom/CText';
import Lang from '../../res/Lang';

const SplashScreen = ({navigation}) => {
  const timeoutId = useRef();

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      navigation.replace(screenKeys.home);
    }, 2000);
  }, []);

  return (
    <View style={styles.splashScreenContainer}>
      <CText>{Lang.splashText}</CText>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    backgroundColor: Colors.primary2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
