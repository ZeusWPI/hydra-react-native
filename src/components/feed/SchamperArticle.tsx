import { Surface, Text, TouchableRipple } from "react-native-paper";
import type { Article } from "../../types/stores";
import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
export const SchamperArticle = ({ article }: { article: Article }) => {
  const [imgSize, setImgSize] = useState({ width: 0, height: 1 });

  useEffect(() => {
    Image.getSize(article.image, (w, h) => {
      setImgSize({
        width: w,
        height: h,
      });
    });
  }, [article.image]);

  const handlePressArticle = async () => {
    WebBrowser.openBrowserAsync(article.link);
  };

  return (
    <Surface style={{ ...styles.container, backgroundColor: article.category_color }}>
      <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={handlePressArticle}>
        <>
          <Image
            style={{
              flex: 1,
              aspectRatio: (imgSize.width ?? 1) / (Math.max(imgSize.height, 1) ?? 1),
            }}
            source={{ uri: article.image }}
          />
          <View style={styles.textContainer}>
            <Text variant="headlineSmall" style={styles.title}>
              {article.title}
            </Text>
            <View style={styles.additionalInfo}>
              <View>
                <Text style={styles.smallText}>{article.author}</Text>
                <Text style={styles.smallText}>{article.pub_date}</Text>
              </View>
              <Text style={styles.smallText}>{article.category.toUpperCase()}</Text>
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
