import React from 'react';
import { Image, StyleSheet, ImageBackground, View } from 'react-native';


function Welcomescreen(props) {
    
    return (
       <ImageBackground
        style={styles.background}
        source={require("../assets/background.png")}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
           
            <View style={styles.loginButton}></View>
            <View style={styles.regButton}></View>
       </ImageBackground>

       
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center",
    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: "indianred",
    },
    regButton:{
        width: '100%',
        height: 70,
        backgroundColor: "darkred",
    },
    logo:{
        width: 400,
        height: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    }

})

export default Welcomescreen;