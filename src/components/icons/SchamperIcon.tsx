import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

export const SchamperIcon = (props?: Omit<SvgProps, "style"> & { style?: ViewStyle }) => (
  <Svg
    width={typeof props?.style?.width === "number" ? props.style.width : 24}
    height={typeof props?.style?.height === "number" ? props.style.height : 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props?.color ?? "#c9d8e7"}
      d="M3.602 21.6c-1.906-1.464-1.257-3.262 1.718-4.76 2.514-1.266 3.341-1.95 6.341-5.248 1.958-2.153 2.665-3.23 3.685-5.612 1.514-3.537 2.555-4.54 3.837-3.702.686.45.79.757.79 2.334 0 1.085.337 2.855.837 4.4.828 2.554.831 2.602.3 4.42-.599 2.044-2.734 5.464-3.879 6.214-.918.602-2.366.463-2.825-.27-.464-.74.56-2.136 2.15-2.926 1.78-.885 2.27-2.08 2.284-5.566.01-2.362-.097-3.06-.533-3.498-.707-.707-1.017-.453-3.562 2.92a123.714 123.714 0 0 1-3.81 4.758c-1.029 1.204-2.146 2.728-2.482 3.387-.732 1.435-3 3.561-3.783 3.547-.308-.005-.789-.186-1.068-.4Z"
    />
  </Svg>
);
