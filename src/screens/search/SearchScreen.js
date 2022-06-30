import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import CText from '../../components/custom/CText';
import useEffectDelay from '../../components/hooks/useEffectDelay';
import Lang from '../../res/Lang';
import Sizes from '../../res/Sizes';
import apiService from '../../api/APIService';
import Config from '../../res/Config';
import Colors from '../../res/Colors';
import MovieItem from './components/MovieItem';
import storageService from '../../services/StorageService';
import {storageKeys} from '../../res/TypeKeys';

const SearchScreen = ({route}) => {
  const {favoriteData = []} = route.params || {};

  const [movieValue, setMovieValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [favIds, setFavIds] = useState(favoriteData.map(item => item.id));
  const [filteredIds, setFilteredIds] = useState([]);

  const favData = useRef(favoriteData);

  useEffect(() => {
    getFilteredData();
  }, []);

  useEffectDelay(() => {
    if (movieValue.length >= 2) {
      callSearchMovieApi(movieValue);
    } else {
      // setData([]);
    }
  }, [movieValue]);

  const filterData = (_data, _filteredIds) => {
    if (_data.length > 0 && _filteredIds.length > 0) {
      return _data.filter(item => !_filteredIds.includes(item.id));
    } else {
      return _data;
    }
  };

  const getFilteredData = async () => {
    const _filteredIds = await storageService.getItem(storageKeys.filteredIds);
    if (_filteredIds) {
      setFilteredIds(_filteredIds);
      setData(filterData(data, _filteredIds));
    }
  };

  const callSearchMovieApi = async str => {
    setLoading(true);
    const res = await apiService.call(
      Config.api.searchMovie.url + str,
      Config.api.searchMovie.method,
    );
    if (res.success) {
      setData(filterData(res.data.results, filteredIds));
    }
    setLoading(false);
  };

  const onChangeSearch = value => {
    setMovieValue(value);
  };

  const onFavePress = item => {
    const index = favIds.findIndex(i => i === item.id);
    const ids = [...favIds];
    if (index === -1) {
      ids.push(item.id);
      favData.current.push(item);
    } else {
      ids.splice(index, 1);
      favData.current.splice(index, 1);
    }

    storageService.setItem(storageKeys.favoriteData, favData.current);
    setFavIds(ids);
  };

  const onIgnorePress = id => {
    const index = filteredIds.findIndex(item => item === id);
    const ids = [...filteredIds];
    if (index === -1) {
      if (favIds.includes(id)) {
        onFavePress({id: id});
      }
      ids.push(id);
    } else {
      ids.splice(index, 1);
    }

    storageService.setItem(storageKeys.filteredIds, ids);
    setFilteredIds(ids);
    setData(filterData(data, ids));
  };

  const renderMovieItem = ({item}) => {
    return (
      <MovieItem
        key={item.id}
        item={item}
        onFavePress={onFavePress}
        onIgnorePress={onIgnorePress}
        isFav={favIds.includes(item.id)}
      />
    );
  };

  const keyExtractorItem = item => item.id.toString();

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInputS}
        onChangeText={onChangeSearch}
        value={movieValue}
        autoFocus={true}
        placeholder={Lang.searchHere}
        placeholderTextColor={Colors.text3}
      />
      <View style={styles.listViewContainer}>
        {loading ? (
          <CText style={styles.listSearchingTxt}>{Lang.searching}</CText>
        ) : (
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={data}
            numColumns={3}
            renderItem={renderMovieItem}
            keyExtractor={keyExtractorItem}
            extraData={[favIds, filteredIds]}
            keyboardShouldPersistTaps={'always'}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: Colors.primary2,
  },
  searchInputS: {
    height: Sizes.buttonH1,
    margin: Sizes.space16,
    paddingHorizontal: Sizes.space16,
    color: Colors.text1,
    borderColor: Colors.borderC1,
    borderWidth: 1,
    borderRadius: Sizes.borderR,
  },
  listViewContainer: {
    flex: 1,
  },
  listSearchingTxt: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: Sizes.space10,
    paddingBottom: Sizes.space10,
  },
});
