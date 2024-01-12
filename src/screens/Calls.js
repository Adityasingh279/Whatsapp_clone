import React, { useState, useRef } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Tabheading from '../components/Tabheading';
import Callsrecord from '../components/Callsrecord';

const { height, width } = Dimensions.get('screen');

const AllScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Tabheading title="Calls" />
      <Callsrecord />
    </View>
  );
};

const MissedScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Tabheading title="Calls" />
      <Callsrecord />
    </View>
  );
};

const Calls = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const translateX = useRef(new Animated.Value(0)).current;

  const switchTab = (tab) => {
    Animated.spring(translateX, {
      toValue: tab === 'All' ? 0 : width / 2,
      useNativeDriver: false,
    }).start();
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Animated.View
          style={[
            styles.tab,
            {
              backgroundColor: selectedTab === 'All' ? '#fff' : 'transparent',
              borderWidth: selectedTab === 'All' ? 0.15 : 0,
            },
          ]}>
          <TouchableOpacity onPress={() => switchTab('All')}>
            <Text style={styles.tabText}>All</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === 'Missed' ? '#fff' : 'transparent',
              borderWidth: selectedTab === 'Missed' ? 0.15 : 0,
            },
          ]}>
          <TouchableOpacity onPress={() => switchTab('Missed')}>
            <Text style={styles.tabText}>Missed</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'All' ? <AllScreen /> : <MissedScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    borderRadius: 100,
    borderWidth: 0.1,
    marginTop: 20,
    padding: 3,
    marginHorizontal: 30,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
});

export default Calls;
