import React, { useState, useRef } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import Tabheading from '../components/Tabheading';
import Messagerecord from '../components/Messagerecord';
import Statusrecord from '../components/Statusrecord';

const { height, width } = Dimensions.get('screen');

const ChatsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Tabheading title="Chats" />
      <Messagerecord />
    </View>
  );
};

const GroupsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Tabheading title="Groups" />
      <Messagerecord />
    </View>
  );
};

const Messages = () => {
  const [selectedTab, setSelectedTab] = useState('Chats');
  const translateX = useRef(new Animated.Value(0)).current;

  const switchTab = (tab) => {
    Animated.spring(translateX, {
      toValue: tab === 'Chats' ? 0 : width / 2,
      useNativeDriver: false,
    }).start();
    setSelectedTab(tab);
  };

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'transparent']}
        style={styles.blurContainer}>
        <BlurView
          style={styles.absoluteFill}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="gray"
        />
      </LinearGradient>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <Animated.View
            style={[
              styles.tab,
              {
                backgroundColor:
                  selectedTab === 'Chats' ? '#fff' : 'transparent',
                borderWidth: selectedTab === 'Chats' ? 0.15 : 0,
              },
            ]}>
            <TouchableOpacity onPress={() => switchTab('Chats')}>
              <Text style={styles.tabText}>Chats</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              styles.tab,
              {
                backgroundColor:
                  selectedTab === 'Groups' ? '#fff' : 'transparent',
                borderWidth: selectedTab === 'Groups' ? 0.15 : 0,
              },
            ]}>
            <TouchableOpacity onPress={() => switchTab('Groups')}>
              <Text style={styles.tabText}>Groups</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={styles.contentContainer}>
          {selectedTab === 'Chats' ? <ChatsScreen /> : <GroupsScreen />}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#606060',
  },
  contentContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  screenContainer: {
    flex: 1,
    padding: 20,
  },
});

export default Messages;
