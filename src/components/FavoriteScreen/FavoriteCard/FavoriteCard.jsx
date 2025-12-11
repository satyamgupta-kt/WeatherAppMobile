import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./FavoriteCard.styles";
import {getWeatherDescription, getWeatherIcon} from '../../../utils/helper'
import { useSelector } from "react-redux";
import { convertTemp } from "../../../utils/helper";

const FavoriteCard = ({ item, onLongPress }) => {
  const temperatureUnit = useSelector(state => state.app.temperatureUnit);

  return (
    <TouchableOpacity
      style={styles.card}
      onLongPress={onLongPress}
      delayLongPress={500}
    >
      <View>
        <Text style={styles.city}>{item.city}, {item.country}</Text>
        <Text style={styles.temp}>{convertTemp(item.temp)}°{temperatureUnit}</Text>
        <Text style={styles.desc}>{getWeatherDescription(item.weatherCode)}</Text>
      </View>
      <Image
        source={getWeatherIcon(item.weatherCode)}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default FavoriteCard;
