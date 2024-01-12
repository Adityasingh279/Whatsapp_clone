import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Tabheading = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}>
        <Text style={{fontSize: 25, color: '#000', fontWeight: '500'}}>
          {props.title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 18}}>
          <TouchableOpacity>
            <Feather name="search" color={'#000'} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color={'#000'} size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tabheading;

const styles = StyleSheet.create({});
