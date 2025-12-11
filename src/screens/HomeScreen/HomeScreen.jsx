import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../../components/homeScreen/SearchBar/SearchBar';
import WeatherCard from '../../components/homeScreen/WeatherCard/WeatherCard';
import styles from './HomeScreen.styles.js';
import globalStyles from '../../utils/global.styles.js';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchKey, setSearchKey] = useState('');
  const [debounecedSearchKey, setDebouncedSearchKey] = useState(searchKey);
  const [searchResults, setSearchResults] = useState([]);
  const favourites = useSelector(state => state.app?.favourites);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchKey(searchKey);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  },[searchKey])

  useEffect(() => {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${debounecedSearchKey}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results?.map((res) => {
          return {
            id: res.id,
            city: res.name,
            country: res.country_code,
            latitude: res.latitude,
            longitude: res.longitude,
          }
        })
        setSearchResults(results);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  },[debounecedSearchKey]);

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SkyCast</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../../assests/SettingsIcon.png')}
          />
        </TouchableOpacity>
      </View>

      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} searchResults={searchResults}/>

      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favorites</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Image
              source={require('../../assests/ChevronRight.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites?.map(item => (
            <TouchableOpacity key={item.id} onPress={()=> navigation.navigate('WeatherDetails', { weather: item })}>
               <WeatherCard  item={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.footerText}>Type a city name to search</Text>
      </View>
    </ScrollView>
  );
}