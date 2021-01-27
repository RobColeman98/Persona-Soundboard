import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Audio } from "expo-av";

// const playSong = () => {
// let audio = new Audio(require("./assets/Mass Destruction.mp3"))
// audio.play();
// }

export default class Persona3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: null,
      setSound: null,
      song: null,
    };

    this.playSound = this.playSound.bind(this);
    this.pauseSound = this.pauseSound.bind(this);

    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);

    this.playMusic = this.playMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);

    this.playSong2 = this.playSong2.bind(this);
    this.pauseSong2 = this.pauseSong2.bind(this);
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

  async playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Mass-Destruction.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Mass-Destruction.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //mass destruction async functions

  async playSong() {
    console.log("Loading Song");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Burn-My-Dread.mp3")
    );
    this.setState({ sound: sound });
    console.log("Playing Song");
    await sound.playAsync();
  }

  async pauseSong() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Burn-My-Dread.mp3")
    );

    console.log("Unloading Song");
    this.state.sound.stopAsync();
    return sound;
  }
  // burn my dread

  async playMusic() {
    console.log("Loading Song");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Iwatodai-Dorm.mp3")
    );
    this.setState({ sound: sound });
    console.log("Playing Song");
    await sound.playAsync();
  }

  async pauseMusic() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Iwatodai-Dorm.mp3")
    );

    console.log("Unloading Song");
    this.state.sound.stopAsync();
    return sound;
  }
  // iwatodai dorm

  async playSong2() {
    console.log("Loading Song");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Master-of-Tartarus.mp3")
    );
    this.setState({ sound: sound });
    console.log("Playing Song");
    await sound.playAsync();
  }

  async pauseSong2() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Master-of-Tartarus.mp3")
    );

    console.log("Unloading Song");
    this.state.sound.stopAsync();
    return sound;
  }
  // master of tartarus

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../src/photos/Persona3.png")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.P3}>
          Persona 3 featured mainly more of a hip hop/electronica style of music
          which included songs such as Mass Destruction, Master of Shadow,
          Master of Tartarus, Iwatodai Dorm and more!
        </Text>

        <Button
          title="Play Mass Destruction"
          onPress={this.playSound}
          color="white"
        ></Button>

        <Button
          title="Play Burn My Dread"
          onPress={this.playSong}
          color="white"
        ></Button>

        <Button
          title="Play Iwatodai Dorm"
          onPress={this.playMusic}
          color="white"
        ></Button>

        <Button
          title="Play Master of Tartarus"
          onPress={this.playSong2}
          color="white"
        ></Button>

        <View style={styles.pauseButton}>
          <Button
            title="Pause Song"
            onPress={this.pauseSound}
            color="white"
            alignItems="flex-end"
          ></Button>

          <Button
            title="Next Page"
            onPress={() => this.props.navigation.navigate("Persona4")}
            color="white"
          ></Button>
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mediumblue",
    alignItems: "center",
    justifyContent: "center",
  },

  P3: {
    color: "white",
    margin: 20,
    fontSize: 14,
  },

  pauseButton: {
    margin: 30,
  },
});
