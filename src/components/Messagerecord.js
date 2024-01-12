import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Chatsdata from '../constants/Chatsdata';
const {height, width} = Dimensions.get('screen');

const Messagerecord = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Chatsdata}
        // maxHeight={550}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 12,
              // paddingHorizontal: 10,
              alignItems: 'center',
              borderBottomWidth: 0.2,
              gap: 10,
            }}>
            <TouchableOpacity style={{}}>
              <Image
                source={item.img}
                style={{
                  height: height * 0.07,
                  width: width * 0.14,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: width * 0.7,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
              }}>
              <View>
                <Text style={{fontSize: 17, fontWeight: '500', color: '#000'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 15, color: '#090909'}}>
                  {item.message}
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000',
                    // marginRight: 10,
                  }}>
                  {item.Date}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.Id.toString()}
      />
    </View>
  );
};

export default Messagerecord;

const styles = StyleSheet.create({});
