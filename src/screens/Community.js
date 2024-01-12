import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const Community = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <Image
        source={require('../assets/images/community.png')}
        style={{height: height * 0.18, width: width * 0.6, margin:30}}
        resizeMode='contain'
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#000',
          marginBottom: 10,
        }}>
        Introducing Communities
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          color: 'grey',
          lineHeight: 22,
        }}>
        Easily organize your related groups and send{'\n'}announcements. Now,
        your communities, like{'\n'} neighborhoods or schools, can have their
        own space.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#00826A',
          paddingHorizontal: 70,
          borderRadius: 30,
          paddingVertical: 10,
          marginTop: 40,
        }}>
        <Text style={{fontSize: 14, color: '#fff', fontWeight: '500'}}>
          Start your Community
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({});
