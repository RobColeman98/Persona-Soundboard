import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Audio } from "expo-av";





// const playSong = () => {
//     let audio = new Audio(require("./assets/Mass Destruction.mp3"))
//     audio.play();
// }



export default class Persona3 extends React.Component {
    async componentDidMount () {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: true, 
            playThroughEarpieceAndroid: true
        });

        this.sound = new Audio.Sound();

        const status = {
            shouldPlay: false
        };

        this.sound.loadAsync(require("../assets/Mass-Destruction.mp3"), status, false);
    }
    
    playSound() {
        this.sound.playAsync();
    }
    render() {
        return(
            <View style={styles.container}>
                <Image
            source={require("../src/photos/Persona3.png")}
            style={{ width: 300, height: 200 }}
            />
                <Text style={styles.P3}>Persona 3 feature mainly more of a hip hop/electronica style of music which included songs such as Mass Destruction, Master of Shadow, Master of Tartarus, Iwatodai Dorm and more!</Text>
            
                <Button title="Play Mass Destruction" onPress={this.playSound.bind(this)}></Button>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "mediumblue",
      alignItems: "center",
      justifyContent: "center",
    }, 

    P3:{
        color:"white",
        margin: 20,
        fontSize: 14
    }
})