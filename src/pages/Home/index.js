import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {ImageDummy1, ImageDummy2, ImageDummy3, ImageDummy4} from '../../assets';
import {
  DashboardCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';
import {Gap} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dashboardCardContainer}>
            <Gap width={24} />
            <DashboardCard image={ImageDummy1} />
            <DashboardCard image={ImageDummy2} />
            <DashboardCard image={ImageDummy3} />
            <DashboardCard image={ImageDummy4} />
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
  dashboardCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
