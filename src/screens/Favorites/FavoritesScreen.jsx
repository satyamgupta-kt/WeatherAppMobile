import {
  View,
  Text,
  FlatList,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FavoriteCard from "../../components/FavoriteScreen/FavoriteCard/FavoriteCard";
import { updateFavourites } from "../../slices/AppSlice.js"
import styles from "./FavoritesScreen.styles.js";
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.app.favourites || []);

  const removeFavourite = (id) => {
    Alert.alert(
      "Remove Favorite",
      "Are you sure you want to remove this city?",
      [
        { text: "Cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () =>
            dispatch(updateFavourites(favourites.filter(item => item.id !== id)))
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
              style={{marginTop: 20}}
              source={require('../../assests/ChevronLeft.png')}
          />
         </TouchableOpacity>
         <Text style={styles.header}>Favorites</Text>
      </View>

      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FavoriteCard
            item={item}
            onLongPress={() => removeFavourite(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40, color: "#777" }}>
            No favourites yet.
          </Text>
        }
      />
      <Text style={styles.infoText}>Swipe or long press to remove</Text>
    </View>
  );
};

export default FavoritesScreen;