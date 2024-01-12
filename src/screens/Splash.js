import {
    Dimensions,
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React, {useEffect} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import {SafeAreaView} from 'react-native-safe-area-context';
  
  const {height, width} = Dimensions.get('window');
  // console.log(window);
  const Splash = () => {
    const navigation = useNavigation();
    //timer
    useEffect(() => {
      // getProfileDataHandler();
      const timer = setTimeout(() => {
        navigation.navigate('Location');
      }, 3000);
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <ImageBackground
          source={require('../assets/images/Splash.png')}
          style={{
            height: height,
            width: width,
            justifyContent: 'center',
          }}
        />
      </SafeAreaView>
    );
  };
  
  export default Splash;
  
  const styles = StyleSheet.create({
    logo: {
      marginTop: height * 0.12,
      width: width * 0.3,
      height: height * 0.3,
      alignSelf: 'center',
    },
  });
  