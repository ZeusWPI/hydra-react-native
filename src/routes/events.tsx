import { useDSAQuery } from "../stores/dsa";
import { DSAEvent } from "../components/feed/DSAEvent";
import { StyleSheet, ScrollView } from "react-native";
import { DSAEventStore } from "../types/stores";

export default function EventView() {
  const { data: activities } = useDSAQuery();
  
  const activitiesByStartTime: Record<string, DSAEventStore[]> = {};
  activities.forEach(activity => {
    const start_time = activity.start_time;   
    if (!activitiesByStartTime[start_time]) {
      activitiesByStartTime[start_time] = [];
    }

    activitiesByStartTime[start_time].push(activity);
  });

  return (
    <ScrollView contentContainerStyle = {styles.container}>
      {activities.map((activity) => {
        console.log(activity);
        return <DSAEvent key = { activity.id } event = { activity } />
      }
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});
