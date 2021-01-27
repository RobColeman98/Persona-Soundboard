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
      require("../assets/Shadow-World.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Shadow-World.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  // shadow world

  async playSong2() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Heaven.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong2() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Heaven.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  // heaven

  async playSong3() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Time-To-Make-History.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong3() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Time-To-Make-History.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  // time to make history

  async playSong4() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Snowflakes.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong4() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Snowflakes.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../src/photos/P4G-Cover.png")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.P4}>
          Persona 4 was a colorful and upbeat game that has a soundtrack to
          match. The soundtrack is reminiscent of Japanese pop with also a hint
          of rock. With songs like "The Shadow World", "Time to Make History",
          "Heaven", and "Snowflakes", Persona 4 has a soundtrack that many
          players would enjoy.
        </Text>

        <Button
          title="Play Shadow World"
          onPress={this.playSong}
          color="limegreen"
        ></Button>

        <Button
          title="Play Heaven"
          onPress={this.playSong2}
          color="mediumvioletred"
        ></Button>

        <Button
          title="Play Time to make History"
          onPress={this.playSong3}
          color="darkorange"
        ></Button>

        <Button
          title="Play Snowflakes"
          onPress={this.playSong4}
          color="turquoise"
        ></Button>

        <View style={styles.pauseButton}>
          <Button
            title="Pause Song"
            onPress={this.pauseSong}
            color="mediumvioletred"
            alignItems="flex-end"
          ></Button>

          <Button
            title="Next Page"
            onPress={() => this.props.navigation.navigate("Persona5")}
            color="limegreen"
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
  },

  P4: {
    color: "limegreen",
    margin: 20,
    fontSize: 15,
  },

  pauseButton: {
    margin: 30,
  },
});
