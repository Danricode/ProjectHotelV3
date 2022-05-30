import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const MyCards = () => (
  <View>
    <View style={styles.firstChild}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Car Rentals</Title>
        </Card.Content>
        <Card.Cover
          style={styles.cover}
          source={require("../assets/rental.jpeg")} 
        />
        <Paragraph style={styles.paragraph}>Your ride everywhere</Paragraph>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Cruise lines</Title>
        </Card.Content>
        <Card.Cover
          style={styles.cover}
          source={require("../assets/cruise.jpg")}
        />
        <Paragraph style={styles.paragraph}>Sail away</Paragraph>
      </Card>
    </View>
    <View style={styles.firstChild}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Tour packages</Title>
        </Card.Content>
        <Card.Cover
          style={styles.cover}
          source={require("../assets/pack.jpg")}
        />
        <Paragraph style={styles.paragraph}>All fun, no hassle</Paragraph>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Activities</Title>
        </Card.Content>
        <Card.Cover
          style={styles.cover}
          source={require("../assets/act.jpg")}
        />
        <Paragraph style={styles.paragraph}>
          Your experience amplified
        </Paragraph>
      </Card>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontSize: 20,
  },
  paragraph: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontSize:15,
  },

  firstChild: {
    flexDirection: "row",
  },

  cover: {
    width: 180,
    height: 150,
  },
  card: { margin: 2 },
});

export default MyCards;
