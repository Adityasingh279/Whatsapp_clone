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
import Callsdata from '../constants/Callsdata';
const {height, width} = Dimensions.get('screen');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Callsrecord = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
          gap: 10,
        }}>
        <View
          style={{
            backgroundColor: 'green',
            borderRadius: 30,
            width: width * 0.105,
            height: height * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name="chain" color={'#000'} size={22} />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 17,
              color: '#000',
              fontWeight: '500',
            }}>
            Create Call Link
          </Text>
          <Text
            style={{
              color: '#606060',
            }}>
            Share a link for your WhatsApp call
          </Text>
        </View>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          color: '#000',
          fontWeight: '500',
          marginVertical: 10,
          marginTop: 20,
        }}>
        Recent
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Callsdata}
          //   maxHeight={440}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingVertical: 12,
                padding: 10,
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
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <View style={{gap: 5, marginBottom: 5}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '500',
                      color: item.status === 'Missed' ? 'red' : '#000',
                    }}>
                    {item.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    {item.status === 'Incoming' ? (
                      <MaterialCommunityIcons
                        name="phone-incoming"
                        color={'#000'}
                        size={22}
                      />
                    ) : item.status === 'Outgoing' ? (
                      <MaterialCommunityIcons
                        name="phone-outgoing"
                        color={'#000'}
                        size={22}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="phone-missed"
                        color={'#000'}
                        size={22}
                      />
                    )}
                    <Text style={{fontSize: 15, color: '#090909'}}>
                      {item.status}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#000',
                      marginRight: 10,
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
    </ScrollView>
  );
};

export default Callsrecord;

const styles = StyleSheet.create({});
