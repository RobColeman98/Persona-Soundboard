import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Audio } from "expo-av";

export default class Persona extends React.Component {
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
      require("../assets/Dream-of-Butterfly.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Dream-of-Butterfly.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   Dream of Butterfly

  async playSong2() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Bloody-Destiny.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong2() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Bloody-Destiny.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   Bloody Destiny

  async playSong3() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/School-Days.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong3() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/School-Days.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  //   school days

  async playSong4() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Kama-Palace.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong4() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Kama-Palace.mp3")
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
          source={require("../src/photos/P1-Cover.png")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.P1}>
          Persona 1 is the first game into the Persona franchise. Releasing
          originally back in 1996 and getting a Psp remake in 2009, Persona
          features a more mature theme then its modern counterparts. With songs
          featuring Dream of Butterfly, Kama Palace, School days and more,
          Persona is truly a classic.
        </Text>

        <Button
          title="Play Dream of Butterfly"
          onPress={this.playSong}
          color="white"
        ></Button>

        <Button
          title="Play Bloody Destiniy"
          onPress={this.playSong2}
          color="white"
        ></Button>

        <Button
          title="Play School Days"
          onPress={this.playSong3}
          color="white"
        ></Button>

        <Button
          title="Play Kama Palace"
          onPress={this.playSong4}
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
            title="Next Page"
            onPress={() =>
              this.props.navigation.navigate("Innocent Sin")
            }
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
    backgroundColor: "blueviolet",
    alignItems: "center",
    justifyContent: "center",
  },

  P1: {
    color: "white",
    margin: 20,
    fontSize: 14,
  },

  pauseButton: {
    margin: 30,
  },
});
