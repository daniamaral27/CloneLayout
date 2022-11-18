// import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, TextInput, Image } from 'react-native';
//import { styles } from './styles';
import amazonLogo from "./assets/amazon_logo.png";
import primeLogo from "./assets/prime_video.png";
// import reactCloud from "./assets/favicon.png";


const Home =() => {
    return (
        <View style = {styles.container}>
             <>
               <View style={styles.header}></View>
               <Image source={amazonLogo} style={{width:150, height: 50, alignSelf: 'center'}}/>
               <Image source={primeLogo} style={{flexWrap: 'wrap', width:150, height: 50, alignSelf: 'center'}}/>
             </>

            
<View style = {styles.category}>
<TouchableOpacity>
    <Text style = {styles.categoryText}>Home</Text>
</TouchableOpacity>
<TouchableOpacity>
    <Text style = {styles.categoryText}>TV Shows</Text>
</TouchableOpacity>
<TouchableOpacity>
    <Text style = {styles.categoryText}>Movies</Text>
</TouchableOpacity>
<TouchableOpacity>
    <Text style = {styles.categoryText}>Kids</Text>
</TouchableOpacity>

</View>



</View>


)
};
     

const styles = StyleSheet.create ({
    container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
    },
    
    header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
    
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBotton: 15,
        },
        
        categoryText: {
        fonteSize: 14,
        fontWeight: "700",
        color: "#FFF",
        },
     
    

},

});

export default Home