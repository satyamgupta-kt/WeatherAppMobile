import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './WeatherCard.styles.js';
import { useSelector } from 'react-redux';
import { convertTemp } from '../../../utils/helper.js';
import { getWeatherIcon } from '../../../utils/helper.js';

const WeatherCard = ({ item }) => {
  const temperatureUnit = useSelector(state => state.app.temperatureUnit);
  return (
    <View style={styles.card}>
      <Text style={styles.city}>
        {item?.city}, {item?.country}
      </Text>
      <Text style={styles.temp}>{Math.round(convertTemp(item?.temp, temperatureUnit))}°{temperatureUnit}</Text>
      <Image source={getWeatherIcon(item?.weatherCode)} style={styles.icon} />
    </View>
  );
};


export default WeatherCard;