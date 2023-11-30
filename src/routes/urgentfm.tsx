import { StyleSheet, View } from "react-native";
import { UrgentFMIcon } from "../components/icons/UrgentFMIcon";
import { DefaultTheme, Text, TouchableRipple } from "react-native-paper";
import { AVPlaybackStatus, AVPlaybackStatusSuccess, Audio } from "expo-av";
import { useCallback, useEffect, useState } from "react";
import { StreamState } from "../enums/streamState";
import { StreamStatusIcon } from "../components/StreamStatusIcon";
import { useUrgentQuery } from "../stores/urgent";

// TODO: Add social media buttons

export const UrgentFMView = () => {
  const [audioStream, setAudioStream] = useState<Audio.Sound | null>(null);
  const [streamState, setStreamState] = useState<StreamState>(StreamState.PAUSED);
  const { data: metadata } = useUrgentQuery();

  const streamStateChange = useCallback(
    (s: AVPlaybackStatus) => {
      if (!audioStream) {
        return;
      }
      if ("error" in s) {
        setStreamState(StreamState.ERRORED);
      }
      setStreamState((s as AVPlaybackStatusSuccess).isPlaying ? StreamState.PLAYING : StreamState.BUFFERING);
    },
    [audioStream]
  );

  const playStream = useCallback(async () => {
    setStreamState(StreamState.BUFFERING);
    if (audioStream) {
      await audioStream.playAsync();
      return;
    }
    const { sound } = await Audio.Sound.createAsync({ uri: metadata.url }, { shouldPlay: true }, streamStateChange);
    setAudioStream(sound);
  }, [audioStream, metadata, streamStateChange]);

  const stopStream = useCallback(async () => {
    if (!audioStream) {
      setStreamState(StreamState.PAUSED);
      return;
    }
    setStreamState(StreamState.BUFFERING);
    await audioStream.stopAsync();
    setStreamState(StreamState.PAUSED);
  }, [audioStream]);

  const handleControlPress = useCallback(() => {
    switch (streamState) {
      case StreamState.PAUSED: {
        playStream();
        break;
      }
      case StreamState.BUFFERING:
      case StreamState.PLAYING: {
        stopStream();
        break;
      }
      case StreamState.ERRORED: {
        stopStream().then(() => playStream());
        break;
      }
    }
  }, [streamState, stopStream, playStream]);

  useEffect(() => {
    return () => {
      if (!audioStream) {
        return;
      }
      audioStream.unloadAsync();
    };
  }, [audioStream]);

  return (
    <View style={styles.container}>
      <UrgentFMIcon style={styles.logo} width={60} height={60} color={"#fff"} />
      <Text style={styles.urgent}>Urgent.fm</Text>
      <Text style={styles.artist}>{metadata.name}</Text>
      <TouchableRipple style={styles.streamControl} rippleColor="rgba(0, 0, 0, .32)" onPress={handleControlPress}>
        <StreamStatusIcon status={streamState} />
      </TouchableRipple>
      {metadata.meta.description !== "" && (
        <View style={styles.metadataContainer}>
          <Text variant="titleMedium">About {metadata.meta.name}</Text>
          <Text variant="bodySmall">{metadata.meta.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  logo: {
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: "#000",
    padding: 2,
    borderRadius: 5,
  },
  urgent: {
    fontWeight: "600",
  },
  artist: {
    fontWeight: "700",
  },
  streamControl: {
    marginVertical: 10,
    width: 50,
    height: 34,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  metadataContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.outline,
    padding: 10,
    width: 350,
    fontSize: 24,
  },
});
