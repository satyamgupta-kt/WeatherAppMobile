import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, ScrollView, Image} from "react-native";
import {useRoute} from '@react-navigation/native';
import styles from "./WeatherDetail.styles.js";
import globalStyles from "../../utils/global.styles.js";
import {useNavigation} from '@react-navigation/native';
import {getWeatherDescription, getNext24Hours, convertTemp, convertWind, getWeatherIcon} from "../../utils/helper.js";
import { useDispatch, useSelector } from "react-redux";
import { updateFavourites } from "../../slices/AppSlice.js"

const WeatherDetailsScreen = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.app?.favourites);
  const temperatureUnit = useSelector(state => state.app.temperatureUnit);
  const windUnit = useSelector(state => state.app.windUnit);
  const navigation = useNavigation();
  const route = useRoute();
  const {weather} = route.params;
  const [forecast, setForecast] = useState();
  const fetchWeather = async(lat,lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`
    + `&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation_probability,precipitation,weathercode`
    + `&daily=temperature_2m_min,temperature_2m_max,precipitation_sum,sunrise,sunset,weathercode`
    + `&current_weather=true`
    + `&timezone=auto`;
    const resp = await fetch(url);
    const data = await resp.json();
    const current1 = data.current_weather;
    const hourly = data.hourly;
    const daily = data.daily;
    const result = {
      current: {
        temp: current1.temperature,
        feelsLike: hourly.apparent_temperature[0],
        humidity: hourly.relative_humidity_2m[0],
        windSpeed: current1.windspeed,
        precipitationProb: hourly.precipitation_probability[0],
      },
      daily: daily.time.map((date, idx) => ({
        date,
        minTemp: daily.temperature_2m_min[idx],
        maxTemp: daily.temperature_2m_max[idx],
        precipitation: daily.precipitation_sum[idx],
        weatherCode: daily.weathercode[idx],
        sunrise: daily.sunrise[idx],
        sunset: daily.sunset[idx],
      })),
      hourly: hourly.time
        .map((time, idx) => ({
          time,
          temp: hourly.temperature_2m[idx],
          precipitation: hourly.precipitation[idx],
          weatherCode: hourly.weathercode[idx],
        }))
        .slice(0, 24),
    };
    return result;
  };
  useEffect(() => {
    if (weather && weather.latitude && weather.longitude) {
      fetchWeather(weather.latitude, weather.longitude)
        .then(data => {
          setForecast(data);
        })
        .catch(error => {
          console.error('Error fetching detailed weather data:', error);
        });
    }
  },[])
  const [activeTab, setActiveTab] = useState("Today");
  const hourlyData = getNext24Hours(forecast?.hourly || []);
  const isFavorited = favourites?.some(fav=>fav.id===weather.id);

  const handleStarUnstar = () => {
    if(!weather) return;
    let updatedFavourites;
    if (isFavorited) {
      updatedFavourites = favourites?.filter(fav => fav.id !== weather.id);
    } else {
      updatedFavourites = [...favourites, {
        ...weather,
        temp: forecast?.current?.temp,
        weatherCode: forecast?.daily[0]?.weatherCode,
      }];
    }
    dispatch(updateFavourites(updatedFavourites));
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Image source={require("../../assests/ChevronLeft.png")}/>
        </TouchableOpacity>
        <Text style={styles.cityName}>{weather?.city},{weather?.country}</Text>
        <TouchableOpacity onPress={() => handleStarUnstar()}>
          <Image source={!isFavorited ? require("../../assests/StarIcon.png") : require("../../assests/StarRateHalf.png")}/>
        </TouchableOpacity>
      </View>
      <View style={styles.mainCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image source={getWeatherIcon(forecast?.daily[0]?.weatherCode)} style={styles.icon} />
          <View style={{ flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.temperature}>{Math.round(convertTemp(forecast?.current.temp, temperatureUnit))}°{temperatureUnit}</Text>
            <Text style={styles.subText}>{getWeatherDescription(forecast?.daily[0]?.weatherCode)}</Text>
            <Text style={styles.feelsText}>Feels like {Math.round(convertTemp(forecast?.current?.feelsLike, temperatureUnit))}°{temperatureUnit}</Text>
        </View>
        </View>
      </View>
      <View style={styles.statsRow}>
        {StatItem("Wind", `${Math.round(convertWind(forecast?.current?.windSpeed, windUnit))}` ,require("../../assests/Air.png"), windUnit)}
        {StatItem("Humidity", `${forecast?.current?.humidity}%` , require("../../assests/Humidity.png"), windUnit)}
        {StatItem("Chance of rain", `${forecast?.current?.precipitationProb}%`, require("../../assests/Rainy.png"), windUnit)}
      </View>
      <View style={styles.tabs}>
        {["Today", "Hourly", "Daily"].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={{ borderWidth: 1,
            borderColor: '#DDDFE3', width: 100, alignItems: 'center', borderTopWidth: 0, }}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator}/>}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}  nestedScrollEnabled={true}>
        {activeTab === "Today" && (
          <>
            <View style={styles.sunRow}>
              {SunCard("Sunrise", forecast?.daily[0].sunrise, require("../../assests/SunSet.png"))}
              {SunCard("Sunset", forecast?.daily[0].sunset, require("../../assests/SunSet.png"))}
            </View>
            <View style={styles.overviewCard}>
              <Text style={styles.overviewTitle}>Today overview</Text>
              <Text style={styles.overviewText}>
                Min {Math.round(convertTemp (forecast?.daily[0]?.minTemp, temperatureUnit))}°{temperatureUnit} / Max {Math.round(convertTemp(forecast?.daily[0]?.maxTemp, temperatureUnit))}°{temperatureUnit}. Expect {getWeatherDescription(forecast?.daily[0]?.weatherCode)}.
              </Text>
            </View>
          </>
        )}
        {activeTab === "Hourly" && (
          <>
            <ScrollView horizontal showsHorizontalScrollIndicator>
              {hourlyData?.map((hour, idx) => (
                <View key={idx} style={styles.hourCard}>
                  <Text style={styles.hourTime}>{hour.time?.split("T")[1].slice(0, 5)}</Text>
                  <Image source={getWeatherIcon(hour.weatherCode)} style={styles.hourIcon}/>
                  <Text style={styles.hourTemp}>{Math.round(convertTemp(hour.temp, temperatureUnit))}°{temperatureUnit}</Text>
                </View>
              ))}
            </ScrollView>
          </>
        )}
          {activeTab === "Daily" && (
          <>
            <View style={styles.dailyContainer}>
                {forecast?.daily?.map((day, idx) => {
                  const date = new Date(day.date);
                  const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
                  return (
                    <View key={idx} style={styles.dailyRow}>
                      <Text style={styles.dailyDay}>{dayName}</Text>
                      <Image
                        source={getWeatherIcon(day.weatherCode)}
                        style={styles.hourIcon}
                      />
                      <Text style={styles.dailyTemp}>
                        {Math.round(convertTemp(day.minTemp, temperatureUnit))}°{temperatureUnit} / {Math.round(convertTemp(day.maxTemp, temperatureUnit))}
                        °{temperatureUnit}
                      </Text>
                      <Text style={styles.dailyRain}>
                        {day.precipitation} mm
                      </Text>
                    </View>
                  );})}
              </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const StatItem = (label, value, icon, windUnit) => {
  return (
  <View style={styles.statItem}>
    <Image source={icon} style={styles.statIcon} />
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value} {(label === 'Wind' && windUnit) ? windUnit : ''}</Text>
  </View>
)};

const SunCard = (label, time, icon) => (
  <View style={styles.sunCard}>
    <Image source={icon} style={styles.sunIcon} />
    <Text style={styles.sunLabel}>{label}</Text>
    <Text style={styles.sunTime}>{time?.split("T")[1].slice(0, 5)}</Text>
  </View>
);

export default WeatherDetailsScreen;
