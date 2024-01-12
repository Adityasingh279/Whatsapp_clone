import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
// import {BlurView} from '@react-native-community/blur'; // Import BlurView
// import LinearGradient from 'react-native-linear-gradient';
import Statusdata from '../constants/Statusdata';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');

const Statusrecord = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      // style={{backgroundColor: '#fff'}}
    >
      <View
        style={{
          //   backgroundColor: '#fff',
          //   borderRadius: 10,
          flexDirection: 'row',
          // alignItems: 'center',
          paddingLeft:20
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            tintColor: '#fff',
            marginRight: 10,
            gap: 3,
          }}>
          <Image
            source={require('../assets/icons/story.png')}
            style={{
              tintColor: '#fff',
              height: height * 0.08,
              width: width * 0.16,
            }}
          />
          <Text style={{fontSize: 17, color: '#fff'}}>Add</Text>
        </TouchableOpacity>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Statusdata}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 20,
                paddingHorizontal: 10 ,
                //   alignItems: 'center',
                //   gap: 10,
              }}>
              <TouchableOpacity style={{}}>
                <Image
                  source={item.img}
                  style={{
                    height: height * 0.08,
                    width: width * 0.16,
                    borderRadius: 30,
                  }}
                />
                <Text style={{fontSize: 17, color: '#fff'}}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.Id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Statusrecord;

const styles = StyleSheet.create({});
