import { Surface, Text, TouchableRipple } from "react-native-paper";
import type { UGentArticle } from "../../types/stores";
import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
export const UGentArticle = ({ article }: { article: UGentArticle }) => {

  const handlePressArticle = async () => {
    WebBrowser.openBrowserAsync(article.link);
  };

  return (
    <Surface style={{ ...styles.container, backgroundColor: article.category_color }}>
      <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={handlePressArticle}>
        <>
          <View style={styles.textContainer}>
            <Text variant="headlineSmall" style={styles.title}>
              {article.title}
            </Text>
            <Text>
              {article.summary}
            </Text>
            <View style={styles.additionalInfo}>
              <View>
                <Text style={styles.smallText}>{article.updated}</Text>
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
    color: "#ddd",
  },
  title: {
    fontWeight: "600",
    color: "#ddd",
  },
  additionalInfo: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#ddd",
  },
  smallText: {
    color: "#ddd",
    fontWeight: "900",
  },
});
