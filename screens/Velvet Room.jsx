import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Audio } from "expo-av";

export default class Persona4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: null,
      setSound: null,
    };

    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
  }

  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    });
  }

  async playSong() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/The-Poem-of-Everyone’s-Souls.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/The-Poem-of-Everyone’s-Souls.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  // Rivers in the Desert

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../src/photos/Igor.png")}
          style={{ width: 300, height: 200 }}
        />
        
        <Text style={styles.Bonus}>Bonus Section!</Text>

        <Text style={styles.Velvet}>
          The Velvet Room is the room where players go to fuse personas to get
          stronger in battle. It features the same theme for all of the Persona
          games as the owner of the room, Igor, and his attendent( Which is a
          different attendent in each of the games in the series ) guides you along
          your journey.
        </Text>

        <Button
          title="Play Velvet Room theme"
          onPress={this.playSong}
          color="white"
        ></Button>

        <View style={styles.pauseButton}>
          <Button
            title="Pause Song"
            onPress={this.pauseSong}
            color="white"
            alignItems="flex-end"
          ></Button>

          <Button
            title="Go back Home"
            onPress={() => this.props.navigation.navigate("Home")}
            color="white"
          ></Button>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
    alignItems: "center",
    justifyContent: "center",
  },

  Velvet: {
    color: "white",
    margin: 20,
    fontSize: 15,
  },

  Bonus: {
      color: "white",
      margin: 20,
      fontSize: 15,
  },

  pauseButton: {
    margin: 30,
  },
});
