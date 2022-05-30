import * as React from "react";
import { Headline } from "react-native-paper";
import { StyleSheet, Text, Image, View } from "react-native";

const HomeContent = () => (
  <View style={styles.container}>
    <Text style={styles.txtitle}>Where to?</Text>
    <Image style={styles.img} source={require("../assets/div.png")} />
<Text style={styles.txtcontent}>
Hotel bookings, transfers, car rental, cruises, show tickets, sightseeing’s, special services, gifts and assistant services all can be booked together or individually according to your needs. We also provide a wide range of tour suggestions and itineraries like self drive programs, roundtrips, Citybreaks, and biking and hiking.

A multilingual team of travel professionals with years of experience will assist you
</Text>
<Image style={styles.img} source={require("../assets/div.png")} />
  </View>
);

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -300,
  },
  img: {
    width: 375,
    height: 140,
  },
  txtitle: {
    textAlign: "center",
    fontFamily: "serif",
    fontStyle: "italic",
    fontSize: 20,
    marginTop:-50,
  },
  txtcontent: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontSize:15,
    textAlign: "left",
    margin:15,
    marginTop:-25,

  },
});
