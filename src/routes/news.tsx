// import { ScrollView } from "react-native-gesture-handler";
import { useUGentQuery } from "../stores/news";
import { UGentArticle } from "../components/feed/UGentArticle";
import { StyleSheet, ScrollView } from "react-native";

const NewsView = () => {
  const { data: articles } = useUGentQuery();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {articles.map(a => (
        <UGentArticle key={a.link} article={a} />
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

export default NewsView;
