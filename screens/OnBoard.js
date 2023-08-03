import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import TopComp from '../Onboard/TopComp';
import Heading from '../Onboard/Heading';
import { Images } from '../config/Images';
import { useNavigation } from '@react-navigation/native';

const OnBoard = () => {
const navigation = useNavigation();



  return (
    <View>
      <Image
        source={Images.welcome}
        style={{ height: '400%', width: '100%', position: 'absolute', justifyContent:'flex-end' }}
      />
      <TopComp />
      <Heading />

      <View style={styles.container}>
        <Button
          title="Let's Go"
          type="clear"
          onPress={()=> navigation.navigate("Home")}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      
      </View>
    </View>
  );
};
export default OnBoard;

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    bottom: -480,
  },
  buttonStyle: {
    backgroundColor: '#FF5733', // Customize the button background color
    borderRadius: 90, // Customize the button border radius
    paddingVertical: 10, // Customize the vertical padding
    paddingHorizontal: 50 // Customize the horizontal padding
  },
  buttonTitleStyle: {
    color: '#FFFFFF', // Customize the button title color
    fontSize: 25, // Customize the button title font size
    fontFamily: 'Roboto', // Customize the button title font family
    // Add more styles as needed
  },
});
