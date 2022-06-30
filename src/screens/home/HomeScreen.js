import React, {useState, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import HomeHeaderView from './components/HomeHeaderView';
import Colors from '../../res/Colors';
import Sizes from '../../res/Sizes';
import {screenKeys, storageKeys} from '../../res/TypeKeys';
import storageService from '../../services/StorageService';
import {useFocusEffect} from '@react-navigation/native';
import MovieItem from '../search/components/MovieItem';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getFavData();
    }, []),
  );

  const getFavData = async () => {
    const favData = await storageService.getItem(storageKeys.favoriteData);
    if (favData) {
      setData(favData);
    }
  };

  const onSearchPress = () => {
    navigation.navigate(screenKeys.search, {favoriteData: data});
  };

  const renderMovieItem = ({item}) => {
    return <MovieItem key={item.id} item={item} isHome={true} />;
  };

  const keyExtractorItem = item => item.id.toString();

  return (
    <View style={styles.homeContainer}>
      <HomeHeaderView onSearchPress={onSearchPress} />
      <View style={styles.homeBodyContainer}>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={data}
          numColumns={3}
          renderItem={renderMovieItem}
          keyExtractor={keyExtractorItem}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  homeBodyContainer: {
    flex: 1,
    backgroundColor: Colors.primary2,
    borderTopLeftRadius: Sizes.homeTopMargin,
    borderTopRightRadius: Sizes.homeTopMargin,
    marginTop: -Sizes.homeTopMargin,
    paddingTop: Sizes.space12,
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: Sizes.space10,
    paddingBottom: Sizes.space10,
  },
});
