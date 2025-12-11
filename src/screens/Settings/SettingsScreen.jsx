import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setTemperatureUnit, setWindUnit } from '../../slices/AppSlice';
import styles from './Settings.styles';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const temperatureUnit = useSelector(state => state.app.temperatureUnit);
  const windUnit = useSelector(state => state.app.windUnit);

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assests/ChevronLeft.png')} />
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Units</Text>
     
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 16}}>
          <Text style={styles.label}>Temperature:</Text>
          <View style={styles.toggleRow}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                temperatureUnit === 'C' && styles.activeButton,
                {borderTopLeftRadius: 8 , borderBottomLeftRadius: 8}
              ]}
              onPress={() => dispatch(setTemperatureUnit('C'))}
            >
              <Text
                style={[
                  styles.toggleText,
                  temperatureUnit === 'C' && styles.activeText,
                ]}
              >
                °C
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                temperatureUnit === 'F' && styles.activeButton,
                {borderTopRightRadius: 8 , borderBottomRightRadius: 8}
              ]}
              onPress={() => dispatch(setTemperatureUnit('F'))}
            >
              <Text
                style={[
                  styles.toggleText,
                  temperatureUnit === 'F' && styles.activeText,
                ]}
              >
                °F
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
          <Text style={styles.label}>Wind speed:</Text>
          <View style={styles.toggleRow}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                windUnit === 'kmh' && styles.activeButton,
                {borderTopLeftRadius: 8 , borderBottomLeftRadius: 8}
              ]}
              onPress={() => dispatch(setWindUnit('kmh'))}
            >
              <Text
                style={[
                  styles.toggleText,
                  windUnit === 'kmh' && styles.activeText,
                ]}
              >
                km/h
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleButton,
                windUnit === 'mph' && styles.activeButton,
                {borderTopRightRadius: 8 , borderBottomRightRadius: 8}
              ]}
              onPress={() => dispatch(setWindUnit('mph'))}
            >
              <Text
                style={[
                  styles.toggleText,
                  windUnit === 'mph' && styles.activeText,
                ]}
              >
                mph
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>About SkyCast</Text>
        <Text>A simple and accurate weather app.</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
