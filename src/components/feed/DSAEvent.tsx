import { StyleSheet } from "react-native";
import { DSAEventStore } from "../../types/stores";
import { Text, Card, List } from "react-native-paper";

// used to render a single DSAEvent
export const DSAEvent = ({ event }: { event: DSAEventStore }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title = { event.title }/>
      <Card.Content>
        <Text>{ event.description }</Text>
      </Card.Content>
    </Card>
  );
};

// used to render a group of events on the same day
export const DSAEventDay = ({ events, date }: { events: DSAEventStore[], date: string }) => {
  return (
    <List.Section title = { date } style = { styles.list }>
      { events.map((event) => {
        return <DSAEvent key = { event.id } event = { event }/>
      })}
    </List.Section>
  )
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    width: "95%"
  },
  list: {
    margin: 5,
    padding: 10,
    width: "95%"
  }
});
