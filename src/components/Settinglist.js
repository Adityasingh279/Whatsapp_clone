import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const Settinglist = props => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 15}}>
      <View>
        <Image
          source={props.icon}
          style={{
            height: height * 0.025,
            width: width * 0.07,
            tintColor: 'grey',
            paddingHorizontal: 30,
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={{fontSize: 16, color: '#000'}}>{props.title}</Text>
        <Text style={{color:'grey'}}>{props.detail}</Text>
      </View>
    </View>
  );
};

export default Settinglist;

const styles = StyleSheet.create({});
