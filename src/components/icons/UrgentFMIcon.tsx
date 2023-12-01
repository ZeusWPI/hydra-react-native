import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";

export const UrgentFMIcon = (props?: Omit<SvgProps, "style"> & { style?: ViewStyle }) => (
  <Svg
    width={typeof props?.style?.width === "number" ? props.style.width : 24}
    height={typeof props?.style?.height === "number" ? props.style.height : 24}
    viewBox="0 0 22.5 22.5"
    fill="none"
    {...props}
  >
    <Path d="M19.284 20.625 11.25 1.875l-8.033 18.75 8.033-4.705Z" fill={props?.color ?? "#c9d8e7"} />
  </Svg>
);
