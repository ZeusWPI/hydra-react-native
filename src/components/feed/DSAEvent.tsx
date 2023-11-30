import { StyleSheet } from "react-native";
import { DSAEventStore } from "../../types/stores";
import { Text, Card } from "react-native-paper";

export const DSAEvent = ({ event }: { event: DSAEventStore }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title = { event.title } />
      <Card.Content>
        <Text>{ event.description }</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    width: "95%"
  },
});
