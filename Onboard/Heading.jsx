import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const Heading = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        headingFont: require('../assets/font/poppins.ttf'), // Add a unique heading font
        paragraphFont: require('../fonts/bold.ttf'), // Add a unique paragraph font
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Return a loading indicator if fonts are not yet loaded.
  }

  // Fonts are loaded, render the component.
  return (
    <View>
      <LinearGradient
        colors={['#ff9100', '#ff3838']}
        style={styles.gradientBackground}
      >
        <Text style={styles.headingText}>Pirates' Haven</Text>
      </LinearGradient>

      <Text style={styles.paragraphText}>
        Welcome to Pirates' Haven, the ultimate movie app designed exclusively
        for all the pirate movie enthusiasts out there! With Pirates' Haven,
        embark on an extraordinary cinematic journey where you can download
        adventurous pirate tales right at your fingertips.
        your favorite pirate-themed movies and enjoy live streaming of
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 4,
    top:410,
    borderRadius:100,
  },
  headingText: {
    fontSize: 40,
    fontFamily: 'headingFont',
    color: 'white',
    textTransform: "capitalize", // Uppercase the heading text
  },
  paragraphText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    paddingHorizontal: 20, // Add some padding to the paragraph
    lineHeight: 26, // Adjust the line height for better readability
    top:420,
    fontWeight:'300'
   },
});

export default Heading;
