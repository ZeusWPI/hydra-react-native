import { Surface, Text, TouchableRipple } from "react-native-paper";
import type { Library } from "../../types/stores";
import { GestureResponderEvent, Pressable, Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";


export const LibraryListItemComponent = ({ library, onPress, showDetails }: { library: Library, onPress: ((event: GestureResponderEvent) => void), showDetails: boolean}) => {
  const [imgSize, setImgSize] = useState({ width: 0, height: 1 });
  
  useEffect(() => {
    Image.getSize(library.image_url, (w, h) => {
      setImgSize({
        width: w,
        height: h,
      });
    });
  }, [library.image_url]);

  return (
    <Surface style={{ ...styles.container }}>
      <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={onPress}>
        <>
          <Image
              style={{
                flex: 1,
                aspectRatio: (imgSize.width ?? 1) / (Math.max(imgSize.height, 1) ?? 1),
              }}
              source={{ uri: library.image_url }}
            />
          <View style={styles.textContainer}>
            <Text variant="headlineSmall" style={styles.title}>
              {library.name_nl}
            </Text>
            <View style={styles.additionalInfo}>
              <View>
                <Text style={styles.smallText}>{library.address.join(" ")}</Text>
                {
                  showDetails ?
                    <>
                      <Text style={styles.smallText}>{library.email}</Text>
                      <Text style={styles.smallText}>{library.telephone}</Text>
                    </>
                  : 
                    <></>
                }
              </View>
            </View>
          </View>
        </>
      </TouchableRipple>
      {
        showDetails ? 
          <Pressable style={{...styles.button, backgroundColor: "#ddd"}} onPress={() => WebBrowser.openBrowserAsync(library.link)}>
            <Text>Go to site</Text>
          </Pressable>
        : 
          <></>
      } 
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
    color: "#000",
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
    color: "#000",
    fontWeight: "900",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

