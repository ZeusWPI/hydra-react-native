import {Surface, Text, TouchableRipple} from "react-native-paper";
import type {UGentArticle} from "../../types/stores";
import {StyleSheet, View} from "react-native";
import * as WebBrowser from "expo-web-browser";
import moment from "moment";

export const UGentArticleFeed = ({article}: { article: UGentArticle }) => {

  const handlePressArticle = async () => {
    WebBrowser.openBrowserAsync(article.link);
  };

  return (
      <Surface style={{...styles.container}}>
        <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={handlePressArticle}>
          <>
            <View style={styles.textContainer}>
              <Text variant="headlineSmall" style={styles.title}>
                {article.title}
              </Text>
              <Text style={styles.summary}>
                {article.summary}
              </Text>
              <View style={styles.additionalInfo}>
                <View>
                  <Text style={styles.smallText}>{moment(article.updated).format("DD MMM, H:mm")}</Text>
                </View>
              </View>
            </View>
          </>
        </TouchableRipple>
      </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 5,
    width: "95%",
    borderRadius: 15,
    overflow: "hidden",
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontWeight: "600",
    paddingBottom: 20,
  },
  summary: {
    paddingBottom: 10
  },
  additionalInfo: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallText: {
    fontWeight: "900",
  },
});
