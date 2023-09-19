import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

import HomeImageSVGFile from "../images/chillbraincopy.png"
import { Colors } from 'react-native/Libraries/NewAppScreen'
import StyledButton from '../components/buttons/StyledButton' 


const Home = () => {
  return (
    <View style={styles.homeouter}>
        <View style={styles.homeinner}>
            <Text style={styles.welcometext}>Welcome!</Text>
            <Text style={styles.bannertext}>Improve your MEMORY skills&#8230;</Text> 
            <Text style={styles.smallbannertext}>&#8230;by playing randomly chosen mini brain games!&#8230;</Text>
        </View>
        <View style={styles.homeinner}>
            <Image  style={{ width: '100%', height: 200 }} source={require('../images/chillbraincopy.png')} />
        </View>
        <View style={styles.homeinner}>
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
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "karla"
    },
    bannertext: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: "rubik",
        fontWeight: 'bold'
    },
    smallbannertext: {
        marginTop: 12,
        fontSize: 15,
        fontFamily: "rubik",
        textAlign: 'center'
    },
    recommendtext: {
        marginTop: 14,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: "karla",
        fontStyle: 'italic'
    }
})
