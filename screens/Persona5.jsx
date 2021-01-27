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
      require("../assets/Rivers-in-the-Desert.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Rivers-in-the-Desert.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  // Rivers in the Desert

  async playSong2() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/No-More-What-Ifs.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong2() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/No-More-What-Ifs.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }
  // no more what ifs

  async playSong3() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Last-Surprise.mp3")
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
  // last surpise

  async playSong4() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Butterfly-Kiss.mp3")
    );
    this.setState({ sound: sound });

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async pauseSong4() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Butterfly-Kiss.mp3")
    );
    console.log("Unloading Sound");
    this.state.sound.stopAsync();
    return sound;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../src/photos/Persona-5-Royal.png")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.P4}>
          Persona 5 has my favorite soundtrack in the series and even my
          favorite soundtrack in all of gaming! Persona 5 focused heavily on a
          jazzy sound with songs such as "No More What Ifs", "Butterfly Kiss",
          "Last Surprise", "Rivers in the Desert", and much much more
        </Text>

        <Button
          title="Play Rivers in the Desert"
          onPress={this.playSong}
          color="black"
        ></Button>

        <Button
          title="Play No-More-What-Ifs"
          onPress={this.playSong2}
          color="black"
        ></Button>

        <Button
          title="Play Last Surprise"
          onPress={this.playSong3}
          color="black"
        ></Button>

        <Button
          title="Play Butterfly Kiss"
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
            onPress={() => this.props.navigation.navigate("Velvet-Room")}
            color="black"
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  P4: {
    color: "black",
    margin: 20,
    fontSize: 15,
  },

  pauseButton: {
    margin: 30,
  },
});
