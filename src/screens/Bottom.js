import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {BlurView} from '@react-native-community/blur'; // Import BlurView
import LinearGradient from 'react-native-linear-gradient';
import Messages from './Messages';
import Community from './Community';
import Calls from './Calls';
import Settings from './Settings';
import Statusrecord from '../components/Statusrecord';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');
// import { useNavigationState } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

function Bottom() {
  // const route = useRoute();
  // const activeTab = route.name;
  const isMessagesTabFocused = useIsFocused();
  // const navigationState = useNavigationState(state => state);
  // const isMessagesTabActive = navigationState.routes[navigationState.index].name === 'Messages';
  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'transparent']}
        style={styles.blurContainer}>
        <BlurView
          style={styles.absoluteFill}
          blurType="light"
          blurAmount={20} // Adjust the blurAmount to achieve the desired effect
          reducedTransparencyFallbackColor="gray"
        />
      </LinearGradient>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <FontAwesome name="whatsapp" color={'white'} size={34} />
          <Text style={styles.titleText}>WhatsApp</Text>
        </View>
      <View style={{}}>{isMessagesTabFocused && <Statusrecord />}</View>
      </View>
      {/* <View style={{}}>{activeTab === 'Messages' && <Statusrecord />}</View> */}
      {/* <View style={{}}>{isMessagesTabActive && <Statusrecord />}</View> */}
        <Tab.Navigator
          initialRouteName="Messages"
          activeColor="#fff" // Text color when the tab is active
          inactiveColor="#83B1AA" // Text color when the tab is inactive
          barStyle={styles.tabBar} // Background color of the tab bar
        >
          <Tab.Screen
            name="Community"
            component={Community}
            options={{
              tabBarLabel: 'Community',
              tabBarIcon: ({color}) => (
                <FontAwesome name="group" color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={Messages}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({color}) => (
                <MaterialIcons name="chat" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Calls"
            component={Calls}
            options={{
              tabBarLabel: 'Calls',
              tabBarIcon: ({color}) => (
                <Ionicons name="call-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({color}) => (
                <Ionicons name="settings-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // flexDirection: 'row',
    paddingTop: 20,
    // paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:30,
    gap: 7,
  },
  titleText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: '#065E52',
  },
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    right: 0.1,
    height: height * 0.25,
    backgroundColor: 'black',
    // borderBottomLeftRadius: 45,
    // borderBottomRightRadius: 45,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    // borderBottomLeftRadius: 45,
    // borderBottomRightRadius: 45,
    // Adjust additional styling if necessary
  },
});

export default Bottom;
