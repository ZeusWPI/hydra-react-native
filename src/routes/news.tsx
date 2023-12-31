import { ScrollView } from "react-native-gesture-handler";
import { useUGentQuery } from "../stores/news";
import { UGentArticleFeed } from "../components/feed/UGentArticle";
import { StyleSheet } from "react-native";

const NewsView = () => {
  const { data: articles } = useUGentQuery();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {articles.map(a => (
        <UGentArticleFeed key={a.link} article={a} />
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
