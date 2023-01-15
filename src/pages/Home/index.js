import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  DashboardCard,
  Gap,
  HomeProfile,
  HomeTabSection,
} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dashboarCardContainer}>
            <Gap width={24} />
            {food.map(itemFood => {
              return (
                <DashboardCard
                  key={itemFood.id}
                  name={itemFood.name}
                  image={{uri: itemFood.picturePath}}
                  rating={itemFood.rate}
                  onPress={() => navigation.navigate('ItemDetail', itemFood)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  dashboarCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
