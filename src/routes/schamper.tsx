// import { ScrollView } from "react-native-gesture-handler";
import { useSchamperQuery } from "../stores/schamper";
import { SchamperArticle } from "../components/feed/SchamperArticle";
import { StyleSheet, ScrollView } from "react-native";

const SchamperView = () => {
  const { data: articles } = useSchamperQuery();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {articles.map(a => (
        <SchamperArticle key={a.link} article={a} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

export default SchamperView;
