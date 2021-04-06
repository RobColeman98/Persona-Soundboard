import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Audio } from "expo-av";

export default class EternalPunishment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: null,
      setSound: null,
      song: null,
    };

    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);

    this.playSong2 = this.playSong2.bind(this);
    this.pauseSong2 = this.pauseSong2.bind(this);

    this.playSong3 = this.playSong3.bind(this);
    this.pauseSong3 = this.pauseSong3.bind(this);

    this.playSong4 = this.playSong4.bind(this);
    this.pauseSong4 = this.pauseSong4.bind(this);
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
      require("../assets/Time-Castle.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Time-Castle.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //  Kasugayma High

  async playSong2() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Kaori.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong2() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Kaori.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   Zodiac

  async playSong3() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/EP-Boss-Battle.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong3() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/EP-Boss-Battle.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   school days

  async playSong4() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Change-Your-Way.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong4() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Change-Your-Way.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   Kama Palace

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../src/photos/EP-Cover.png")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.InnocentSin}>
          Persona 2: Eternal Punishment is the sequel to the Persona 2 duology
          and follows after the events of Innocent Sin with Maya as the main
          character and a all new cast of characters. Eternal Punishment keeps
          some of the same songs from the Innocent Sin OST, but gives them
          different tones to establish that the player is playing a different
          game.
        </Text>

        <Button
          title="Play Time Castle"
          onPress={this.playSong}
          color="indianred"
        ></Button>

        <Button
          title="Play Kaori"
          onPress={this.playSong2}
          color="indianred"
        ></Button>

        <Button
          title="Play Boss Battle"
          onPress={this.playSong3}
          color="indianred"
        ></Button>

        <Button
          title="Play Change Your Way"
          onPress={this.playSong4}
          color="indianred"
        ></Button>

        <View style={styles.pauseButton}>
          <Button
            title="Pause Song"
            onPress={this.pauseSong}
            color="indianred"
            alignItems="flex-end"
          ></Button>

          <Button
            title="Next Page"
            onPress={() => this.props.navigation.navigate("Persona3")}
            color="indianred"
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
    backgroundColor: "burlywood",
    alignItems: "center",
    justifyContent: "center",
  },

  InnocentSin: {
    color: "indianred",
    margin: 20,
    fontSize: 14,
  },

  pauseButton: {
    margin: 30,
  },
});
