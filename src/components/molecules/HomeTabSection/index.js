import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListA from '../ItemListA';
import {
  ImageDummy1,
  ImageDummy2,
  ImageDummy3,
  ImageDummy4,
} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const New = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListA image={ImageDummy1} />
        <ItemListA image={ImageDummy2} />
        <ItemListA image={ImageDummy3} />
        <ItemListA image={ImageDummy4} />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListA image={ImageDummy4} />
        <ItemListA image={ImageDummy1} />
        <ItemListA image={ImageDummy2} />
        <ItemListA image={ImageDummy3} />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListA image={ImageDummy3} />
        <ItemListA image={ImageDummy2} />
        <ItemListA image={ImageDummy4} />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: New,
  2: Popular,
  3: Recommended,
});
const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
