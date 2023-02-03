


import React from "react";
import {Text, View, Image} from "react-native"
import { styles } from "./styles";
import Button from "../../../components / Button";


const Splash = () => {
    return (
        <View style={styles.container}>
            <Image style={{resizeMode:'contain', height:209, width:357, top:144, left:9}} source={require('../../../assets/splash_image.png')}/>
        <Text style={styles.title}>You'll Find All you need<Text style={styles.innerTitle}> HERE!</Text></Text>
       <Button title="Sign Up"/>
      </View>
    )
}

export default Splash