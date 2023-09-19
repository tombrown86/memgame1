/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {useRef, useEffect} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Results from './screens/results';


const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  return (
  <Animated.View style={{flex: 1, opacity: fadeAnim}}>
    <View style={{flex: 1}}>
      <Home/>
    </View>
  </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default App;
