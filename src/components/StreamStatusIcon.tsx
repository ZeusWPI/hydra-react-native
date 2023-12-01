import { FontAwesomeIcon, Props } from "@fortawesome/react-native-fontawesome";
import { StreamState } from "../enums/streamState";
import { ActivityIndicator } from "react-native-paper";

export const StreamStatusIcon = (props: Omit<Props, "icon"> & { status: StreamState }) => {
  switch (props.status) {
    case StreamState.PAUSED: {
      return <FontAwesomeIcon {...props} icon={"play"} />;
    }
    case StreamState.BUFFERING: {
      return <ActivityIndicator animating={true} />;
    }
    case StreamState.PLAYING: {
      return <FontAwesomeIcon {...props} icon={"pause"} />;
    }
    case StreamState.ERRORED: {
      return <FontAwesomeIcon {...props} icon={"triangle-exclamation"} />;
    }
    default: {
      throw new Error("Invalid stream state");
    }
  }
};
