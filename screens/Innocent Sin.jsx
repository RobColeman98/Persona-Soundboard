import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Audio } from "expo-av";

export default class InnocentSin extends React.Component {
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
      require("../assets/Kasugayama-High-School.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Kasugayama-High-School.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //  Kasugayma High

  async playSong2() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Zodiac.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong2() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Zodiac.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   Zodiac

  async playSong3() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Boss-Battle.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong3() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Boss-Battle.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   school days

  async playSong4() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Maya-Theme-(Sad).mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong4() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Maya-Theme-(Sad).mp3")
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
          source={require("../src/photos/IS-Cover.png")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.InnocentSin}>
          Persona 2: Innocent Sin is the first game in the cult classic Persona 2
          duology. Innocent Sin features in my opinon the best cast of
          characters in all of Persona with a great soundtrack to match.
          Innocent Sin features a more arcadey soundtrack with songs like
          Kasugayama High and Boss Battle to keep the pace of the game during
          your exploration, while also being able to set a serious and dark tone
          with tracks like Zodiac and Maya's theme.
        </Text>

        <Button
          title="Play Kasugayama High School"
          onPress={this.playSong}
          color="black"
        ></Button>

        <Button
          title="Play Zodiac"
          onPress={this.playSong2}
          color="black"
        ></Button>

        <Button
          title="Play Boss Battle"
          onPress={this.playSong3}
          color="black"
        ></Button>

        <Button
          title="Play Maya's theme"
          onPress={this.playSong4}
          color="black"
        ></Button>

        <View style={styles.pauseButton}>
          <Button
            title="Pause Song"
            onPress={this.pauseSong}
            color="black"
            alignItems="flex-end"
          ></Button>

          <Button
            title="Next Page"
            onPress={() => this.props.navigation.navigate("Eternal Punishment")}
            color="black"
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
    backgroundColor: "darkred",
    alignItems: "center",
    justifyContent: "center",
  },

  InnocentSin: {
    color: "black",
    margin: 20,
    fontSize: 14,
  },

  pauseButton: {
    margin: 30,
  },
});
