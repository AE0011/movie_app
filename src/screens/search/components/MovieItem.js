import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CText from '../../../components/custom/CText';
import Colors from '../../../res/Colors';
import Sizes from '../../../res/Sizes';
import {windowW} from '../../../res/Global';
import CButtonIcon from '../../../components/custom/CButtonIcon';

const MovieItem = ({item, onFavePress, onIgnorePress, isFav, isHome}) => {
  return (
    <View style={styles.movieItemContainer}>
      <View
        style={[
          styles.movieItemContainer2,
          isHome && styles.movieItemContainer2Home,
        ]}>
        <Image
          source={{uri: item.image}}
          style={styles.movieItemImage}
          resizeMode={'cover'}
        />
        <CText numberOfLines={3} style={styles.movieItemTitle}>
          {item.title + ' ' + item.description}
        </CText>
        {!isHome && (
          <View style={styles.movieItemActionContainer}>
            <CButtonIcon
              style={styles.movieItemAction}
              onPress={() => onFavePress?.(item)}
              name={'heart'}
              size={Sizes.icon20}
              color={isFav ? Colors.secondary4 : Colors.primary3}
            />
            <CButtonIcon
              style={styles.movieItemAction}
              onPress={() => onIgnorePress?.(item.id)}
              name={'skull'}
              size={Sizes.icon20}
              color={Colors.secondary2}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  movieItemContainer: {
    alignSelf: 'center',
    width: (windowW - 2 * Sizes.space10) / 3,
  },
  movieItemContainer2: {
    height: 180,
    // backgroundColor: Colors.bg1,
    borderRadius: Sizes.borderR,
    margin: Sizes.space6,
    overflow: 'hidden',
  },
  movieItemContainer2Home: {
    height: 150,
  },
  movieItemTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 5,
    backgroundColor: '#00000066',
  },
  movieItemImage: {
    height: 150,
    width: '100%',
    borderRadius: Sizes.borderR,
  },
  movieItemActionContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.primary3,
    borderRadius: Sizes.borderR,
  },
  movieItemAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
