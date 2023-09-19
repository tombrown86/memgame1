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
            <Text style={styles.welcometext}>Welcome</Text>
            <Text style={styles.bannertext}>Improve your MEMORY skills</Text> 
            <Text style={styles.smallbannertext}>by playing randomly chosen mini games & tests</Text>
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
    welcometext: {
        fontSize: 20,
        textAlign: 'center'
    },
    bannertext: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center'
    },
    smallbannertext: {
        marginTop: 10,
        fontSize: 15,
        textAlign: 'center'
    },
    recommendtext: {
        marginTop: 14,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 12,
        textAlign: 'center'
    },
    homeouter: {
        flex: 1
    },
    homeinner: {
        backgroundColor: '#E3F2FD',
        flex: 1,
        height: '100%',
        justifyContent: 'center'
    }
})
