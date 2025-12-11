import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import styles from './SearchBar.styles.js';
import { useNavigation } from '@react-navigation/native';

const SearchBar = ({ searchKey, setSearchKey, searchResults }) => {
  const navigation = useNavigation();
  return (
    <View style={{position: 'relative'}}>
      <View style={styles.container}>
        <Image source={require('../../../assests/SearchIcon.png')} />
        <TextInput
          placeholder="Search city or place..."
          placeholderTextColor="#888"
          style={styles.input}
          value={searchKey}
          onChangeText={t => {
            setSearchKey(t);
          }}
        />
      </View>
      {Array.isArray(searchResults) && searchResults.length > 0 && (
        <View style={styles.resultsContainer}>
          {searchResults.map((item) => (
            <TouchableOpacity key={item.id} style={styles.resultItem} onPress={() => navigation.navigate('WeatherDetails', { weather: item })}>
              <Text style={styles.resultText}>
                {item.city}, {item.country}
              </Text>
              <Image source={require('../../../assests/ChevronRight.png')} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SearchBar;
