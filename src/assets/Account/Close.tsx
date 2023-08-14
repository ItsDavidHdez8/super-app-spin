import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
};

const SVGComponent = ({size = 16}: Props) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.6405 2.64025C2.89553 2.38522 3.30903 2.38522 3.56406 2.64025L8.00024 7.07643L12.4364 2.64025C12.6915 2.38522 13.1049 2.38522 13.36 2.64025C13.615 2.89529 13.615 3.30878 13.36 3.56382L8.92381 8L13.36 12.4362C13.615 12.6912 13.615 13.1047 13.36 13.3597C13.1049 13.6148 12.6915 13.6148 12.4364 13.3597L8.00024 8.92356L3.56406 13.3597C3.30903 13.6148 2.89553 13.6148 2.6405 13.3597C2.38546 13.1047 2.38546 12.6912 2.6405 12.4362L7.07667 8L2.6405 3.56382C2.38546 3.30878 2.38546 2.89529 2.6405 2.64025Z"
      fill="#69698B"
    />
  </Svg>
);
export default SVGComponent;
