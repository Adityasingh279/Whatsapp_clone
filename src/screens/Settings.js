import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Settinglist from '../components/Settinglist';

const { height, width } = Dimensions.get('screen');

const Settings = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            source={require('../assets/icons/user.png')}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Aditya Singh</Text>
            <Text style={styles.profileStatus}>Status</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/qrcode.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/down.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

       {/* Menu */}
       <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical:10,marginBottom:80}}>
        <Settinglist
          title="Account"
          detail="Security notifications, change number"
          icon={require('../assets/icons/account.png')}
        />
        <Settinglist
          title="Privacy"
          detail="Block contacts, disappearing messages"
          icon={require('../assets/icons/privacy.png')}
        />
        <Settinglist
          title="Avatar"
          detail="Create, edit, profile photo"
          icon={require('../assets/icons/avatar.png')}
        />
        <Settinglist
          title="Chats"
          detail="Theme, wallpaper, chat history"
          icon={require('../assets/icons/chats.png')}
        />
        <Settinglist
          title="Notifications"
          detail="Message, group & call tones"
          icon={require('../assets/icons/notifications.png')}
        />
        <Settinglist
          title="Storage and data"
          detail="Network usage, auto-download"
          icon={require('../assets/icons/storage.png')}
        />
        <Settinglist
          title="App language"
          detail="English (device's language)"
          icon={require('../assets/icons/applanguage.png')}
        />
        <Settinglist
          title="Help"
          detail="Help center, contact us, privacy policy"
          icon={require('../assets/icons/help.png')}
        />
        <Settinglist
          title="Invite a friend"
          // detail="Security notifications, change number"
          icon={require('../assets/icons/invite.png')}
        />
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    height: height * 0.07,
    width: width * 0.17,
  },
  profileInfo: {
    gap: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
  },
  profileStatus: {
    color: 'grey',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  iconImage: {
    height: height * 0.03,
    width: width * 0.08,
    tintColor: '#00826A',
  },
  menuContainer: {
    paddingVertical: 10,
    marginBottom: 80,
  },
});
