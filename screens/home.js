import { Dimensions, Image,Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState }  from 'react'
import Title from '../components/title'

import HomeImageSVGFile from "../images/chillbraincopy.png"
import { Colors } from 'react-native/Libraries/NewAppScreen'
import StyledButton from '../components/buttons/StyledButton' 
//import Animated, { FadeIn, FadeOut } from  'react-native-reanimated';






const Home = () => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [fadeAnim2] = useState(new Animated.Value(0));
    const [bounceAnim] = useState(new Animated.Value(150));

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            delay: 500,
            useNativeDriver:true
        }).start();
    }, []);
    React.useEffect(() => {
        Animated.timing(fadeAnim2, {
            toValue: 1,
            duration: 2000,
            delay: 500,
            useNativeDriver:true
        }).start();
    }, []); 
    React.useEffect(() => {
        Animated.spring(bounceAnim, {
            toValue:-50,
            stiffness:2,
            damping: 1,
            mass: 10,
            backgroundColor: "transparent",
            useNativeDriver:true
          }).start();
    }, []);
    
 

  return (
    <View style={styles.homeouter}>
        <View style={styles.homeinner}>
            <Text style={styles.welcometext}>Welcome!</Text>
            <Animated.Text style={[styles.bannertext, {
                    opacity: fadeAnim,
                  }]}>Improve your MEMORY skills</Animated.Text> 
            <Animated.Text style={[styles.smallbannertext, {
                    opacity: fadeAnim2,
                  }]}>by playing randomly chosen mini brain games!</Animated.Text>
        </View>
        <View style={styles.homeinner}>
            <Animated.Image style={[{ width: '100%', height: 200 }, {transform:[{translateY:bounceAnim}]}]} source={require('../images/chillbraincopy.png')}></Animated.Image>
        
            <StyledButton text="Start playing now"></StyledButton>
            <Text style={styles.recommendtext}>We recommend playing a number of these mini-games each day, to help keep your short term working memory tip top!</Text>
        </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeouter: {
        flex: 1
    },
    homeinner: {
        backgroundColor: '#E3F2FD',
        flex: 1,
        height: '100%',
        justifyContent: 'center'
    },
    welcometext: {
        marginTop: -50,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "karla"
    },
    bannertext: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: "rubik",
        fontWeight: 'bold',
        opacity: 0
    },
    smallbannertext: {
        marginTop: 12,
        fontSize: 15,
        fontFamily: "rubik",
        textAlign: 'center',
        opacity: 0
    },
    recommendtext: {
        marginTop: 17,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
        textAlign: 'center',
        fontFamily: "karla",
        fontStyle: 'italic'
    }
})
