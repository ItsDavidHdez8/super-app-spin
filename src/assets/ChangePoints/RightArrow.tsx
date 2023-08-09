import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const SVGComponent = ({style, size = 24}: Props) => (
  <Svg width={size} height={size} style={style} viewBox="0 0 25 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.54289 3.04289C7.15237 3.43342 7.15237 4.06658 7.54289 4.45711L15.3358 12.25L7.54289 20.0429C7.15237 20.4334 7.15237 21.0666 7.54289 21.4571C7.93342 21.8476 8.56658 21.8476 8.95711 21.4571L17.4571 12.9571C17.8476 12.5666 17.8476 11.9334 17.4571 11.5429L8.95711 3.04289C8.56658 2.65237 7.93342 2.65237 7.54289 3.04289Z"
      fill="#69698B"
    />
  </Svg>
);
export default SVGComponent;
