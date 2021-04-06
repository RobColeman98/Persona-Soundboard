import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Persona}>
          <Image
            source={require("../src/photos/Persona3-Cover.png")}
            style={{ width: 150, height: 150 }}
          />

          <Image
            source={require("../src/photos/Persona4-Cover.png")}
            style={{ width: 150, height: 150 }}
          />

          <Image
            source={require("../src/photos/Persona5-Cover.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>
        
        
        <View style={styles.ClassicPersona}>
          <Image
            source={require("../src/photos/Persona-1-Cover.png")}
            style={{ width: 150, height: 150 }}
          />

          <Image
            source={require("../src/photos/Innocent-Sin-Cover.png")}
            style={{ width: 150, height: 150 }}
          />

          <Image
            source={require("../src/photos/Eternal-Punishment-Cover.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>

        <Text style={styles.intro}>
          The Persona video game series is my favorite franchise of all time. I
          was introduce to the franchise with the latest edition, which is
          Persona 5, and I absolutely fell in love with it from the start.
        </Text>
        <Text></Text>

        <Text style={styles.intro}>
          Persona is a game JRPG(Japanese Role Playing Game.. P.S. The Game is
          translated in English!) where you play as a protagonist who has the
          ability to summon "personas" to help fight shadows, who are cognitive
          beings and the main enemy types.
        </Text>

        <Text></Text>

        <Text style={styles.intro}>
          The Persona Games features great combat, amazing stories and a great
          cast of characters. However, what always kept me coming back for
          multiple playthroughs is the soundtrack. Persona has some of the best
          music I have ever heard from any video game franchise and while I
          haven't played the first game yet, I'm willing to stand firm on that.
        </Text>

        <Text></Text>

        <Text style={styles.intro}>
          Today, we are going to be listen to some of my favorite songs from
          Persona franchise!
        </Text>

        <Button
          title="Next Page"
          onPress={() => this.props.navigation.navigate("Persona1")}
        ></Button>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
  intro: {
    alignItems: "center",
    margin: 1,
    fontSize: 15,
  },
  Persona: {
    margin: 20,
    flexDirection: "row",
  },

  ClassicPersona: {
    margin: 20,
    flexDirection: "row",
  },
});
