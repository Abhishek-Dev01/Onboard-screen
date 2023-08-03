import React, { useRef, useEffect } from 'react';
import { View,  Animated, StyleSheet } from 'react-native';
import { Images } from '../config/Images';

const TopComp = () => {
    const translateYAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      animateUpDown();
    }, []);
  
    const animateUpDown = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateYAnim, {
            toValue: -50, // Move the image up by 50 units
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(translateYAnim, {
            toValue: 0, // Move the image back to its original position
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };
  
  
  return (
    <View style={styles.container}> 
        <Animated.Image
    source={Images.svg} // Replace 'yourImage' with the appropriate image source
    style={[styles.image, { transform: [{ translateY: translateYAnim }] }]}
    resizeMode="contain" // Choose an appropriate resizing mode based on your image
  />
    </View>
  )
}

export default TopComp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    imageContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Use 'rgba()' to set the background color with opacity
        borderRadius: 10, // Add borderRadius for a rounded corner effect (optional)
      },
      image: {
        width: 400,
        maxHeight: 300,
        marginTop:500,
      }
    });
